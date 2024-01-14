// pages/Planner.tsx
import ItineraryPlanner from "../components/Itinerary";
import ItineraryDisplay from "../components/ItineraryDisplay";
import Map from "../components/Map";
import { useItinerary } from "../contexts/ItineraryContext";

const Planner: React.FC = () => {
  const { response } = useItinerary();

  console.log("Response:", response);
  console.log(typeof response);

  return (
    <>
      <div className='max-w-5xl mx-auto pt-40 pb-20 px-6'>
        <ItineraryPlanner />
      </div>

      {response && (
        <>
          <ItineraryDisplay response={response} />
          <Map />
        </>
      )}
    </>
  );
};

export default Planner;
