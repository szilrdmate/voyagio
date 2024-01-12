export const destination = {
    destinationCity: String,
    destinationCoutnry: String,
    currency: String,
    oneDollarInLocalCurrency: Number,
    languagesSpoken: Array,
    timeThereInUtcFormat: String,
    capitalOfTheCountry: String,
    localWeather: String,
    tempratureRangeThroughTheYear: String
}

export const itinerary = [
  {
    day: Number,
    program: [
    {
        id: Number,
        programOrPlaceName: String,
        timeSpentThere: String,
        location: String,
        shortDescriptionOfProgram: String
    },
    {id: Number, programOrPlaceName: String, timeSpentThere: String, location: String, shortDescriptionOfProgram: String},
    {id: Number, programOrPlaceName: String, timeSpentThere: String, location: String, shortDescriptionOfProgram: String},
    {id: Number, programOrPlaceName: String, timeSpentThere: String, location: String, shortDescriptionOfProgram: String},
    {id: Number, programOrPlaceName: String, timeSpentThere: String, location: String, shortDescriptionOfProgram: String}
  ]},
  {/*...and so on, repeat for the specified amount of days*/}
]

export const estimatedCosts = [
    {category: "Accomodation",
    hostelCostPerNight: Number,
    hotelCostPerNight: Number,
    luxuryHotelCostPerNight: Number,
    airbnbCostPerNight: Number
},
    {category: "Transportation",
    busCost: Number,
    taxiCost: Number,
    trainCost: Number,
    rentalCost: Number,
},
    {category: "Food",
    streetFoodCost: Number,
    budgetRestaurantCost: Number,
    fancyRestaurantCost: Number,
    traditionalFoodCost: Number
},
    {
        category: "Activities",
        mainActivityForEachDay: [
            {
                mainActivityName: Number,
                costOfProgram: Number
            },
            {
                mainActivityName: Number,
                costOfProgram: Number
            },
                {/*Repeat for each day, but only one main event per day*/}
                ]
},
]
