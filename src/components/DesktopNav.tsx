import { NavLink } from "react-router-dom";

const DesktopNav = () => {
  return (
    <div className='box-border pt-4 bg-gradient-to-b from-[#00000070] to-transaprent'>
      <div className=' flex items-center justify-between mx-auto px-4 max-w-6xl '>
        <div>
          <NavLink to='/'>
            <img src='/logo.svg' className='w-36' alt='Voyagio logo' />
          </NavLink>
        </div>
        <div className='overflow-hidden px-8 rounded-full py-3 space-x-8 font-bold text-xl'>
          {" "}
          {/*bg-blue-100 border-[1px] border-white border-opacity-20 bg-opacity-20 backdrop-blur-xl*/}
          <NavLink
            to='/'
            className='hover:text-blue-400 transition-color duration-150'>
            Home
          </NavLink>
          <NavLink
            to='/destinations'
            className='hover:text-blue-400 transition-color duration-150'>
            Destinations
          </NavLink>
          <NavLink
            to='/explore'
            className='hover:text-blue-400 transition-color duration-150'>
            Explore
          </NavLink>
          <a
            target='_blank'
            href='https://voyagio.canny.io/feature-requests'
            className='hover:text-blue-400 transition-color duration-150'>
            Feedback
          </a>
        </div>
        <button className='bg-teal-500 button'>Plan a Trip</button>
      </div>
    </div>
  );
};

export default DesktopNav;
