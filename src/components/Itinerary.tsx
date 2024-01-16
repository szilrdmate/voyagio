// components/Itinerary.tsx
import { useReducer } from "react";
import { useItineraryFormValidation } from "../hooks/useItineraryFormValidation.ts";
import { useSubmitItinerary } from "../hooks/useSubmitItinerary.ts";
import { useInputChange } from "../hooks/useInputChange.ts";
import { useResetForm } from "../hooks/useResetForm.ts";
import { ItineraryAction, FormState } from "../types/ItineraryTypes.ts";

const initialState: FormState = {
  destination: "",
  date: "",
  length: "",
  group: "",
  budget: "",
  activity: [],
};

// Define the reducer function
const itineraryReducer = (state: FormState, action: ItineraryAction) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return { ...initialState };
    case "SET_ITINERARY":
      return { ...state, itinerary: action.itinerary };
    case "TOGGLE_ARRAY_FIELD_ITEM": {
      const arrayField = state[action.field] as string[]; // Typecasting for clarity
      const valueIndex = arrayField.indexOf(action.value);

      // Using immutable update patterns
      const updatedArray =
        valueIndex >= 0
          ? arrayField.filter((_, index) => index !== valueIndex) // Remove item
          : [...arrayField, action.value]; // Add item

      return { ...state, [action.field]: updatedArray };
    }
    default:
      return state;
  }
};

