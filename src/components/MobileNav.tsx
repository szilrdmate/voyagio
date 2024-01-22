import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { UserAuth } from "../context/AuthContext";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = UserAuth();
  const location = useLocation();
  const path =
    location.pathname == "/signin" || location.pathname == "/signup"
      ? "hidden"
      : "";

  const pathBg = location.pathname == "/planner" ? "bg-gray-800" : "";

  return (
    <div
      className={`py-6 bg-gradient-to-b from-[#00000060] to-transparent ${pathBg}`}>
      <div className='flex items-center justify-between mx-auto px-4'>
        <NavLink to='/'>
          <img src='/logo.svg' className='w-10' alt='Voyagio logo' />
        </NavLink>
        <button
          className='text-xl font-bold'
          onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon className='text-white text-3xl' icon={faBars} />
        </button>
      </div>
      {isOpen && (
        <div className='flex flex-col fixed top-0 left-0 w-full h-screen items-center justify-center bg-black space-y-4 bg-opacity-50 backdrop-blur-xl py-3 text-white'>
          <button
            className='absolute top-6 right-4'
            onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon className='text-white text-3xl' icon={faX} />
          </button>
          <NavLink
            to='/'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <hr className='w-[80%] opacity-30' />
          <NavLink
            to='/planner'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Plan A Trip
          </NavLink>
          <hr className='w-[80%] opacity-30' />
          <NavLink
            to='/blog'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Blog
          </NavLink>
          <hr className='w-[80%] opacity-30' />
          <Link
            target='_blank'
            to='https://voyagio.canny.io/feature-requests'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Feedback
          </Link>
          {user ? (
            <>
              <hr className='w-[80%] opacity-30' />
              <NavLink
                to='/account'
                className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
                onClick={() => setIsOpen(false)}>
                Account
              </NavLink>
            </>
          ) : (
            <NavLink
              to='/signin'
              onClick={() => setIsOpen(false)}
              className={`text-2xl button text-center font-bold w-[80%] bg-teal-500 ${path}`}>
              Sign In
            </NavLink>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
