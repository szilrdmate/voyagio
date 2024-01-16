import { useState, useCallback } from "react";
import { FormState } from "../types/ItineraryTypes.ts";

export const useItineraryFormValidation = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    destination: "",
    date: "",
    length: "",
    group: "",
    budget: "",
    activity: "",
  });

  const validate = useCallback((state: FormState) => {
    let isValid = true;

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };

      if (!state.destination) {
        newErrors.destination = "Destination is required";
        isValid = false;
      }
      if (!state.date) {
        newErrors.date = "Select a date range";
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
      if (!state.activity) {
        newErrors.activity = "Select at least one type of activity";
        isValid = false;
      }

      return newErrors;
    });

    return isValid;
  }, []); // Removed 'errors' from dependencies

  return { errors, validate, setErrors };
};

