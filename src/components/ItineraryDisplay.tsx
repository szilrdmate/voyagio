import React, { useState } from "react";
import Overview from "./Overview";
import General from "./General";

const ItineraryDisplay: React.FC = () => {
  const [isOverview, setIsOverview] = useState<boolean>(true);

  const isMultipledays = () => {
    return length <= 1 ? "day" : "days";
  };

  return (
    <div className='w-[60vw] bg-white min-h-screen overflow-x-hidden overflow-y-scroll'>
      <div className='h-72 bg-blue-300'>
        <h1>
          {/*data.length*/} {isMultipledays()} trip to {/*data.destination*/}
        </h1>
      </div>
      {isOverview && <Overview setState={setIsOverview} />}
      {!isOverview && <General setState={setIsOverview} />}
    </div>
  );
};

export default ItineraryDisplay;
