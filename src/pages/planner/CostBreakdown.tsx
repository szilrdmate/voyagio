import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBed, faTaxi, faTicket, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { EstimatedCostsProps } from "../../types/CostBreakdownTypes";

const CostBreakdown: React.FC<EstimatedCostsProps> = ({ estimatedCosts }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const accommodationCosts = estimatedCosts[0];
	const transportationCosts = estimatedCosts[1];
	const foodCosts = estimatedCosts[2];
	const activitiesCosts = estimatedCosts[3];

	if (!estimatedCosts) {
		// Render nothing or a loading indicator until the response is available
		return <div>Loading...</div>;
	}

	return (
		<div className="pb-12">
			<div className="mb-6 flex space-x-4">
				<button onClick={() => setIsCollapsed(!isCollapsed)}>
					<FontAwesomeIcon className="text-2xl text-gray-800" icon={faChevronDown} rotation={isCollapsed ? undefined : 270} />
				</button>
				<h2 className="text-3xl font-black text-gray-800">Cost Breakdown (USD)</h2>
			</div>
			{isCollapsed && (
				<div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							<FontAwesomeIcon icon={faBed} className="mr-2 w-8 text-xl" />
							Accommodation
						</h3>
						<div className="mb-8 grid grid-cols-2 grid-rows-2 gap-4">
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Hostel</h4>
								<p className="text-lg font-medium text-gray-800">{accommodationCosts.hostelCostPerNight}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Hotel</h4>
								<p className="text-lg font-medium text-gray-800">{accommodationCosts.hotelCostPerNight}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500 ">AirBnb</h4>
								<p className="text-lg font-medium text-gray-800">{accommodationCosts.airbnbCostPerNight}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Luxury Hotel</h4>
								<p className="text-lg font-medium text-gray-800">{accommodationCosts.luxuryHotelCostPerNight}$</p>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							<FontAwesomeIcon icon={faTaxi} className="mr-2 w-8 text-xl" />
							Transport
						</h3>
						<div className="mb-8 grid grid-cols-2 grid-rows-2 gap-4">
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Bus</h4>
								<p className="text-lg font-medium text-gray-800">{transportationCosts.busCost}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Taxi</h4>
								<p className="text-lg font-medium text-gray-800">{transportationCosts.taxiCost}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Train</h4>
								<p className="text-lg font-medium text-gray-800">{transportationCosts.trainCost}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Rental</h4>
								<p className="text-lg font-medium text-gray-800">{transportationCosts.rentalCost}$</p>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							<FontAwesomeIcon icon={faUtensils} className="mr-2 w-8 text-xl" />
							Food
						</h3>
						<div className="mb-8 grid grid-cols-2 grid-rows-2 gap-4">
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Street Food</h4>
								<p className="text-lg font-medium text-gray-800">{foodCosts.streetFoodCost}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Budget Restaurant</h4>
								<p className="text-lg font-medium text-gray-800">{foodCosts.budgetRestaurantCost}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Fancy Restaurant</h4>
								<p className="text-lg font-medium text-gray-800">{foodCosts.fancyRestaurantCost}$</p>
							</div>
							<div className="p-4">
								<h4 className="mb-2 text-gray-500">Traditional Food</h4>
								<p className="text-lg font-medium text-gray-800">{foodCosts.traditionalFoodCost}$</p>
							</div>
						</div>
					</div>
					<div>
						<h3 className="text-lg font-semibold text-gray-800">
							<FontAwesomeIcon icon={faTicket} className="mr-2 w-8 text-xl" />
							Activities
						</h3>
						<div className="mb-8 grid grid-cols-2 gap-4">
							{activitiesCosts.mainActivityForEachDay?.map((activity, index) => (
								<div key={index} className="col-span-1 row-span-1 p-4">
									<h4 className="mb-2 text-gray-500">{activity.mainActivityName}</h4>
									<p className="text-lg font-medium text-gray-800">{activity.costOfProgram}$</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CostBreakdown;
