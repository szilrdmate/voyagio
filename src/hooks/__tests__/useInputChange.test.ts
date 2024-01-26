import React from "react";
import { renderHook, act } from "@testing-library/react";
import { useInputChange } from "../useInputChange";
import { FormState } from "../../types/ItineraryTypes";

// Mock the dispatch and setErrors functions
const mockDispatch = jest.fn();
const mockSetErrors = jest.fn();


describe("useInputChange hook", () => {
    it("should handle input change", () => {
        const { result } = renderHook(() => useInputChange(mockDispatch, mockSetErrors));
      
        const field: keyof FormState = "destination";
        const value = "New Value";
      
        act(() => {
          result.current.handleInputChange(field)({
            target: { value },
          } as React.ChangeEvent<HTMLInputElement>);
        });
      
        expect(mockDispatch).toHaveBeenCalledWith({
          type: "SET_FIELD",
          field,
          value,
        });
      
        expect(mockSetErrors).toHaveBeenCalledWith(expect.any(Function));
      });
      
      it("should handle button input change", () => {
        const { result } = renderHook(() => useInputChange(mockDispatch, mockSetErrors));
      
        const field: keyof FormState = "destination";
        const value = "Button Value";
      
        act(() => {
          result.current.handleButtonInputChange(field, value)();
        });
      
        expect(mockDispatch).toHaveBeenCalledWith({
          type: "SET_FIELD",
          field,
          value,
        });
    
        expect(mockSetErrors).toHaveBeenCalledWith(expect.any(Function));
      });
      
      it("should handle multiple choice change", () => {
        const { result } = renderHook(() => useInputChange(mockDispatch, mockSetErrors));
      
        const field: keyof FormState = "destination";
        const value = "Choice Value";
      
        act(() => {
          result.current.handleMultipleChoiceChange(field, value);
        });
      
        expect(mockDispatch).toHaveBeenCalledWith({
          type: "TOGGLE_ARRAY_FIELD_ITEM",
          field,
          value,
        });
      
        expect(mockSetErrors).toHaveBeenCalledWith(expect.any(Function));
      });
      
});
