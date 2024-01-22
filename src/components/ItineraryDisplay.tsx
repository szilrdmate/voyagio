// components/ItineraryDisplay.tsx
import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import General from "./General";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronLeft,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import DayFragment from "./DayFragment";
import { Link } from "react-router-dom";
import CostBreakdown from "./CostBreakdown";
import { ItineraryResponseType } from "../types/ResponseTypes";
import { useItinerary } from "../context/ItineraryContext";
import { storeItinerary } from "../utils/firestoreFunctions";
import { UserAuth } from "../context/AuthContext";

interface ItineraryDisplayProps {
  response: ItineraryResponseType;
}

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ response }) => {
  const [isOverview, setIsOverview] = useState<boolean>(true);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const { setResponse } = useItinerary();
  const { user } = UserAuth();

  const isMultipledays = () => {
    return response.destination.numberOfDays > 1 ? "days" : "day";
  };

  const bgImage =
    "https://www.budapestinfo.hu/storage/media-library/1527/fOB6ecwUglninbOa83rPsfuwRp9yuECvNW64eWOS.jpg";

  const handleNewTrip = () => {
    if (response) {
      setResponse(null);
      setIsSaved(false);
    }
  };

  // TODO: move this function to the it context

  const saveItinerary = async (response: ItineraryResponseType) => {
    console.log("saveItinerary called");
    if (user && response && !isSaved) {
      // Check if saving is not in progress
      try {
        await storeItinerary(user.uid, response);
        setIsSaved(true); // Set saving to true before starting the save operation
      } catch (error) {
        console.error("Error storing itinerary: ", error);
        setIsSaved(false); // Reset saving state in case of an error
      }
    }
  };

  // Event handler function to be called on button click
  const handleSaveClick = () => {
    saveItinerary(response);
  };

  useEffect(() => {
    if (response && user) {
      handleSaveClick();
    }
  }, [response, user]);

  return (
    <>
      <div className='z-20 fixed top-0 left-0 w-[60vw] bg-white h-screen overflow-scroll no-scrollbar border-r border-gray-300'>
        <div
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${bgImage})`,
          }}
          className='h-72 flex justify-between py-4 px-4 flex-col bg-cover'>
          <Link
            to='/'
            className='text-white font-semibold text-lg underline tracking-wide'>
            <FontAwesomeIcon className='text-base mr-2' icon={faChevronLeft} />
            Back to Home
          </Link>
          <div className='absolute top-5 right-5 space-x-2'>
            <button className='text-white button' onClick={handleNewTrip}>
              New Trip
            </button>
            <button className='text-white button '>
              <FontAwesomeIcon icon={faDownload} />
            </button>
          </div>
          <div>
            <h1 className='font-bold text-3xl text-white tracking-wide leading-loose'>
              {response.destination.numberOfDays} {isMultipledays()} trip to{" "}
              {response.destination.destinationCity},{" "}
              {response.destination.destinationCountry}
            </h1>
            <div className='flex items-center'>
              <FontAwesomeIcon
                className='text-white mr-4'
                icon={faCalendarDays}
              />
              <h2 className='text-white font-semibold text-lg'>
                {response.destination.startDate} -{" "}
                {response.destination.endDate}
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
            response.itinerary.map((days) => (
              <DayFragment key={days.day} itinerary={days} />
            ))}
        </div>
        <div id='cost' className='p-8'>
          <CostBreakdown estimatedCosts={response.estimatedCosts} />
        </div>
      </div>
    </>
  );
};

export default ItineraryDisplay;
