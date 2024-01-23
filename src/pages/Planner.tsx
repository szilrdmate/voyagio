// src/pages/Planner.tsx
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
        <div className="mx-auto max-w-4xl bg-gray-800 py-20 md:bg-white md:px-6 md:py-40">
          <ItineraryPlanner />
        </div>
      )}
      {isLoading ? <Loading /> : ""}
      {response && (
        <>
          <ItineraryDisplay response={response} />
          <div className="fixed right-0 top-0 z-20 w-[40vw] bg-white">
            <Map location={response.destination.destinationCity} />
          </div>
        </>
      )}
    </div>
  );
};

export default Planner;
