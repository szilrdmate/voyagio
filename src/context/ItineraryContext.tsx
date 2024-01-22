// src/contexts/ItineraryContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";
import { ItineraryResponseType } from "../types/ResponseTypes";
import { UserAuth } from "./AuthContext";
import {
  storeItinerary,
  retrieveItineraries,
} from "../utils/firestoreFunctions";

interface ItineraryContextType {
  response: ItineraryResponseType | null;
  setResponse: (response: ItineraryResponseType | null) => void;
}

interface ItineraryProviderProps {
  children: ReactNode;
}

const ItineraryContext = createContext<ItineraryContextType | null>(null);

const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error("useItinerary must be used within a ItineraryProvider");
  }
  return context;
};

const ItineraryProvider: React.FC<ItineraryProviderProps> = ({ children }) => {
  const [response, setResponse] = useState<ItineraryResponseType | null>(null);

  // Example function that updates the context state
  const updateResponse = (newResponse: ItineraryResponseType | null) => {
    setResponse(newResponse);
  };

  return (
    <ItineraryContext.Provider
      value={{ response, setResponse: updateResponse }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export { useItinerary, ItineraryProvider };
