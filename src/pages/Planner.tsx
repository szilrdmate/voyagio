// pages/Planner.tsx
import ItineraryPlanner from "../components/Itinerary";
import ItineraryDisplay from "../components/ItineraryDisplay";
import Map from "../components/Map";
import { useItinerary } from "../context/ItineraryContext";
import Loading from "../components/Loading";
import { useLoading } from "../context/LoadingContext";

const Planner: React.FC = () => {
  const { response } = useItinerary();
  const { isLoading } = useLoading();

  return (
    <div>
      {!response && (
        <div className='max-w-4xl mx-auto py-20 md:py-40 md:px-6 bg-gray-800 md:bg-white'>
          <ItineraryPlanner />
        </div>
      )}
      {isLoading ? <Loading /> : ""}
      {response && (
        <>
          <ItineraryDisplay response={response} />
          <div className='w-[40vw] bg-white fixed top-0 right-0 z-20'>
            <Map location={response.destination.destinationCity} />
          </div>
        </>
      )}
    </div>
  );
};

export default Planner;
