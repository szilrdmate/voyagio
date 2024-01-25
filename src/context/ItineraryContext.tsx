// src/contexts/ItineraryContext.tsx
import React, { createContext, useState, useContext } from "react";
import { ItineraryResponseType } from "../types/ResponseTypes";
import { ItineraryContextType, ItineraryProviderProps } from "../types/ItineraryContextTypes";

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
	const [isSaved, setIsSaved] = useState<boolean>(false);

	// Example function that updates the context state
	const updateResponse = (newResponse: ItineraryResponseType | null) => {
		setResponse(newResponse);
	};

	return <ItineraryContext.Provider value={{ response, setResponse: updateResponse, isSaved, setIsSaved }}>{children}</ItineraryContext.Provider>;
};

export { useItinerary, ItineraryProvider };
