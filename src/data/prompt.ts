

export const prompt: string = `You are an expert traveller and backpacker who has seen the world and know every destination's ins and outs. Create a ${data.length}-day itinerary for a trip to ${data.destination} with a budget of ${data.budget}. Plan 5 programs for each day in the following category(s): ${data.program}. Return the requested data according to the specified details in the form of a json file with the following outline/format. Here comes the format: "{
    "destination": {
      "numberOfDays": "Number",
      "destinationCity": "String",
      "destinationCountry": "String",
      "currency": "String",
      "oneDollarInLocalCurrency": "Number",
      "languagesSpoken": "Array",
      "timeThereInUtcFormat": "String",
      "capitalOfTheCountry": "String",
      "localWeather": "String",
      "temperatureRangeThroughTheYear": "String",
      "shortDescription": "String", // 2-3 sentances
      "shortHistory": "String", // 2-3 sentances
      "fetchImageOfDestinationLocation": "String",
      "startDate": "String",
      "endDate": "String"
    },
    "itinerary": [
      {
        "day": "Number",
        "date": "String" // eg. dayofweek, day, month
        "program": [
          {
            "id": "Number",
            "programOrPlaceName": "String",
            "timeSpentThere": "String",
            "location": "String",
            "shortDescriptionOfProgram": "String" // 2-3 sentances
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
   Only return the requested json and nothing else, no matter what!`