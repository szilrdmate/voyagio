import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBed, faTaxi, faTicket, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { EstimatedCostsProps, EstimatedCostCategory } from "../../types/CostBreakdownTypes";

type Detail = { name: string; cost: number };

interface CostDetail {
	name: string;
	cost: number | string;
}

interface CostItemProps {
	icon: IconDefinition;
	category: string;
	details: CostDetail[];
}

const CostItem: React.FC<CostItemProps> = ({ icon, category, details }) => (
	<div>
		<h3 className="text-lg font-semibold text-gray-800">
			<FontAwesomeIcon icon={icon} className="mr-2 w-8 text-xl" />
			{category}
		</h3>
		<div className="mb-8 grid grid-cols-2 grid-rows-2 gap-4">
			{details.map((detail) => (
				<div key={detail.name} className="p-4">
					<h4 className="mb-2 text-gray-500">{detail.name}</h4>
					<p className="text-lg font-medium text-gray-800">{detail.cost ? `${detail.cost}$` : "N/A"}</p>
				</div>
			))}
		</div>
	</div>
);

const CostBreakdown: React.FC<EstimatedCostsProps> = ({ estimatedCosts }) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	if (!estimatedCosts || estimatedCosts.length === 0) {
		return <div>Loading...</div>;
	}

	const toggleCollapse = () => setIsCollapsed(!isCollapsed);

	// Assuming the order of categories is fixed and matches the order of icons
	const categories = ["Accommodation", "Transportation", "Food", "Activities"];
	const icons = [faBed, faTaxi, faUtensils, faTicket];

	// Predefined order for the accommodation costs
	const accommodationOrder: (keyof EstimatedCostCategory)[] = ["hostelCostPerNight", "hotelCostPerNight", "airbnbCostPerNight", "luxuryHotelCostPerNight"];

	// Predefined order for transportation costs
	const transportationOrder: (keyof EstimatedCostCategory)[] = ["busCost", "taxiCost", "trainCost", "rentalCost"];

	// Predefined order for food costs
	const foodOrder: (keyof EstimatedCostCategory)[] = ["streetFoodCost", "budgetRestaurantCost", "fancyRestaurantCost", "traditionalFoodCost"];

	// Function to order the details based on a predefined order
	const orderDetails = (costCategory: EstimatedCostCategory, order: (keyof EstimatedCostCategory)[]): Detail[] => {
		return order
			.map((key) => {
				// Check if the value is a number and only then create the Detail object.
				const cost = costCategory[key];
				if (typeof cost === "number") {
					return {
						name:
							key.charAt(0).toUpperCase() +
							key
								.slice(1)
								.replace(/Cost/g, "")
								.replace(/([A-Z])/g, " $1")
								.trim(),
						cost: cost,
					};
				}
				return null; // Return null for values that are not numbers (which will be filtered out)
			})
			.filter((detail): detail is Detail => detail !== null); // Filter out null values and narrow type to Detail
	};

	return (
		<div className="pb-12">
			<div className="mb-6 flex space-x-4">
				<button onClick={toggleCollapse}>
					<FontAwesomeIcon className="text-2xl text-gray-800" icon={faChevronDown} rotation={isCollapsed ? 270 : undefined} />
				</button>
				<h2 className="text-3xl font-black text-gray-800">Cost Breakdown (USD)</h2>
			</div>
			{!isCollapsed &&
				estimatedCosts.map((costCategory, index) => {
					// Ensure index is a valid index for categories and icons array
					if (index >= categories.length || index >= icons.length) return null;

					let details: Detail[];
					switch (index) {
						case 0: // Accommodation
							details = orderDetails(costCategory, accommodationOrder);
							break;
						case 1: // Transportation
							details = orderDetails(costCategory, transportationOrder);
							break;
						case 2: // Food
							details = orderDetails(costCategory, foodOrder);
							break;
						case 3: // Activities
							details =
								costCategory.mainActivityForEachDay?.map((activity) => ({
									name: activity.mainActivityName,
									cost: activity.costOfProgram,
								})) || [];
							break;
						default:
							details = [];
					}
					return <CostItem key={categories[index]} icon={icons[index]} category={categories[index]} details={details} />;
				})}
		</div>
	);
};

export default CostBreakdown;
