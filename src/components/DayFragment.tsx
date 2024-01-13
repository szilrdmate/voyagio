import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClock } from "@fortawesome/free-solid-svg-icons";

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

type ItineraryProps = {
  itinerary: DayItinerary;
};

const DayFragment: React.FC<ItineraryProps> = ({ itinerary }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className='card w-full border-b border-gray-300 py-6'>
      <div className='flex space-x-4 my-4'>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <FontAwesomeIcon
            className='text-gray-800 text-2xl'
            icon={faChevronDown}
            rotation={isCollapsed ? undefined : 270}
          />
        </button>
        <h3 className='text-gray-800 text-2xl font-bold'>
          Day {itinerary.day}
        </h3>
      </div>
      <h3 className='text-gray-600 font-medium'>{itinerary.date}</h3>
      {isCollapsed && (
        <div className='py-4'>
          <ul className='space-y-4'>
            {itinerary.program.map((activity) => (
              <li
                key={activity.id}
                className='rounded-lg border-[1px] border-gray-300 bg-white p-4 shadow-md'>
                <p className='absolute w-6 text-center font-semibold h-6 top-2 right-2 text-white rounded-full bg-gray-800'>
                  {activity.id}
                </p>
                <h3 className='text-xl text-gray-800 font-bold mb-3 underline'>
                  {activity.programOrPlaceName}
                </h3>
                <p className='text-gray-500 mb-8 text-[0.9rem] font-medium max-w-xl text-justify leading-relaxed'>
                  {activity.shortDescriptionOfProgram}
                </p>
                <p className='text-gray-800 text-sm font-bold tracking-wide'>
                  <FontAwesomeIcon className='mr-2' icon={faClock} />{" "}
                  {activity.timeSpentThere} • {activity.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DayFragment;
