export interface FormState {
    destination: string;
    date: string;
    length: string;
    group: string;
    budget: string;
    activity: string;
  }

export type ItineraryAction =
  | { type: "SET_FIELD"; field: string; value: string }
  | { type: "TOGGLE_ARRAY_FIELD_ITEM"; field: string; value: string }
  | { type: "RESET_FORM" }
  | { type: "SET_ITINERARY"; itinerary: string | null };
 