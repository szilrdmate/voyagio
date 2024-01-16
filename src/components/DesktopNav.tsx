import { NavLink, Link } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className='text-white backdrop-blur-xl w-full absolute box-border py-4 bg-gradient-to-b from-[#00000060] to-transaprent'>
      <div className=' flex items-center justify-between mx-auto px-4 max-w-6xl '>
        <div>
          <NavLink to='/'>
            <img src='/logo.svg' className='w-36' alt='Voyagio logo' />
          </NavLink>
        </div>
        <div className='overflow-hidden rounded-full py-3 font-bold text-xl bg-blue-100 border-[1px] border-white border-opacity-20 bg-opacity-20 backdrop-blur-xl'>
          <NavLink
            to='/'
            className='hover:text-blue-400 hover:bg-gray-300 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Home
          </NavLink>
          <NavLink
            to='/explore'
            className='hover:text-blue-400 hover:bg-gray-300 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Explore
          </NavLink>
          <NavLink
            to='/blog'
            className='hover:text-blue-400 hover:bg-gray-300 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Blog
          </NavLink>
          <Link
            target='_blank'
            to='https://voyagio.canny.io/feature-requests'
            className='hover:text-blue-400 hover:bg-gray-300 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Feedback
          </Link>
        </div>
        <NavLink to='/planner' className='bg-teal-500 button'>
          Try It for Free
        </NavLink>
      </div>
    </div>
  );
};

export default DesktopNav;
