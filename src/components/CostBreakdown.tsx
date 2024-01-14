// components/CostBreakdown.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBed,
  faTaxi,
  faTicket,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

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

interface EstimatedCostsProps {
  estimatedCosts: EstimatedCostCategory[];
}

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
    <div className='pb-12'>
      <div className='flex space-x-4 mb-6'>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          <FontAwesomeIcon
            className='text-gray-800 text-2xl'
            icon={faChevronDown}
            rotation={isCollapsed ? undefined : 270}
          />
        </button>
        <h2 className='text-gray-800 text-3xl font-black'>
          Cost Breakdown (USD)
        </h2>
      </div>
      {isCollapsed && (
        <div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>
              <FontAwesomeIcon icon={faBed} className='text-xl mr-2 w-8' />
              Accommodation
            </h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 mb-8'>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Hostel</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {accommodationCosts.hostelCostPerNight}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Hotel</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {accommodationCosts.hotelCostPerNight}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2 '>AirBnb</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {accommodationCosts.airbnbCostPerNight}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Luxury Hotel</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {accommodationCosts.luxuryHotelCostPerNight}$
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>
              <FontAwesomeIcon icon={faTaxi} className='text-xl mr-2 w-8' />
              Transport
            </h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 mb-8'>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Bus</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {transportationCosts.busCost}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Taxi</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {transportationCosts.taxiCost}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Train</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {transportationCosts.trainCost}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Rental</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {transportationCosts.rentalCost}$
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>
              <FontAwesomeIcon icon={faUtensils} className='text-xl mr-2 w-8' />
              Food
            </h3>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 mb-8'>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Street Food</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {foodCosts.streetFoodCost}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Budget Restaurant</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {foodCosts.budgetRestaurantCost}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Fancy Restaurant</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {foodCosts.fancyRestaurantCost}$
                </p>
              </div>
              <div className='p-4'>
                <h4 className='text-gray-500 mb-2'>Traditional Food</h4>
                <p className='text-gray-800 font-medium text-lg'>
                  {foodCosts.traditionalFoodCost}$
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-800'>
              <FontAwesomeIcon icon={faTicket} className='text-xl mr-2 w-8' />
              Activities
            </h3>
            <div className='grid grid-cols-2 gap-4 mb-8'>
              {activitiesCosts.mainActivityForEachDay?.map(
                (activity, index) => (
                  <div key={index} className='p-4 col-span-1 row-span-1'>
                    <h4 className='text-gray-500 mb-2'>
                      {activity.mainActivityName}
                    </h4>
                    <p className='text-gray-800 font-medium text-lg'>
                      {activity.costOfProgram}$
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostBreakdown;
