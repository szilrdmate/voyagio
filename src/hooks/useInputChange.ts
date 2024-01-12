// hooks/useInputChange.ts
import { Dispatch, SetStateAction } from "react";
import { ItineraryAction } from "../types/ItineraryTypes";

export const useInputChange = (
  dispatch: Dispatch<ItineraryAction>,
  setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>
) => {
  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const handleSelectChange = (field: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  return { handleInputChange, handleSelectChange };
};
