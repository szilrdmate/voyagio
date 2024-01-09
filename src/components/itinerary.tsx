import React, { useState } from "react";
import { generateItinerary } from "../services/gptService";

const ItineraryPlanner: React.FC = () => {
  const [destination, setDestination] = useState("");
  const [length, setLength] = useState("");
  const [budget, setBudget] = useState("");
  const [intensity, setIntensity] = useState("");
  const [itinerary, setItinerary] = useState(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await generateItinerary({
      destination,
      length,
      budget,
      intensity,
    });
    setItinerary(response);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 bg-white p-8 rounded-2xl shadow-2xl grid place-items-center bg-opacity-20 backdrop-blur-xl border-[1px] border-white border-opacity-20 px-8'>
        <h2 className='text-3xl font-bold'>Plan Your Trip</h2>
        <div className='flex flex-col w-full'>
          <label htmlFor='destination' className='font-bold'>
            Destination:
          </label>
          <input
            id='destination'
            type='text'
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder=''
            className='rounded-xl px-4 py-2 h-12 w-full bg-transparent border-[1px] backdrop-blur-lg border-opacity-10 focus-within:outline-none border-gray-100 mt-2'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='length' className='font-bold'>
            Length:
          </label>
          <input
            id='length'
            type='range'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='rounded-full py-2 h-10 w-full bg-transparent'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='budget' className='font-bold'>
            Budget:
          </label>
          <input
            id='budget'
            type='range'
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder=''
            className='rounded-full py-2 h-10 w-full bg-transparent border-2 border-opacity-20 border-gray-100'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor='intensity' className='font-bold'>
            Intensity:
          </label>
          <input
            id='intensity'
            type='range'
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
            placeholder=''
            className='rounded-full py-2 h-10 w-full bg-transparent border-2 border-opacity-20 border-gray-100'
          />
        </div>
        <div className='flex flex-row w-full space-x-4'>
          <button
            className='w-full bg-gray-400 h-12 rounded-xl font-bold text-xl border-[1px] border-opacity-20 border-gray-100 shadow-md'
            type='reset'>
            Reset Prompt
          </button>
          <button
            className='w-full bg-blue-500 h-12 rounded-xl font-bold text-xl border-[1px] border-opacity-20 border-gray-100 shadow-md'
            type='submit'>
            Get Itinerary
          </button>
        </div>
      </form>
      {itinerary && <div>{/* Render itinerary table and packing list */}</div>}
    </>
  );
};

export default ItineraryPlanner;
