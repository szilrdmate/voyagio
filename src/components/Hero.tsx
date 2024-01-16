import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='w-full flex pt-40 pb-28 justify-center items-center bg-gradient-to-br from-blue-700 via-purple-800 via-teal-600 to-purple-700 border-b-2 border-gray-300'>
      <div className='max-w-3xl'>
        <h1 className='text-white text-7xl font-bold mb-2 leading-normal text-center'>
          Your <span className='text-teal-400'>Personal AI</span> Travel
          Assistant...
        </h1>
        <h3 className='w-full text-gray-200 text-md tracking-widest uppercase font-medium text-center mb-6 leading-loose'>
          Let AI plan your next trip, based on your requirements
        </h3>
        <h3 className='w-full text-gray-200 leading-loose text-md tracking-widest uppercase font-medium text-center mb-6'>
          Travel hassle-free, and without worries
        </h3>
        <Link to='/planner'>
          <div className='text-white hover:scale-[1.02] duration-300 transition-transform flex justify-center items-center button bg-blue-400 w-full h-20 text-3xl'>
            Get Planning - It's Free
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