const ItineraryPlanner = () => {
  const [state, dispatch] = useReducer<
    React.Reducer<FormState, ItineraryAction>
  >(itineraryReducer, initialState);
  const { errors, validate, setErrors } = useItineraryFormValidation();

  const handleSubmit = useSubmitItinerary(state, validate);

  const {
    handleInputChange,
    handleButtonInputChange,
    handleMultipleChoiceChange,
  } = useInputChange(dispatch, setErrors);

  const handleReset = useResetForm(dispatch, setErrors);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white p-8 rounded-2xl shadow-2xl grid place-items-center border border-gray-500 border-opacity-20 px-8'>
        <h2 className='text-3xl font-bold'>Plan Your Next Trip</h2>

        {/*Destination Size*/}
        <div className='w-full py-8'>
          <h4 className='font-bold mb-8 text-xl'>
            Where would you like to go? {state.destination}
          </h4>
          <label htmlFor='destination' className='hidden'>
            Where do you want to go?
          </label>
          <input
            id='destination'
            type='text'
            autoComplete='off'
            name='destination'
            value={state.destination}
            onChange={handleInputChange("destination")}
            placeholder='Enter a location'
            className='max-w-xl rounded-xl px-4 py-2 h-12 w-full bg-transparent backdrop-blur-lg focus-within:outline-none placeholder:text-gray-400 placeholder:font-base border-gray-300 border mt-2'
          />
          {errors.destination && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.destination}
            </div>
          )}
        </div>

        {/*Date */}
        <div className='w-full py-8 border-t-gray-300 border-t'>
          <h4 className='font-bold mb-8 text-xl'>
            When are you planning to go? {state.date}
          </h4>
          <label htmlFor='date' className='hidden'>
            When are you planning to go?
          </label>
          <input
            id='date'
            type='date'
            name='date'
            value={state.date}
            onChange={handleInputChange("date")}
            placeholder='Enter a location'
            className='max-w-xl rounded-xl px-4 py-2 h-12 w-full bg-transparent backdrop-blur-lg  focus-within:outline-none placeholder:text-gray-400 placeholder:font-base border-gray-300 border mt-2'
          />
          {errors.date && (
            <div className='error text-white absolute right-20 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.date}
            </div>
          )}
        </div>

        {/*Length*/}
        <div className='w-full py-8 border-t-gray-300 border-t'>
          <h4 className='font-bold mb-8 text-xl'>
            How many days are you planning to stay? {state.length}
          </h4>
          <label htmlFor='length' className='hidden'>
            Length:
          </label>
          <input
            id='length'
            type='range'
            min='1'
            max='14'
            name='length'
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

        {/*Group Size*/}
        <div className='w-full py-8 border-t-gray-300 border-t'>
          <h4 className='font-bold mb-8 text-xl'>
            How many people are travelling? {state.group}
          </h4>
          <label className='hidden' htmlFor='group'>
            Group size:
          </label>
          <div className='grid grid-cols-3 grid-rows-2 gap-4'>
            <button
              type='button'
              onClick={handleButtonInputChange("group", "solo traveller")}
              className={`button bg-white h-24 text-gray-800 ${
                state.group === "solo traveller"
                  ? "border-gray-500 border"
                  : "border-gray-300 border"
              }`}>
              Solo
            </button>
            <button
              type='button'
              onClick={handleButtonInputChange("group", "couple")}
              className={`button bg-white h-24 text-gray-800 ${
                state.group === "couple"
                  ? "border-gray-500 border"
                  : "border-gray-300 border"
              }`}>
              Couple
            </button>
            <button
              type='button'
              onClick={handleButtonInputChange("group", "group of friends")}
              className={`button bg-white h-24 text-gray-800 ${
                state.group === "group of friends"
                  ? "border-gray-500 border"
                  : "border-gray-300 border"
              }`}>
              Friends
            </button>
            <button
              type='button'
              onClick={handleButtonInputChange("group", "family")}
              className={`button bg-white h-24 text-gray-800 ${
                state.group === "family"
                  ? "border-gray-500 border"
                  : "border-gray-300 border"
              }`}>
              Family
            </button>
          </div>
          <input className='hidden' type='text' name='group' id='group' />
          {errors.group && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.group}
            </div>
          )}
        </div>

        {/*Budget Section*/}
        <div className='w-full py-8 border-t-gray-300 border-t'>
          <h4 className='font-bold mb-8 text-xl'>
            What is your budget range? {state.budget}
          </h4>
          <label htmlFor='budget' className='hidden'>
            Budget:
          </label>
          <div className='grid grid-cols-3 gap-4'>
            <button
              type='button'
              onClick={handleButtonInputChange("budget", "under a 1000$")}
              className={`button bg-white h-24 text-gray-800 ${
                state.budget === "under a 1000$"
                  ? "border-gray-800 border"
                  : "border-gray-300 border"
              }`}>
              Budget
            </button>
            <button
              type='button'
              onClick={handleButtonInputChange(
                "budget",
                "between 1000 and 2500$"
              )}
              className={`button bg-white h-24 text-gray-800 ${
                state.budget === "between 1000 and 2500$"
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Mid
            </button>
            <button
              type='button'
              onClick={handleButtonInputChange("budget", "above 2500$")}
              className={`button bg-white h-24 text-gray-800 ${
                state.budget === "above 2500$"
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Luxury
            </button>
          </div>
          <input
            id='budget'
            value={state.budget}
            readOnly
            className='hidden'
            type='text'
            name='budget'
          />
          {errors.budget && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.budget}
            </div>
          )}
        </div>

        {/*Activities Section*/}
        <div className='w-full py-8 border-t-gray-300 border-t'>
          <h4 className='font-bold mb-8 text-xl'>
            Tell us about activities that interest you:{" "}
            {state.activity.join(", ")}
          </h4>
          <label htmlFor='activity' className='hidden'>
            Activities
          </label>
          <div className='grid grid-cols-3 grid-rows-3 gap-4'>
            <button
              type='button'
              onClick={() => handleMultipleChoiceChange("activity", "beaches")}
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("beaches")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Beaches
            </button>
            <button
              type='button'
              onClick={() => handleMultipleChoiceChange("activity", "hiking")}
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("hiking")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Hiking
            </button>
            <button
              type='button'
              onClick={() => handleMultipleChoiceChange("activity", "culture")}
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("culture")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Culture
            </button>
            <button
              type='button'
              onClick={() => handleMultipleChoiceChange("activity", "sports")}
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("sports")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Sports
            </button>
            <button
              type='button'
              onClick={() =>
                handleMultipleChoiceChange("activity", "nightlife")
              }
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("nightlife")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Nightlife
            </button>
            <button
              type='button'
              onClick={() =>
                handleMultipleChoiceChange("activity", "food exploration")
              }
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("food exploration")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Food Exploration
            </button>
            <button
              type='button'
              onClick={() =>
                handleMultipleChoiceChange("activity", "sight seeing")
              }
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("sight seeing")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Sight Seeing
            </button>
            <button
              type='button'
              onClick={() => handleMultipleChoiceChange("activity", "wellness")}
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("wellness")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Wellness
            </button>
            <button
              type='button'
              onClick={() => handleMultipleChoiceChange("activity", "shopping")}
              className={`button bg-white h-24 text-gray-800 ${
                state.activity.includes("shopping")
                  ? "border-gray-800"
                  : "border-gray-300 border"
              }`}>
              Shopping
            </button>
          </div>
          <input
            className='hidden'
            value={state.activity}
            readOnly
            type='text'
            name='activity'
            id='activity'
          />
          {errors.activity && (
            <div className='error text-white absolute right-10 bg-red-600 bg-opacity-80 backdrop-blur-2xl px-4 rounded-md overflow-hidden'>
              {errors.activity}
            </div>
          )}
        </div>

        {/*Form Actions*/}
        <div className='flex justify-end fixed bottom-0 py-8 px-8 w-full bg-white border-t border-gray-300'>
          <div className='flex flex-row space-x-4 max-w-2xl'>
            <button
              className='border-gray-300 border text-gray-400 font-semibold text-lg py-2 rounded-lg px-4 shadow-md'
              type='button'
              onClick={handleReset}
              value='Reset'>
              Reset Prompt
            </button>
            <button
              className='bg-teal-500 text-lg border border-teal-600 font-semibold shadow-md py-2 px-4 rounded-lg text-white'
              type='submit'
              value='Submit'>
              Get Itinerary
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ItineraryPlanner;
