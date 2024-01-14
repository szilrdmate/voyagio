import { useState, useCallback } from "react";
import { FormState } from "../types/ItineraryTypes.ts";

export const useItineraryFormValidation = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    destination: "",
    length: "",
    budget: "",
    program: "",
  });

  const validate = useCallback((state: FormState) => {
    let isValid = true;

    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };

      if (!state.destination) {
        newErrors.destination = "Destination is required";
        isValid = false;
      }
      if (!state.length) {
        newErrors.length = "Length is required";
        isValid = false;
      }
      if (!state.budget) {
        newErrors.budget = "Budget is required";
        isValid = false;
      }
      if (!state.program) {
        newErrors.program = "Program is required";
        isValid = false;
      }

      return newErrors;
    });

    return isValid;
  }, []); // Removed 'errors' from dependencies

  return { errors, validate, setErrors };
};

