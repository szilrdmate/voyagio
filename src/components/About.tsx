import React from "react";

const About: React.FC = () => {
  return (
    <div className='w-full bg-white px-6 pt-16 pb-32'>
      <h2 className='text-5xl max-w-6xl font-extrabold mb-8 text-gray-800 mx-auto'>
        All About AI Travel
      </h2>
      <div className='max-w-6xl mx-auto grid grid-cols-2 grid-rows-5 gap-4'>
        <div className='border border-gray-300 bg-gray-200 col-start-1 col-span-2 row-start-1 row-span-3 rounded-lg h-96 bg-[url("https://freepngimg.com/thumb/airplane/126147-flying-airplane-vector-pic-free-download-png-hd.png")] bg-no-repeat bg-cover'></div>
        <div className='border border-gray-300 bg-blue-500 col-start-1 col-span-1 row-start-4 row-span-3 rounded-lg px-6 py-4'>
          <h2 className='text-white font-bold text-3xl mb-2'>
            Personalized Suggestions
          </h2>
          <p className='text-gray-200 text-base text-justify tracking-wide leading-relaxed'>
            Our AI analyzes your preferences, from cultural interests to
            adventure levels, ensuring every recommendation is tailored to your
            taste. Discover hidden gems, popular attractions, and unique
            experiences, all curated to suit your travel desires.
          </p>
        </div>
        <div className=' flex flex-col justify-between border border-gray-300 bg-gray-200 col-start-2 col-span-1 row-start-4 row-span-3 rounded-lg px-6 py-4'>
          <h2 className='text-gray-800 font-bold text-3xl mb-2'>
            Effortless Planning
          </h2>
          <p className='text-gray-500 text-base text-justify tracking-wide leading-relaxed'>
            Say goodbye to the overwhelming task of sifting through endless
            options. Our AI streamlines the planning process, offering a
            user-friendly interface that delivers your ideal itinerary swiftly.
            It's travel planning made simple, smart, and fun!
          </p>
          <button className='button text-white w-full bg-blue-500'>
            Hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
