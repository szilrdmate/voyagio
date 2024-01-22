import React, { useEffect, useState } from "react";
import { ItineraryResponseType } from "../types/ResponseTypes";
import { UserAuth } from "../context/AuthContext";
import { retrieveItineraries } from "../utils/firestoreFunctions";

const History: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [itineraries, setItineraries] = useState<ItineraryResponseType[]>([]);
  const { user } = UserAuth();

  useEffect(() => {
    const loadItineraries = async () => {
      if (user) {
        return await retrieveItineraries(user.uid);
      }
      return [];
    };

    const fetchItineraries = async () => {
      try {
        setLoading(true);
        const loadedItineraries = await loadItineraries();
        setItineraries(loadedItineraries);
        setLoading(false);
      } catch (err) {
        setError("Failed to load itineraries");
        setLoading(false);
      }
    };

    fetchItineraries();
  }, [user]);

  const dayOrDays = (numberOfDays: number) => {
    return numberOfDays > 1 ? "Days in " : "Day in ";
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className='font-bold text-5xl mb-8 text-gray-800'>
        Previous Itineraries
      </h2>
      {loading ? (
        <div className='h-full w-full grid place-content-start'>
          Loading itineraries...
        </div>
      ) : itineraries.length === 0 ? (
        <p>No itineraries found</p>
      ) : (
        <ul className='space-y-4'>
          {itineraries.map((itinerary, id) => (
            <li
              className='bg-white rounded-2xl py-4 px-8 border border-gray-300 border-opacity-20 shadow-xl flex justify-between items-center'
              key={id}>
              <div>
                <p className='text-xl font-semibold'>
                  {itinerary.destination.numberOfDays}{" "}
                  {dayOrDays(itinerary.destination.numberOfDays)}
                  {itinerary.destination.destinationCity},{" "}
                  {itinerary.destination.destinationCountry}
                </p>
                <p>
                  {itinerary.destination.startDate} -{" "}
                  {itinerary.destination.endDate}
                </p>
              </div>
              <div className='space-x-2'>
                <button className='button  border-red-500 text-red-500 rounded-xl'>
                  Remove Itinerary
                </button>
                <button className='button bg-blue-500 text-white rounded-xl'>
                  View Itinerary
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
