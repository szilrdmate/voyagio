// src/services/gptService.ts
import axios from 'axios';

// Assuming the API key is securely stored in an environment variable
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateItinerary = async (data: { destination: string; length: string; budget: string; program: string }) => {
  // Input validation
  if (!data.destination || !data.length || !data.budget || !data.program) {
    console.error('Invalid input data for itinerary generation');
    return null;
  }

  // Construct prompt for GPT API
  const prompt = `You are an expert traveller and backpacker who has seen the world and know every destination's ins and outs. Create a ${data.length}-day itinerary for a trip to ${data.destination} with a budget of ${data.budget}. Plan 5 programs for each day in the following category(s): ${data.program}. Return the requested data according to the specified details in the form of a json file with the following outline/format. Here comes the format: "{
    "destination": {
      "destinationCity": "String",
      "destinationCountry": "String",
      "currency": "String",
      "oneDollarInLocalCurrency": "Number",
      "languagesSpoken": "Array",
      "timeThereInUtcFormat": "String",
      "capitalOfTheCountry": "String",
      "localWeather": "String",
      "temperatureRangeThroughTheYear": "String"
    },
    "itinerary": [
      {
        "day": "Number",
        "program": [
          {
            "id": "Number",
            "programOrPlaceName": "String",
            "timeSpentThere": "String",
            "location": "String",
            "shortDescriptionOfProgram": "String"
          },
          // ... Repeat for each program
        ]
      },
      // ... Repeat for each day
    ],
    "estimatedCosts": [
      {
        "category": "Accommodation",
        "hostelCostPerNight": "Number",
        "hotelCostPerNight": "Number",
        "luxuryHotelCostPerNight": "Number",
        "airbnbCostPerNight": "Number"
      },
      {
        "category": "Transportation",
        "busCost": "Number",
        "taxiCost": "Number",
        "trainCost": "Number",
        "rentalCost": "Number"
      },
      {
        "category": "Food",
        "streetFoodCost": "Number",
        "budgetRestaurantCost": "Number",
        "fancyRestaurantCost": "Number",
        "traditionalFoodCost": "Number"
      },
      {
        "category": "Activities",
        "mainActivityForEachDay": [
          {
            "mainActivityName": "Number",
            "costOfProgram": "Number"
          },
          // ... Repeat for each day's main event and cost of program should be in usd
        ]
      }
    ]
  }"
   Only return the requested json and nothing else, no matter what!`;

  try {
    // Note the change in the endpoint URL to 'v1/chat/completions'
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-4-1106-preview", // Specify the model you want to use
      messages: [{role: "system", content: "You are a travel planning assistant."}, {role: "user", content: prompt}],
      // Additional parameters can be included here
      response_format: { type: "json_object" },
      max_tokens: 4090,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    // The structure of the response might be different for the chat endpoint
    // You might need to adjust the way you access the response text
    return response.data.choices[0].message.content; // Adjust according to the actual response structure
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error calling OpenAI API:', error.message);
      if (error.response) {
        console.error(error.response.data);
      }
    } else {
      console.error('An unexpected error occurred:', error);
    }
    return null;
  }
};
