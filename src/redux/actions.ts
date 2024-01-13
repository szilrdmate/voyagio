import { FETCH_ITINERARY_REQUEST, FETCH_ITINERARY_SUCCESS, FETCH_ITINERARY_FAILURE, RESET_ITINERARY_FORM, SET_ITINERARY_FIELD } from './types';

// Define action interfaces for itinerary
interface FetchItineraryRequestAction {
  type: typeof FETCH_ITINERARY_REQUEST;
}

interface FetchItinerarySuccessAction {
  type: typeof FETCH_ITINERARY_SUCCESS;
  payload: any; // Replace 'any' with the specific type of your itinerary data
}

interface FetchItineraryFailureAction {
  type: typeof FETCH_ITINERARY_FAILURE;
  payload: string;
}

// Combine action types
export type ItineraryActionTypes =
  FetchItineraryRequestAction |
  FetchItinerarySuccessAction |
  FetchItineraryFailureAction;

// Action creators for itinerary
export const fetchItineraryRequest = (): ItineraryActionTypes => ({
  type: FETCH_ITINERARY_REQUEST,
});

export const fetchItinerarySuccess = (data: any): ItineraryActionTypes => ({
  type: FETCH_ITINERARY_SUCCESS,
  payload: data,
});

export const fetchItineraryFailure = (error: string): ItineraryActionTypes => ({
  type: FETCH_ITINERARY_FAILURE,
  payload: error,
});

export const setItineraryField = (field: string, value: string): ItineraryActionTypes => ({
  type: SET_ITINERARY_FIELD,
  field,
  value,
});

export const resetItineraryForm = (): ItineraryActionTypes => ({
  type: RESET_ITINERARY_FORM,
});
