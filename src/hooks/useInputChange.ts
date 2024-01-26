import { Dispatch, SetStateAction } from "react";
import { FormState, ItineraryAction } from "../types/ItineraryTypes";

export const useInputChange = (
  dispatch: Dispatch<ItineraryAction>,
  setErrors: Dispatch<SetStateAction<{ [key: string]: string }>>
) => {
  const handleInputChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_FIELD", field, value: e.target.value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };
  const handleButtonInputChange = (field: keyof FormState, value: string) => () => {
    dispatch({ type: "SET_FIELD", field, value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };
  const handleMultipleChoiceChange = (field: keyof FormState, value: string) => {
    dispatch({ type: "TOGGLE_ARRAY_FIELD_ITEM", field, value });
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };
  

  return { handleInputChange, handleButtonInputChange, handleMultipleChoiceChange };
};
