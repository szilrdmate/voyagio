// src/types/CitySuggestion.ts
export interface CitySuggestion {
    name: string;
    coordinates: [number, number];
  }
  
export interface MapboxFeature {
  text: string; // Place name
  center: [number, number]; // Coordinates as a tuple of [longitude, latitude]
}
