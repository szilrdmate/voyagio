// src/hooks/useItineraryFormValidation.ts
import { useState, useCallback } from "react";
import { FormState } from "../types/ItineraryTypes.ts";
import { CitySuggestion } from '../types/CitySuggestion';

export const useItineraryFormValidation = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    destination: "",
    date: "",
    length: "",
    group: "",
    budget: "",
    activity: "",
  });

  const validate = useCallback((state: FormState, citySuggestions: CitySuggestion[]) => {
    let isValid = true;

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };

      if (!state.destination) {
        newErrors.destination = "Destination is required";
        isValid = false;
      }
      if (!state.date) {
        newErrors.date = "Select a depart date";
        isValid = false;
      }
      if (!state.length) {
        newErrors.length = "Length is required";
        isValid = false;
      }
      if (!state.group) {
        newErrors.group = "Select a group size";
        isValid = false;
      }
      if (!state.budget) {
        newErrors.budget = "Budget is required";
        isValid = false;
      }
      if (state.activity.length === 0) {
        newErrors.activity = "Select at least one type of activity";
        isValid = false;
      }
      const cityNames = citySuggestions.map(city => city.name);
        if (!cityNames.includes(state.destination)) {
          newErrors.destination = "Please select a valid city";
          isValid = false;
      }

      return newErrors;
    });

    return isValid;
  }, []); // Removed 'errors' from dependencies

  return { errors, validate, setErrors };
};

