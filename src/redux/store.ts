import { configureStore } from '@reduxjs/toolkit';
import itineraryReducer from './itinerarySlice';

export const store = configureStore({
  reducer: {
    itinerary: itineraryReducer,
  },
});
