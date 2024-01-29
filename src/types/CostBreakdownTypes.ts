import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface MainActivity {
	mainActivityName: string;
	costOfProgram: number;
}

export interface EstimatedCostCategory {
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

export type Detail = { name: string; cost: number };

interface CostDetail {
	name: string;
	cost: number | string;
}

export interface CostItemProps {
	icon: IconDefinition;
	category: string;
	details: CostDetail[];
}