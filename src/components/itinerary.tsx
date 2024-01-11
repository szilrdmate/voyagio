import React, { useReducer } from "react";
import { generateItinerary } from "../services/gptService";

type FormState = {
  destination: string;
  length: string;
  budget: string;
  program: string;
  itinerary: ItineraryItem[] | null;
  errors: {
    destination: string;
    length: string;
    budget: string;
    program: string;
  };
};

interface ItineraryItem {
  day: number;
  activities: string[];
  budget: number;
  // Add other relevant fields if needed
}

type FormAction =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "RESET_FORM" }
  | { type: "SET_ERRORS"; errors: FormState["errors"] }
  | { type: "SET_ITINERARY"; itinerary: ItineraryItem[] | null };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return { ...initialFormState };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "SET_ITINERARY":
      return { ...state, itinerary: action.itinerary };
    default:
      return state;
  }
};

const initialFormState: FormState = {
  destination: "",
  length: "",
  budget: "",
  program: "",
  itinerary: null,
  errors: {
    destination: "",
    length: "",
    budget: "",
    program: "",
  },
};

const ItineraryPlanner: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);
  const { destination, length, budget, program, errors } = state;

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!destination) {
      newErrors.destination = "Destination is required";
      isValid = false;
    }
    if (!length) {
      newErrors.length = "Length is required";
      isValid = false;
    }
    if (!program) {
      newErrors.program = "Program type is required";
      isValid = false;
    }
    if (!budget) {
      newErrors.budget = "Budget is required";
      isValid = false;
    }

    dispatch({ type: "SET_ERRORS", errors: newErrors });
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isFormValid = validateForm();
    if (!isFormValid) return;

    try {
      const response = await generateItinerary({
        destination,
        length,
        budget,
        program,
      });
      // Process the response into ItineraryItem[]
      const processedItinerary = processGptResponse(response);
      dispatch({ type: "SET_ITINERARY", itinerary: processedItinerary });
    } catch (error) {
      // Handle errors
      console.error;
    }
  };

  const processGptResponse = (response: string): ItineraryItem[] => {
    const daySections = response.split(/Day \d+:/); // Split by 'Day X:'
    const itinerary: ItineraryItem[] = [];

    daySections.forEach((section, index) => {
      if (section.trim() === "") return; // Skip empty sections

      const activities = section
        .split(",")
        .map((activity) => activity.trim())
        .slice(0, 3); // Get the first 3 activities
      const budget = calculateDailyBudget(
        budget,
        index + 1,
        daySections.length
      ); // Calculate budget for the day

      itinerary.push({
        day: index + 1,
        activities,
        budget,
      });
    });

    return itinerary;
  };

  const calculateDailyBudget = (
    totalBudget: string,
    dayNumber: number,
    totalDays: number
  ): number => {
    // Example logic to allocate budget evenly across days
    const budget = parseFloat(totalBudget);
    return Math.round(budget / totalDays);
  };

  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
  };

  const checkValue = (value: string): string | null => {
    if (value === length && length) {
      return length + " days";
    } else if (value === budget && budget) {
      return budget + " $";
    }
    return null;
  };

  // onChange handlers
  const handleChange = (field: string, value: string) => {
    dispatch({ type: "SET_FIELD", field, value });
    if (value) {
      dispatch({ type: "SET_ERRORS", errors: { ...errors, [field]: "" } });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white p-8 rounded-2xl shadow-2xl grid place-items-center bg-opacity-20 backdrop-blur-xl border-[1px] border-white border-opacity-20 px-8'>
        <h2 className='text-3xl font-bold'>Plan Your Next Trip</h2>
        <div className='flex flex-col w-full'>
          <label htmlFor='destination' className='font-bold'>
            Destination:
          </label>
          <input
            id='destination'
            type='text'
            autoComplete='off'
            value={destination}
            onChange={(e) => handleChange("destination", e.target.value)}
            placeholder='Enter a location'
            className='rounded-xl px-4 py-2 h-12 w-full bg-transparent border-[1px] backdrop-blur-lg border-opacity-10 focus-within:outline-none placeholder:text-gray-200 placeholder:font-base border-gray-100 mt-2'
          />
          {errors.destination && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-full overflow-hidden'>
              {errors.destination}
            </div>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='program' className='font-bold'>
            Program Type:
          </label>
          <select
            id='program'
            value={program}
            onChange={(e) => handleChange("program", e.target.value)}
            className='rounded-xl px-4 py-2 h-12 w-full bg-transparent border-[1px] backdrop-blur-lg border-opacity-10 focus-within:outline-none placeholder:text-gray-200 placeholder:font-base border-gray-100 mt-2'>
            <option value=''>Select a Program</option> {/* Default option */}
            <option value='Adventure'>Adventure</option>
            <option value='Cultural'>Cultural</option>
            <option value='Party'>Party</option>
            <option value='Relax'>Relax</option>
          </select>
          {errors.program && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-full overflow-hidden'>
              {errors.program}
            </div>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='length' className='font-bold'>
            Length: {checkValue(length)}
          </label>
          <input
            id='length'
            type='range'
            min='1'
            max='14'
            value={length}
            onChange={(e) => handleChange("length", e.target.value)}
            className='rounded-full py-2 h-10 w-full bg-transparent'
          />
          {errors.length && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-full overflow-hidden'>
              {errors.length}
            </div>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='budget' className='font-bold'>
            Budget: {checkValue(budget)}
          </label>
          <input
            id='budget'
            type='range'
            value={budget}
            min='100'
            max='2000'
            step='50'
            onChange={(e) => handleChange("budget", e.target.value)}
            className='rounded-full py-2 h-10 w-full bg-transparent border-2 border-opacity-20 border-gray-100'
          />
          {errors.budget && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-full overflow-hidden'>
              {errors.budget}
            </div>
          )}
        </div>
        <div className='flex flex-row w-full space-x-4'>
          <button
            className='w-full bg-teal-500 h-12 rounded-xl font-bold text-xl border-[1px] border-opacity-20 border-gray-100 shadow-md'
            type='submit'
            value='Submit'>
            Get Itinerary
          </button>
          <button
            className='w-full bg-gray-500 h-12 rounded-xl font-bold text-xl border-[1px] border-opacity-20 border-gray-100 shadow-md'
            type='button' // type='button' to prevent form submission
            onClick={handleReset}
            value='Reset'>
            Reset Prompt
          </button>
        </div>
      </form>

      {state.itinerary && (
        <div>
          {state.itinerary.map((item, index) => (
            <div key={index}>
              <h3>Day {item.day}</h3>
              <ul>
                {item.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItineraryPlanner;
