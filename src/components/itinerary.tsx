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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='destination'>
            Destination:
            <input
              id='destination'
              type='text'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='length'>
            Length:
            <input
              id='length'
              type='text'
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='budget'>
            Budget:
            <input
              id='budget'
              type='text'
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor='intensity'>
            Intensity:
            <input
              id='intensity'
              type='text'
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>Generate Itinerary</button>
      </form>
      {itinerary && <div>{/* Render itinerary table and packing list */}</div>}
    </div>
  );
};

export default ItineraryPlanner;
