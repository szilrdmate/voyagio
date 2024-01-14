// src/redux/itinerarySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ItineraryState {
  itineraryData: any; // Replace 'any' with your data type
}

// Define the initial state using that type
const initialState: ItineraryState = {
  itineraryData: null,
};

export const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    setItineraryData: (state, action: PayloadAction<any>) => {
      state.itineraryData = action.payload;
    },
  },
});

export const { setItineraryData } = itinerarySlice.actions;

export default itinerarySlice.reducer;