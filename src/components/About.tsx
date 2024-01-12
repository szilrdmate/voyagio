import React from "react";

const About: React.FC = () => {
  return (
    <div className='w-full bg-white px-6 py-16'>
      <h2 className='text-5xl max-w-6xl font-extrabold mb-8 text-gray-800 mx-auto'>
        All About AI Travel
      </h2>
      <div className='max-w-6xl mx-auto grid grid-cols-2 grid-rows-8 gap-4'>
        <div className='border-[1px] border-white bg-gray-200 col-start-1 col-span-2 row-start-1 row-span-3 rounded-lg h-96'></div>
        <div className='border-[1px] border-white bg-gray-200 col-start-1 col-span-1 row-start-4 row-span-3 rounded-lg'></div>
        <div className='border-[1px] border-white bg-gray-200 col-start-2 col-span-1 row-start-4 row-span-3 rounded-lg'></div>
        <div className='border-[1px] border-white bg-gray-200 col-start-1 col-span-2 row-start-7 row-span-2 rounded-lg'></div>
      </div>
    </div>
  );
};

export default About;
