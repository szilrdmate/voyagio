// src/hooks/useSubmitItinerary.ts
import { generateItinerary } from "../services/gptService";
import { FormState } from "../types/ItineraryTypes";
import { useItinerary } from "../context/ItineraryContext";
import { useLoading } from '../context/LoadingContext';

export const useSubmitItinerary = (state: FormState, validate: (state: FormState) => boolean) => {
  const { setResponse } = useItinerary();
  const { setLoading } = useLoading();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate(state);

    if (isValid) {
      try {
        setLoading(true);
        const response = await generateItinerary({
        destination: state.destination,
        date: state.date,
        length: state.length,
        group: state.group,
        budget: state.budget,
        activity: state.activity.join(', '),
        });
      if (response) {
        setResponse(response); // Update the context
      }
    } catch (error) {
      console.error('Error during itinerary generation:', error);
    } finally {
      setLoading(false)
    }
  }
  };
  return handleSubmit
};
