import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='text-center'>
          <p className='text-sm font-semibold'>
            © {new Date().getFullYear()} Voyagio AI. All rights reserved.
          </p>
          <div className='flex justify-center mt-4 space-x-6'>
            <a href='#' className='text-gray-400 hover:text-gray-300'>
              Privacy Policy
            </a>
            <span className='text-gray-500'>|</span>
            <a href='#' className='text-gray-400 hover:text-gray-300'>
              Terms of Service
            </a>
            <span className='text-gray-500'>|</span>
            <a href='#' className='text-gray-400 hover:text-gray-300'>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
