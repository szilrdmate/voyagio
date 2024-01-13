import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/outline";

type GeneralProps = {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const General: React.FC<GeneralProps> = ({ setState }) => {
  return (
    <div className='px-8 py-10'>
      <div className='space-x-2 mb-8'>
        <button
          onClick={() => setState(true)}
          className='rounded-full bg-transparent text-gray-800 border-2 border-gray-800 px-6 py-1 font-semibold text-lg hover:bg-gray-800 hover:text-white duration-150'>
          Overview
        </button>
        <button className='rounded-full bg-gray-800 text-white border-2 border-gray-800 px-6 py-1 font-semibold text-lg'>
          General Information
        </button>
      </div>
      <div className='w-full grid grid-cols-2 grid-rows-3'>
        <div>
          <CreditCardIcon className='h-6 w-6 text-gray-500' />
          <p>{/*currency*/}</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default General;
