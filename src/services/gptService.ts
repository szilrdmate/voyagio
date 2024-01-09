// src/services/gptService.ts
import axios from 'axios';

// Assuming the API key is securely stored in an environment variable
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateItinerary = async (data: { destination: string; length: string; budget: string; intensity: string; program: string }) => {
  // Input validation
  if (!data.destination || !data.length || !data.budget || !data.intensity || !data.program) {
    console.error('Invalid input data for itinerary generation');
    return null;
  }

  // Construct prompt for GPT API
  const prompt = `You are an expert traveller and backpacker who has seen the world and know every destination's ins and outs. Create a ${data.length}-day itinerary for a trip to ${data.destination} with a budget of ${data.budget} and ${data.intensity} out of 5 intensity regarding activities. Plan mostly ${data.program} type programs and events as much as possible. Include a packing list.`;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions/', {
      prompt,
      // Additional parameters can be included here
      max_tokens: 200,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.choices[0].text;
  } catch (error) {
    // Enhanced error logging
    console.error('Error calling OpenAI API:', error.response ? error.response.data : error);
    return null;
  }
};
