import React from "react";

const About: React.FC = () => {
  return (
    <div className='w-full bg-white px-6 pt-16 pb-32'>
      <h2 className='text-5xl max-w-6xl font-extrabold mb-8 text-gray-800 mx-auto'>
        All About AI Travel
      </h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-4'>
        <div className='flex flex-col border border-gray-300 bg-blue-500 rounded-lg px-6 py-6'>
          <h2 className='text-white font-bold text-3xl mb-2'>
            Hi-Customization
          </h2>
          <p className='text-gray-200 text-base text-justify tracking-wide leading-relaxed mb-2'>
            Our AI analyzes your preferences, from cultural interests to
            adventure levels, ensuring every recommendation is tailored to your
            taste. Discover hidden gems, popular attractions, and unique
            experiences, all curated to suit your travel desires.
          </p>
          <button className='button text-white w-full bg-blue-300'>
            Try It Out
          </button>
        </div>
        <div className=' flex flex-col border border-gray-300 bg-gray-200 rounded-lg px-6 py-6'>
          <h2 className='text-gray-800 font-bold text-3xl mb-2'>
            Effortless Planning
          </h2>
          <p className='text-gray-500 text-base text-justify tracking-wide leading-relaxed mb-2'>
            Say goodbye to the overwhelming task of sifting through endless
            options. Our AI streamlines the planning process, offering a
            user-friendly interface that delivers your ideal itinerary swiftly.
            It's travel planning made simple, smart!
          </p>
          <button className='button text-white w-full bg-blue-500'>
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
