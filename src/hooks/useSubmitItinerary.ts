// hooks/useSubmitItinerary.ts
import { generateItinerary } from "../services/gptService";
import { FormState } from "../types/ItineraryTypes";
import { useItinerary } from "../contexts/ItineraryContext";

export const useSubmitItinerary = (state: FormState, validate: (state: FormState) => boolean) => {
  const { setResponse } = useItinerary();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate(state);

    if (isValid) {
      try {
        const response = await generateItinerary({
        destination: state.destination,
        length: state.length,
        budget: state.budget,
        program: state.program,
        });
      if (response) {
        setResponse(response); // Update the context
      } else {
        // Handle the case where response is null or not as expected
        console.error('No response or unexpected response structure from generateItinerary');
      }
    } catch (error) {
      console.error('Error during itinerary generation:', error);
      // Optionally, handle the error in UI, e.g., show an error message
    }
  }
  };

  return handleSubmit;
};
