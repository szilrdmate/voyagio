import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useItinerary } from "../context/ItineraryContext";
import { ProgramDetail } from "../types/ResponseTypes";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

interface MapProps {
  location: string;
  coordinates: [number, number];
}

const Map: React.FC<MapProps> = ({ location }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>();

  const { response } = useItinerary(); // response from api

  const fetchCoordinates = async (
    city: string,
  ): Promise<[number, number] | null> => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          city,
        )}.json?access_token=${mapboxgl.accessToken}`,
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        return data.features[0].geometry.coordinates;
      }
      console.log("No results found for the city");
      return null;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return null;
    }
  };

  const createCustomMarkerElement = (event: ProgramDetail) => {
    // Create a div to hold the marker
    const el = document.createElement("div");
    el.className =
      "custom-marker bg-gray-800 rounded-full p-2 shadow-md w-6 h-6 font-semibold text-white text-center text-md flex justify-center items-center"; // Add a class for styling

    // Add any HTML content inside the marker
    el.innerHTML = `<span>${event.id}</span>`;

    return el;
  };

  // Initialize map and update it when location changes
  useEffect(() => {
    // Initialize the map
    if (!map && mapContainerRef.current) {
      const initialMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 12,
      });
      setMap(initialMap);
    }

    // Update the map center based on the general location
    if (location && map) {
      fetchCoordinates(location).then((coords) => {
        if (coords) {
          map.setCenter(coords);
        }
      });
    }

    // Plot itinerary events on the map
    if (response && map) {
      map.on("load", () => {
        response.itinerary.forEach((day) => {
          day.program.forEach((event) => {
            const coordinates = event.coordinateOfEvent;
            const el = createCustomMarkerElement(event);

            // Create a marker for each event
            new mapboxgl.Marker(el)
              .setLngLat(coordinates)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setText(
                  event.programOrPlaceName,
                ),
              )
              .addTo(map);
          });
        });
      });
    }

    // Clean up on unmount
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [location, map, response]);

  return <div ref={mapContainerRef} className="h-screen w-full" />;
};

export default Map;
