// hooks/useResetForm.ts
import { Dispatch, SetStateAction } from "react";
import { ItineraryAction } from "../types/ItineraryTypes";

export const useResetForm = (
  dispatch: Dispatch<ItineraryAction>,
  setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>
) => {
  const handleReset = () => {
    dispatch({ type: "RESET_FORM" });
    setErrors({
      destination: "",
      length: "",
      budget: "",
      program: "",
    });
  };

  return handleReset;
};
