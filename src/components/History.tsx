import React, { useEffect, useState } from "react";
import { ItineraryWithId } from "../types/ResponseTypes";
import { UserAuth } from "../context/AuthContext";
import {
  retrieveItineraries,
  deleteItinerary,
} from "../utils/firestoreFunctions";
import { useNavigate } from "react-router-dom";
import { useItinerary } from "../context/ItineraryContext";

const History: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [itineraries, setItineraries] = useState<ItineraryWithId[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { user } = UserAuth();
  const { setResponse, setIsSaved } = useItinerary();

  const itemsPerPage = 8;
  const navigate = useNavigate();

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItineraries = itineraries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(itineraries.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 border rounded ${
            currentPage === i ? "bg-blue-500 text-white" : ""
          }`}>
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleDelete = async (itineraryId: string) => {
    if (!user) {
      console.error("User is not authenticated");
      setError("User is not authenticated");
      return;
    }

    try {
      await deleteItinerary(user.uid, itineraryId);
      console.log(`Removing item: ${itineraryId}`);
      setItineraries((prevItineraries) =>
        prevItineraries.filter((itinerary) => itinerary.id !== itineraryId)
      );
    } catch (error) {
      console.error("Failed to delete itinerary:", error);
      setError("Failed to delete itinerary");
    }
  };

  const handleRecall = async (itinerary: ItineraryWithId) => {
    if (!user) {
      console.error("User is not authenticated");
      setError("User is not authenticated");
      return;
    }

    try {
      setIsSaved(true);
      setResponse(itinerary); // Update the response based on the itinerary ID
      navigate("/planner"); // Navigate to the planner page
    } catch (error) {
      console.error("Error in recalling itinerary:", error);
      setError("Error in recalling itinerary");
    }
  };

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
          {currentItineraries.map((itinerary, id) => (
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
                <button
                  onClick={() => handleDelete(itinerary.id)}
                  className='button  border-red-500 text-red-500 rounded-xl'>
                  Remove Itinerary
                </button>
                <button
                  onClick={() => handleRecall(itinerary)}
                  className='button bg-blue-500 text-white rounded-xl'>
                  View Itinerary
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className='flex justify-center space-x-2 mt-4'>
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default History;
