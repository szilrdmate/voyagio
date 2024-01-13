import { useReducer } from "react";
import { useItineraryFormValidation } from "../hooks/useItineraryFormValidation.ts";
import { useSubmitItinerary } from "../hooks/useSubmitItinerary.ts";
import { useInputChange } from "../hooks/useInputChange.ts";
import { useResetForm } from "../hooks/useResetForm.ts";
import { ItineraryAction, ItineraryState } from "../types/ItineraryTypes.ts";

const initialState: ItineraryState = {
  destination: "",
  length: "",
  budget: "",
  program: "",
  itinerary: null,
};

// Define the reducer function
const itineraryReducer = (state: ItineraryState, action: ItineraryAction) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialState;
    case "SET_ITINERARY":
      return { ...state, itinerary: action.itinerary };
    default:
      return state;
  }
};

const ItineraryPlanner = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<ItineraryState, ItineraryAction>
  >(itineraryReducer, initialState);
  const { errors, validate, setErrors } = useItineraryFormValidation();

  const handleSubmit = useSubmitItinerary(state, validate, dispatch);
  const { handleInputChange, handleSelectChange } = useInputChange(
    dispatch,
    setErrors
  );
  const handleReset = useResetForm(dispatch, setErrors);

  const checkValue = (value: string): string | null => {
    if (value === state.length && state.length) {
      return state.length + " days";
    } else if (value === state.budget && state.budget) {
      return state.budget + " $";
    }
    return null;
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
            value={state.destination}
            onChange={handleInputChange("destination")}
            placeholder='Enter a location'
            className='rounded-xl px-4 py-2 h-12 w-full bg-transparent border-[1px] backdrop-blur-lg border-opacity-10 focus-within:outline-none placeholder:text-gray-200 placeholder:font-base border-gray-100 mt-2'
          />
          {errors.destination && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
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
            value={state.program}
            onChange={handleSelectChange("program")}
            className='rounded-xl px-4 py-2 h-12 w-full bg-transparent border-[1px] backdrop-blur-lg border-opacity-10 focus-within:outline-none placeholder:text-gray-200 placeholder:font-base border-gray-100 mt-2'>
            <option value=''>Select a Program</option> {/* Default option */}
            <option value='Adventure'>Adventure</option>
            <option value='Cultural'>Cultural</option>
            <option value='Party'>Party</option>
            <option value='Relax'>Relax</option>
          </select>
          {errors.program && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.program}
            </div>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='length' className='font-bold'>
            Length: {checkValue(state.length)}
          </label>
          <input
            id='length'
            type='range'
            min='1'
            max='14'
            value={state.length}
            onChange={handleInputChange("length")}
            className='rounded-full py-2 h-10 w-full bg-transparent'
          />
          {errors.length && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.length}
            </div>
          )}
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='budget' className='font-bold'>
            Budget: {checkValue(state.budget)}
          </label>
          <input
            id='budget'
            type='range'
            value={state.budget}
            min='100'
            max='2000'
            step='50'
            onChange={handleInputChange("budget")}
            className='rounded-full py-2 h-10 w-full bg-transparent'
          />
          {errors.budget && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.budget}
            </div>
          )}
        </div>
        <div className='flex flex-row w-full space-x-4'>
          <button
            className='w-full bg-teal-500 text-xl button shadow-md'
            type='submit'
            value='Submit'>
            Get Itinerary
          </button>
          <button
            className='w-full bg-gray-500 text-xl button shadow-md'
            type='button'
            onClick={handleReset}
            value='Reset'>
            Reset Prompt
          </button>
        </div>
      </form>
    </>
  );
};

export default ItineraryPlanner;
