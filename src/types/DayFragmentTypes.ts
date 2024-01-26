type Program = {
    id: number;
    programOrPlaceName: string;
    timeSpentThere: string;
    location: string;
    shortDescriptionOfProgram: string;
  };
  
  type DayItinerary = {
    day: number;
    date: string;
    program: Program[];
  };
  
  export type ItineraryProps = {
    itinerary: DayItinerary;
  };