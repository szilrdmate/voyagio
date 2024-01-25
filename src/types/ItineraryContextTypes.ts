import { ItineraryResponseType } from "./ResponseTypes";
import { ReactNode } from "react";

export interface ItineraryContextType {
    response: ItineraryResponseType | null;
    isSaved: boolean;
    setIsSaved: (value: boolean) => void;
    setResponse: (response: ItineraryResponseType | null) => void;
}
  
export interface ItineraryProviderProps {
    children: ReactNode;
}