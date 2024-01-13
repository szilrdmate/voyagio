import { FETCH_ITINERARY_REQUEST, FETCH_ITINERARY_SUCCESS, FETCH_ITINERARY_FAILURE, RESET_ITINERARY_FORM, SET_ITINERARY_FIELD } from './types';

interface ItineraryState {
  loading: boolean;
  data: any; // Use the specific type for your itinerary data
  error: string;
}

const initialState: ItineraryState = {
    destination: "",
    length: "",
    budget: "",
    program: "",
    itinerary: null, // or an appropriate initial value
  };
const itineraryReducer = (
  state = initialState,
  action: ItineraryActionTypes
): ItineraryState => {
  switch (action.type) {
    case FETCH_ITINERARY_REQUEST:
      return { ...state, loading: true };
    case FETCH_ITINERARY_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ITINERARY_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SET_ITINERARY_FIELD:
        return { ...state, [action.field]: action.value };
    case RESET_ITINERARY_FORM:
        return initialState;
    case 'SET_ITINERARY_FIELD':
        return {
              ...state,
              [action.field]: action.value,
            };
    default:
      return state;
  }
};

export default itineraryReducer;
