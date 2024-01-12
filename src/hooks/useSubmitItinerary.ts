// hooks/useSubmitItinerary.ts
import { Dispatch } from "react";
import { generateItinerary } from "../services/gptService";
import { ItineraryAction, ItineraryState } from "../types/ItineraryTypes";

export const useSubmitItinerary = (
  state: ItineraryState,
  validate: (state: ItineraryState) => boolean,
  dispatch: Dispatch<ItineraryAction>
) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate(state);

    if (isValid) {
      const response = await generateItinerary({
        destination: state.destination,
        length: state.length,
        budget: state.budget,
        program: state.program,
      });
      console.log('GPT API Response:', response);
      dispatch({ type: "SET_ITINERARY", itinerary: response });
    }
  };

  return handleSubmit;
};
