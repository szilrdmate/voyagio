import ItineraryPlanner from "./itinerary.tsx";

const Hero = () => {
  return (
    <div className='w-full flex py-20 justify-center items-center bg-gradient-to-br from-blue-700 via-purple-800 to-purple-700'>
      <div className='mx-6 max-w-5xl grid grid-cols-2 gap-12 grid-rows-1'>
        <div>
          <h1 className='text-6xl font-bold mb-8 leading-normal '>
            Your <span className='text-blue-300'>Personal AI</span> Travel
            Assistant...
          </h1>
          <h3 className='text-gray-200 text-md tracking-widest uppercase font-medium text-justify mb-4 leading-loose'>
            Let AI plan your next trip, based on your requirements
          </h3>
          <h3 className='text-gray-200 leading-loose text-md tracking-widest uppercase font-medium text-justify mb-4'>
            Travel hassle-free, and without worries
          </h3>
        </div>
        <div>
          <ItineraryPlanner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
