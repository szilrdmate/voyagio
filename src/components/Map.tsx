import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

interface MapProps {
  location: string;
}

const Map: React.FC<MapProps> = ({ location }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map>();

  const fetchCoordinates = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          city
        )}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        return data.features[0].geometry.coordinates as [number, number];
      }
      console.log("No results found for the city");
      return null;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return null;
    }
  };

  // Initialize map and update it when location changes
  useEffect(() => {
    if (!map && mapContainerRef.current) {
      const initialMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 12,
      });
      setMap(initialMap);
    }

    if (location && map) {
      fetchCoordinates(location).then((coords) => {
        if (coords) {
          map.on("load", () => {
            map.setCenter(coords);
          });
        }
      });
    }

    // Clean up on unmount
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [location, map]);

  return <div ref={mapContainerRef} className='h-screen w-full' />;
};

export default Map;
