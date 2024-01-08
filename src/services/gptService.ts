// src/services/gptService.ts
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateItinerary = async (data: { destination: string; length: string; budget: string; intensity: string }) => {
  // Construct prompt for GPT API
  const prompt = `You are an expert traveller and backpacker who has seen the world and know every destination's ins and outs. Create a ${data.length}-day itinerary for a trip to ${data.destination} with a budget of ${data.budget} and ${data.intensity} activities. Include a packing list.`;

  try {
    const response = await axios.post('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
      prompt,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return null;
  }
};
