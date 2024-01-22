import { NavLink, Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const DesktopNav = () => {
  const { user, loading } = UserAuth();

  const navLoadClass = loading ? "opacity-0" : "";

  return (
    <div className='text-white w-full fixed box-border py-4 bg-gradient-to-b from-gray-800 to-transaprent'>
      <div className='shadow-2xl w-fit mx-auto flex items-center overflow-hidden rounded-full font-bold text-xl bg-blue-100 border-[1px] border-white border-opacity-20 bg-opacity-20 backdrop-blur-xl'>
        <NavLink className='mr-4' to='/'>
          <img
            src='/logo.svg'
            className='h-[58px] rounded-full'
            alt='Voyagio logo'
          />
        </NavLink>
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
            to='/sign'
            className={`h-[58px] w-[58px] bg-gray-300 ml-4 flex justify-center items-center text-xl duration-300 font-bold rounded-full border-4 border-gray-500 hover:border-blue-500 ${navLoadClass}`}>
            <FontAwesomeIcon className='text-gray-500 ' icon={faUserPlus} />
          </NavLink>
        ) : (
          <NavLink
            to='/account'
            className={` bg-[#264459] duration-300 group hover:bg-blue-500 ml-4 w-fit flex justify-center items-center text-xl font-bold rounded-full border-4 border-[#264459] hover:border-blue-500`}>
            <FontAwesomeIcon
              className=' text-[#fbfcfd] text-5xl'
              icon={faCircleUser}
            />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default DesktopNav;
