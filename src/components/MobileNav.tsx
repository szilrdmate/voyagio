import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='box-border pt-6 bg-gradient-to-b from-[#00000070] to-transparent'>
      <div className='flex items-center justify-between mx-auto px-4'>
        <NavLink to='/'>
          <img src='/logo.svg' className='w-36' alt='Voyagio logo' />
        </NavLink>
        <button
          className='text-xl font-bold'
          onClick={() => setIsOpen(!isOpen)}>
          <Bars3BottomRightIcon className='h-8 w-8' />
        </button>
      </div>
      {isOpen && (
        <div className='flex flex-col fixed top-0 left-0 w-full h-screen items-center justify-center bg-black space-y-4 bg-opacity-50 backdrop-blur-xl py-3'>
          <button
            className='absolute top-6 right-4'
            onClick={() => setIsOpen(!isOpen)}>
            <XMarkIcon className='h-8 w-8' />
          </button>
          <NavLink
            to='/'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <hr className='w-[80%] opacity-30' />
          <NavLink
            to='/explore'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Explore
          </NavLink>
          <hr className='w-[80%] opacity-30' />
          <NavLink
            to='/destinations'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Destinations
          </NavLink>
          <hr className='w-[80%] opacity-30' />
          <Link
            target='_blank'
            to='https://voyagio.canny.io/feature-requests'
            className='hover:text-blue-400 transition-color duration-150 font-semibold text-2xl'
            onClick={() => setIsOpen(false)}>
            Feedback
          </Link>
          <button className='button w-[80%] bg-teal-500'>
            Try It for Free
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
