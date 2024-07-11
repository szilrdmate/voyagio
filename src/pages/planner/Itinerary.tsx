import { useReducer, useState } from "react";
import { useItineraryFormValidation } from "../../hooks/useItineraryFormValidation.ts";
import { useSubmitItinerary } from "../../hooks/useSubmitItinerary.ts";
import { useInputChange } from "../../hooks/useInputChange.ts";
import { useResetForm } from "../../hooks/useResetForm.ts";
import { ItineraryAction, FormState } from "../../types/ItineraryTypes.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faArrowTurnUp, faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { activities, budgetOptions, groupOptions } from "../../data/buttonData.ts";
import { useCityAutocomplete } from "../../hooks/useCityAutocomplete.ts";
import { ErrorObject } from "../../types/ErrorObject.ts";
import { CalendarDatePicker } from "../../components/ui/calendar-date-picker.tsx";

// TODO: Switch to react-hook-form and zod & shadcn form

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
			const arrayField = state[action.field] as string[];
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
	const [state, dispatch] = useReducer<React.Reducer<FormState, ItineraryAction>>(itineraryReducer, initialState);
	const { errors, validate, setErrors } = useItineraryFormValidation();
	const [cityQuery, setCityQuery] = useState("");
	const citySuggestions = useCityAutocomplete(cityQuery);
	const handleSubmit = useSubmitItinerary(state, validate, citySuggestions);
	const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
	const [blurTimeoutId, setBlurTimeoutId] = useState<number | null>(null);

	const { handleInputChange, handleButtonInputChange, handleMultipleChoiceChange } = useInputChange(dispatch, setErrors);

	const resetForm = useResetForm(dispatch, setErrors);

	const handleReset = () => {
		resetForm();
		setCityQuery("");
	};

	const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCityQuery(e.target.value);
		// Only update the destination if it's not a selection from suggestions
		if (!citySuggestions.find((city) => city.name === e.target.value)) {
			dispatch({ type: "SET_FIELD", field: "destination", value: e.target.value });
		}
	};

	const handleFocus = () => {
		// Clear timeout if input is focused again before the timeout completes
		if (blurTimeoutId) {
			clearTimeout(blurTimeoutId);
			setBlurTimeoutId(null);
		}
		setShowSuggestions(true);
	};

	const handleBlur = () => {
		// Set a timeout to hide the suggestion list
		const timeoutId = setTimeout(() => {
			setShowSuggestions(false);
		}, 100) as unknown as number; // Type assertion to number
		setBlurTimeoutId(timeoutId);
	};

	const handleSelectCity = (cityName: string) => {
		setCityQuery(cityName);
		dispatch({ type: "SET_FIELD", field: "destination", value: cityName });
		setShowSuggestions(false); // Hide suggestions when a city is selected
		if (blurTimeoutId) {
			clearTimeout(blurTimeoutId); // Clear the timeout if a city is selected
			setBlurTimeoutId(null);
		}
	};

	function getTodayDate() {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-based.
		const day = String(today.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	}

	function checkForErrors(errorObject: ErrorObject): boolean {
		// Iterate through the object's keys
		for (const key in errorObject) {
			// Check if the key has a truthy value
			if (errorObject[key]) {
				// If a truthy value is found, return true indicating an error exists
				return true;
			}
		}
		// If no truthy values are found, return false indicating no errors
		return false;
	}

	const hasErrors = checkForErrors(errors);

	return (
		<>
			<form onSubmit={handleSubmit} className="grid place-items-center space-y-4 border-gray-500 border-opacity-20 bg-white p-8 px-8 shadow-2xl sm:border md:rounded-2xl">
				<h2 className="text-3xl font-bold">Plan Your Next Trip</h2>

				{/*Destination*/}
				<div className="relative w-full py-8">
					<h4 className="mb-8 text-xl font-bold">
						Where would you like to go?
						{errors.destination && (
							<p className="error pl-2 text-lg font-normal text-red-600">
								<FontAwesomeIcon className="fa-rotate-90 mr-3" icon={faArrowTurnUp} />
								{errors.destination}
							</p>
						)}
					</h4>
					<input
						id="destination"
						type="text"
						autoComplete="off"
						name="destination"
						value={cityQuery}
						onFocus={handleFocus}
						onBlur={handleBlur}
						onChange={handleCityChange}
						placeholder="Enter a location"
						className={`${errors.destination ? "border-red-500" : "border-gray-300"} placeholder:font-base mt-2 h-12 w-full rounded-xl border bg-gray-50 px-4 py-2 backdrop-blur-lg placeholder:text-gray-400 focus-within:outline-none`}
					/>
					{showSuggestions && (
						<ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg">
							{citySuggestions.map((city, index) => (
								<li className="cursor-pointer px-6 py-2 hover:bg-gray-100" key={index} onClick={() => handleSelectCity(city.name)}>
									{city.name}
								</li>
							))}
						</ul>
					)}
				</div>

				{/*Date */}
				<div className="w-full border-t border-t-gray-300 py-8">
					<h4 className="mb-8 text-xl font-bold">
						When are you planning to go?
						{errors.date && (
							<p className="error pl-2 text-lg font-normal text-red-600">
								<FontAwesomeIcon className="fa-rotate-90 mr-3" icon={faArrowTurnUp} />
								{errors.date}
							</p>
						)}
					</h4>
					<input
						id="date"
						type="date"
						name="date"
						min={getTodayDate()}
						max="2099-12-31"
						value={state.date}
						onChange={handleInputChange("date")}
						placeholder="Enter a location"
						className={`${errors.destination ? "border-red-500" : "border-gray-300"} placeholder:font-base mt-2 h-12 w-full rounded-xl border bg-gray-50  px-4 py-2 backdrop-blur-lg  placeholder:text-gray-400 focus-within:outline-none`}
					/>
					{/*
					<CalendarDatePicker
                          date={field.value}
                          onDateSelect={({ from, to }) => {
                            form.setValue("datePicker", { from, to });
                          }}
                          variant="outline"
                          numberOfMonths={1}
                          className="min-w-[250px]"
                        />*/}
				</div>

				{/*Length*/}
				<div className="w-full border-t border-t-gray-300 py-8">
					<h4 className="mb-8 text-xl font-bold">
						How many days are you planning to stay? {state.length} {state.length ? (state.length == "1" ? "day" : "days") : ""}
						{errors.length && (
							<p className="error pl-2 text-lg font-normal text-red-600">
								<FontAwesomeIcon className="fa-rotate-90 mr-3" icon={faArrowTurnUp} />
								{errors.length}
							</p>
						)}
					</h4>
					<input id="length" type="range" min="1" max="14" name="length" value={state.length} onChange={handleInputChange("length")} className="h-10 w-full rounded-full bg-transparent py-2" />
				</div>

				{/*Group Size*/}
				<div className="w-full border-t border-t-gray-300 py-8">
					<h4 className="mb-8 text-xl font-bold">
						How many people are travelling?
						{errors.group && (
							<p className="error pl-2 text-lg font-normal text-red-600">
								<FontAwesomeIcon className="fa-rotate-90 mr-3" icon={faArrowTurnUp} />
								{errors.group}
							</p>
						)}
					</h4>
					<div className="grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-3">
						{groupOptions.map((group) => (
							<button key={group.value} type="button" onClick={handleButtonInputChange("group", group.value)} className={`button h-28 bg-white text-gray-800 duration-75 ${state.group === group.value ? "border-2 border-gray-800" : "border border-gray-300 hover:border-gray-500"}`}>
								<div className="space-y-2 text-left">
									<FontAwesomeIcon className="text-2xl" icon={group.icon} />
									<p className="text-lg text-gray-800">{group.label}</p>
								</div>
							</button>
						))}
					</div>
					<input className="hidden" type="text" name="group" id="group" />
				</div>

				{/*Budget Section*/}
				<div className="w-full border-t border-t-gray-300 py-8">
					<h4 className="mb-8 text-xl font-bold">
						What is your budget range?{" "}
						{errors.budget && (
							<p className="error pl-2 text-lg font-normal text-red-600">
								<FontAwesomeIcon className="fa-rotate-90 mr-3" icon={faArrowTurnUp} />
								{errors.budget}
							</p>
						)}
					</h4>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
						{budgetOptions.map((budget) => (
							<button key={budget.value} type="button" onClick={handleButtonInputChange("budget", budget.value)} className={`button h-32 bg-white duration-75 ${state.budget === budget.value ? "border-2 border-gray-800" : "border border-gray-300 hover:border-gray-500"}`}>
								<div className="space-y-2 text-left">
									<FontAwesomeIcon className="text-2xl" icon={budget.icon} />
									<p className="text-lg text-gray-800">{budget.label}</p>
									<p className="text-sm font-medium text-gray-500">{budget.range}</p>
								</div>
							</button>
						))}
					</div>
					<input id="budget" value={state.budget} readOnly className="hidden" type="text" name="budget" />
				</div>

				{/*Activities Section*/}
				<div className="w-full border-t border-t-gray-300 py-8">
					<h4 className="mb-8 text-xl font-bold">
						What activities are you interested in?
						{errors.activity && (
							<p className="error pl-2 text-lg font-normal text-red-600">
								<FontAwesomeIcon className="fa-rotate-90 mr-3" icon={faArrowTurnUp} />
								{errors.activity}
							</p>
						)}
					</h4>
					<div className="grid grid-cols-2 grid-rows-3 gap-4 sm:grid-cols-3">
						{activities.map((activity) => (
							<button key={activity.value} type="button" onClick={() => handleMultipleChoiceChange("activity", activity.value)} className={`button h-28 bg-white text-gray-800 duration-75 ${state.activity.includes(activity.value) ? "border-2 border-gray-800" : "border border-gray-300 hover:border-gray-500"}`}>
								<div className="space-y-2 text-left">
									<FontAwesomeIcon className="text-2xl" icon={activity.icon} />
									<p className="text-lg text-gray-800">{activity.name}</p>
								</div>
							</button>
						))}
					</div>
					<input className="hidden" value={state.activity} readOnly type="text" name="activity" id="activity" />
				</div>

				{/*Form Actions*/}

				<div className={`${hasErrors ? "-translate-y-28" : ""} error fixed bottom-0 left-0 w-full overflow-hidden bg-red-600 bg-opacity-80 px-16 py-4 text-white backdrop-blur-2xl transition-transform duration-300`}>
					<p className="text-lg font-semibold">
						<FontAwesomeIcon className="mr-2 text-xl" icon={faCircleExclamation} />
						Invalid Input: <span className="font-normal">One or more fields are missing an input</span>
					</p>
				</div>

				<div className="fixed bottom-0 left-0 flex w-full justify-center border-t border-gray-300 bg-white px-8 py-8 sm:justify-end">
					<div className="flex flex-row space-x-4 sm:max-w-2xl">
						<button className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-lg font-semibold text-gray-400 shadow-md" type="button" onClick={handleReset} value="Reset">
							<FontAwesomeIcon icon={faArrowRotateLeft} />
						</button>
						<button className="rounded-lg border border-blue-600 bg-blue-500 px-4 py-2 text-lg font-semibold text-white shadow-md" type="submit" value="Submit">
							Get itinerary
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ItineraryPlanner;
