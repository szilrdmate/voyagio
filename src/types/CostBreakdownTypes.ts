interface MainActivity {
	mainActivityName: string;
	costOfProgram: number;
}

interface EstimatedCostCategory {
	category: string;
	hostelCostPerNight?: number;
	hotelCostPerNight?: number;
	luxuryHotelCostPerNight?: number;
	airbnbCostPerNight?: number;
	busCost?: number;
	taxiCost?: number;
	trainCost?: number;
	rentalCost?: number;
	streetFoodCost?: number;
	budgetRestaurantCost?: number;
	fancyRestaurantCost?: number;
	traditionalFoodCost?: number;
	mainActivityForEachDay?: MainActivity[];
}

export interface EstimatedCostsProps {
	estimatedCosts: EstimatedCostCategory[];
}