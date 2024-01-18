// hooks/useSubmitItinerary.ts
import { generateItinerary } from "../services/gptService";
import { FormState } from "../types/ItineraryTypes";
import { useItinerary } from "../context/ItineraryContext";
//import { useState } from 'react';

export const useSubmitItinerary = (state: FormState, validate: (state: FormState) => boolean) => {
  const { setResponse } = useItinerary();
  //const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validate(state);

    if (isValid) {
      try {
        // setLoading(true);
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
      } else {
        // Handle the case where response is null or not as expected
        console.error('No response or unexpected response structure from generateItinerary');
      }
    } catch (error) {
      console.error('Error during itinerary generation:', error);
    } finally {
      //setLoading(false)
    }
  }
  };
  return handleSubmit
};
