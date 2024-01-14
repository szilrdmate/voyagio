import React, { useState } from "react";
import Overview from "./Overview";
import General from "./General";
import response from "../data/exampleResponse.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import DayFragment from "./DayFragment";
import { Link } from "react-router-dom";
import CostBreakdown from "./CostBreakdown";

const ItineraryDisplay: React.FC = () => {
  const [isOverview, setIsOverview] = useState<boolean>(true);

  const isMultipledays = () => {
    return response.destination.numberOfDays <= 1 ? "day" : "days";
  };

  const imageUrl = response.destination.fetchImageOfDestinationLocation;

  return (
    <div className='w-[60vw] bg-white h-screen overflow-scroll'>
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${imageUrl})`,
        }}
        className='h-72 flex justify-between py-4 px-4 flex-col bg-cover'>
        <Link to='/' className='font-semibold text-lg underline tracking-wide'>
          <FontAwesomeIcon className='text-base mr-2' icon={faChevronLeft} />
          Back to Home
        </Link>
        <div>
          <h1 className='font-bold text-3xl tracking-wide leading-loose'>
            {response.destination.numberOfDays} {isMultipledays()} trip to{" "}
            {response.destination.destinationCity},{" "}
            {response.destination.destinationCountry}
          </h1>
          <div className='flex items-center'>
            <FontAwesomeIcon className='mr-4' icon={faCalendarDays} />
            <h2 className='font-semibold text-lg'>
              {response.destination.startDate} - {response.destination.endDate}
            </h2>
          </div>
        </div>
      </div>
      <div id='info' className='border-y border-gray-300'>
        {isOverview && (
          <Overview info={response.destination} setState={setIsOverview} />
        )}
        {!isOverview && (
          <General stats={response.destination} setState={setIsOverview} />
        )}
      </div>
      <div className='pt-8 px-8'>
        <h2 className='text-gray-800 font-black text-3xl'>Itinerary</h2>
        {response &&
          response.itinerary.map((day) => (
            <DayFragment key={day.day} itinerary={day} />
          ))}
      </div>
      <div id='cost' className='p-8'>
        <CostBreakdown estimatedCosts={response.estimatedCosts} />
      </div>
    </div>
  );
};

export default ItineraryDisplay;
