import ItineraryPlanner from "../components/Itinerary";
import ItineraryDisplay from "../components/ItineraryDisplay";

const Planner = () => {
  return (
    <div>
      <div className=' hidden max-w-5xl mx-auto pt-40 pb-20 px-6'>
        <ItineraryPlanner />
      </div>
      <ItineraryDisplay />
    </div>
  );
};

export default Planner;
