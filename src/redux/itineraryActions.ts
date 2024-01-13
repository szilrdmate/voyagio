import { Dispatch } from 'redux';
import { fetchItineraryRequest, fetchItinerarySuccess, fetchItineraryFailure } from './actions';
import { generateItinerary } from '../services/gptService'; // Adjust the import path as needed

export const fetchItinerary = (data: { destination: string; length: string; budget: string; program: string }) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchItineraryRequest());

    try {
      const response = await generateItinerary(data);
      if (response) {
        dispatch(fetchItinerarySuccess(response));
      } else {
        throw new Error('No response from generateItinerary');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch(fetchItineraryFailure(error.message));
      } else {
        dispatch(fetchItineraryFailure('An unknown error occurred'));
      }
    }
  };
};
