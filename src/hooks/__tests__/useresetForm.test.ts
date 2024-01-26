import { renderHook, act } from "@testing-library/react";
import { useResetForm } from "../useResetForm";

// Mock the dispatch and setErrors functions
const mockDispatch = jest.fn();
const mockSetErrors = jest.fn();

describe("useResetForm hook", () => {
  it("should reset the form state and errors", () => {
    const { result } = renderHook(() => useResetForm(mockDispatch, mockSetErrors));

    act(() => {
      result.current();
    });

    // Check if dispatch is called with the correct action
    expect(mockDispatch).toHaveBeenCalledWith({ type: "RESET_FORM" });

    // Check if setErrors is called with an object resetting the form fields
    expect(mockSetErrors).toHaveBeenCalledWith({
      destination: "",
      date: "",
      length: "",
      group: "",
      budget: "",
      activity: "",
    });
  });
});
