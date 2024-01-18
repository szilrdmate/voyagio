import { Link } from "react-router-dom";
import TypingEffect from "./TypeEffect";

const Hero = () => {
  return (
    <div className='w-full h-screen flex px-6 pt-40 pb-28 justify-center items-center bg-gradient-to-b from-blue-700 via-blue-500 to-white  border-gray-300'>
      <div className='max-w-3xl mx-auto'>
        <h1 className='text-white text-7xl font-bold mb-4 leading-tight text-center'>
          Let AI be your{" "}
          <span className='text-teal-400'>Personal Travel Assistant...</span>
        </h1>
        <h3 className='w-full text-gray-200 leading-loose text-md tracking-widest uppercase font-medium text-center mb-8'>
          Travel hassle-free, and without worries
        </h3>
        <TypingEffect />
        <Link to='/planner'>
          <div className='mt-8 text-white hover:scale-[1.02] duration-300 transition-transform flex justify-center items-center rounded-full button bg-blue-500 max-w-lg mx-auto h-16 text-2xl'>
            Get Planning - It's Free
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
