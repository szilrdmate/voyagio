import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faMoneyBillTransfer,
  faLanguage,
  faEarthAmericas,
  faTemperatureHalf,
  faCity,
} from "@fortawesome/free-solid-svg-icons";
import response from "../data/exampleResponse.json";

type GeneralProps = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  stats: StatsProps;
};

type StatsProps = {
  numberOfDays: number;
  destinationCity: string;
  destinationCountry: string;
  currency: string;
  oneDollarInLocalCurrency: number;
  languagesSpoken: string[];
  timeThereInUtcFormat: string;
  capitalOfTheCountry: string;
  localWeather: string;
  temperatureRangeThroughTheYear: string;
};

const General: React.FC<GeneralProps> = ({ stats, setState }) => {
  return (
    <div className='px-8 py-10'>
      <div className='space-x-2 mb-8'>
        <button
          onClick={() => setState(true)}
          className='rounded-full bg-transparent text-gray-800 border-2 border-gray-800 px-6 py-1 font-semibold text-lg hover:bg-gray-800 hover:text-white duration-150'>
          Overview
        </button>
        <button className='rounded-full bg-gray-800 text-white border-2 border-gray-800 px-6 py-1 font-semibold text-lg'>
          General Information
        </button>
      </div>
      <div className='w-full grid grid-cols-2 grid-rows-3 gap-6'>
        <div className='flex items-center'>
          <FontAwesomeIcon
            className='bg-gray-200 p-2 rounded-full text-gray-800 text-xl h-6 w-6'
            icon={faMoneyBill}
          />
          <p className='text-gray-800 text-md font-medium ml-4'>
            {response.destination.currency}
          </p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon
            className='text-gray-800 text-xl h-6 w-6 bg-gray-200 p-2 rounded-full'
            icon={faMoneyBillTransfer}
          />
          <p className='text-gray-800 text-md font-medium ml-4'>
            {stats.oneDollarInLocalCurrency}
          </p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon
            className='text-gray-800 text-xl h-6 w-6 bg-gray-200 p-2 rounded-full'
            icon={faCity}
          />
          <p className='text-gray-800 text-md font-medium ml-4'>
            {stats.capitalOfTheCountry}
          </p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon
            className='text-gray-800 text-xl h-6 w-6 bg-gray-200 p-2 rounded-full'
            icon={faTemperatureHalf}
          />
          <p className='text-gray-800 text-md font-medium ml-4'>
            {stats.localWeather}
          </p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon
            className='text-gray-800 text-xl h-6 w-6 bg-gray-200 p-2 rounded-full'
            icon={faEarthAmericas}
          />
          <p className='text-gray-800 text-md font-medium ml-4'>
            {stats.timeThereInUtcFormat}
          </p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon
            className='text-gray-800 text-xl h-6 w-6 bg-gray-200 p-2 rounded-full'
            icon={faLanguage}
          />
          <p className='text-gray-800 text-md font-medium ml-4'>
            {stats.languagesSpoken}
          </p>
        </div>
      </div>
    </div>
  );
};

export default General;
