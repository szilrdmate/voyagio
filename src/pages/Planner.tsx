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
    <div className='min-h-screen'>
      {!response && (
        <div className='max-w-4xl mx-auto pt-40 pb-40 px-6'>
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
