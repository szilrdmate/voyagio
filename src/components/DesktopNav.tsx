import { Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className='bg-white text-blue-900'>
      <div className='h-20 flex items-center justify-between mx-auto max-w-6xl'>
        <div>
          <Link to='/'>
            <img src='./public/logo.svg' className='w-36' alt='Voyagio logo' />
          </Link>
        </div>
        <div className='space-x-8 font-semibold text-lg uppercase'>
          <Link
            to='/'
            className='hover:text-blue-400 transition-color duration-150'>
            Home
          </Link>
          <Link
            to='/explore'
            className='hover:text-blue-400 transition-color duration-150'>
            Explore
          </Link>
          <Link
            to='/destinations'
            className='hover:text-blue-400 transition-color duration-150'>
            Destinations
          </Link>
          <Link
            to='/faq'
            className='hover:text-blue-400 transition-color duration-150'>
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
