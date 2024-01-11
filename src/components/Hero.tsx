import ItineraryPlanner from "./Itinerary.tsx";

const Hero = () => {
  return (
    <div className='w-full flex pt-40 pb-20 justify-center items-center bg-gradient-to-br from-blue-700 via-purple-800 via-teal-600 to-purple-700'>
      <div className='mx-6 max-w-5xl grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-12'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-6xl font-bold mb-2 leading-normal'>
            Your <span className='text-teal-400'>Personal AI</span> Travel
            Assistant...
          </h1>
          <h3 className='text-gray-200 text-md tracking-widest uppercase font-medium text-justify mb-6 leading-loose'>
            Let AI plan your next trip, based on your requirements
          </h3>
          <h3 className='text-gray-200 leading-loose text-md tracking-widest uppercase font-medium text-justify mb-6'>
            Travel hassle-free, and without worries
          </h3>
          <button className='hidden md:block bg-blue-400 w-full h-20 text-3xl button shadow-md'>
            Learn More
          </button>
        </div>
        <div>
          <ItineraryPlanner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
