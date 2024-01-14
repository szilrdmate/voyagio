export interface FormState {
    destination: string;
    length: string;
    budget: string;
    program: string;
  }

export type ItineraryAction =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "RESET_FORM" }
  | { type: "SET_ITINERARY"; itinerary: string | null };
 