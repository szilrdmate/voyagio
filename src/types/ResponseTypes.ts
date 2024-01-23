// src/types/ResponseTypes.ts
export interface ItineraryResponseType {
    destination: {
      numberOfDays: number;
      destinationCity: string;
      destinationCountry: string;
      currency: string;
      oneDollarInLocalCurrency: number;
      languagesSpoken: string[];
      timeThereInUtcFormat: string;
      capitalOfTheCountry: string;
      localWeather: string;
      temperatureRangeThroughTheYear: string;
      shortDescription: string;
      shortHistory: string;
      startDate: string;
      endDate: string;
    };
    itinerary: DayProgram[];
    estimatedCosts: CostEstimate[];
  }
  
  export interface DayProgram {
    day: number;
    date: string;
    program: ProgramDetail[];
  }
  
  export interface ProgramDetail {
    id: number;
    programOrPlaceName: string;
    timeSpentThere: string;
    location: string;
    coordinateOfEvent: [number, number],
    shortDescriptionOfProgram: string;
  }
  
  export interface CostEstimate {
    category: string;
    hostelCostPerNight?: number;
    hotelCostPerNight?: number;
    luxuryHotelCostPerNight?: number;
    airbnbCostPerNight?: number;
    busCost?: number;
    taxiCost?: number;
    trainCost?: number;
    rentalCost?: number;
    streetFoodCost?: number;
    budgetRestaurantCost?: number;
    fancyRestaurantCost?: number;
    traditionalFoodCost?: number;
    mainActivityForEachDay?: MainActivity[];
  }
  
  interface MainActivity {
    mainActivityName: string;
    costOfProgram: number;
  }
  
export interface ItineraryWithId extends ItineraryResponseType {
  id: string;
}