import axios from "axios"

const API_URL = 'https://api.unsplash.com/search/photos';
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchCityImage = async (cityName: string): Promise<string> => {
  try {
    const response = await axios.get(API_URL, {
      params: { query: cityName, client_id: ACCESS_KEY, per_page: 1 },
    });
    if (response.data.results.length > 0) {
      return response.data.results[0].urls.regular;
    }
    return 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Return a default URL if no images are found
  } catch (error) {
    console.error('Error fetching image:', error);
    return '';
  }
};