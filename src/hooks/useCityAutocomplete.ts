// src/hooks/useCityAutocomplete.ts
import { useState, useEffect } from 'react';
import { CitySuggestion, MapboxFeature } from '../types/CitySuggestion';

const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

export const useCityAutocomplete = (query: string) => {
    const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  
    useEffect(() => {
      if (query.length > 2) {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}&types=place`)
          .then(res => res.json())
          .then(data => {
            const cities: CitySuggestion[] = data.features.map((feature: MapboxFeature) => ({
              name: feature.text,
              coordinates: feature.center
            }));
            setSuggestions(cities);
          })
          .catch(err => console.error(err));
      } else {
        setSuggestions([]);
      }
    }, [query]);
  
    return suggestions;
  };