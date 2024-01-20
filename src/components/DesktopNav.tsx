import { NavLink, Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = () => {
  const location = useLocation();
  const { user, loading } = UserAuth();
  const path =
    location.pathname == "/signin" || location.pathname == "/signup"
      ? "hidden"
      : "";

  const navLoadClass = loading ? "opacity-0" : "";

  return (
    <div className='text-white backdrop-blur-xl w-full absolute box-border py-4 bg-gradient-to-b from-[#00000060] to-transaprent'>
      <div className='flex items-center justify-between mx-auto px-4 max-w-6xl '>
        <div>
          <NavLink to='/'>
            <img src='/logo.svg' className='w-[150px]' alt='Voyagio logo' />
          </NavLink>
        </div>
        <div className='flex itmes-center overflow-hidden rounded-full font-bold text-xl bg-blue-100 border-[1px] border-white border-opacity-20 bg-opacity-20 backdrop-blur-xl'>
          <NavLink
            to='/'
            className='hover:text-blue-400 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Home
          </NavLink>
          <NavLink
            to='/planner'
            className='hover:text-blue-400 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Plan A Trip
          </NavLink>
          <NavLink
            to='/blog'
            className='hover:text-blue-400 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Blog
          </NavLink>
          <Link
            target='_blank'
            to='https://voyagio.canny.io/feature-requests'
            className='hover:text-blue-400 py-[14px] transition-color duration-150 px-8 rounded-full'>
            Feedback
          </Link>
          {!user ? (
            <NavLink
              to='/signin'
              className={`bg-teal-500 px-6 ml-8 border border-teal-400 flex justify-center items-center text-xl font-bold rounded-full ${navLoadClass} ${path}`}>
              Sign In
            </NavLink>
          ) : (
            <NavLink
              to='/account'
              className={`bg-blue-500 ml-8 w-fit flex justify-center items-center text-xl font-bold rounded-full`}>
              <FontAwesomeIcon
                className='border-4 border-blue-500 rounded-full text-blue-300 text-5xl'
                icon={faCircleUser}
              />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
