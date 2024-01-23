import React from "react";

type FragmentType = {
  times: number;
};

const HistorySkeleton: React.FC<FragmentType> = ({ times }) => {
  const items = [];

  for (let i = 0; i < times; i++) {
    items.push(
      <li
        key={i}
        className='bg-white rounded-2xl py-4 px-8 border border-gray-300 border-opacity-20 shadow-xl flex justify-between items-center'>
        <div className='space-y-2'>
          <p className='p-4 w-64 bg-gray-200 rounded-lg animate-pulse'></p>
          <p className='p-4 w-32 bg-gray-200 rounded-lg animate-pulse'></p>
        </div>
        <div className='space-x-2'>
          <button className='button rounded-xl border border-gray-200 text-white animate-pulse'>
            Remove itinerary
          </button>
          <button className='button rounded-xl bg-gray-200 text-gray-200 animate-pulse'>
            View itinerary
          </button>
        </div>
      </li>
    );
  }

  return <ul className='space-y-4'>{items}</ul>;
};

export default HistorySkeleton;
