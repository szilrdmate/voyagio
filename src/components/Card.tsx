import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className='inline-block w-1/3 mx-2 rounded-lg overflow-hidden shadow-lg bg-white min-w-[325px] hover:scale-[1.02] duration-300 hover:cursor-pointer border-[1px] border-gray-300 border-opacity-40'>
      <img src={imageUrl} alt={title} className='w-full h-40 object-cover' />
      <div className='p-4'>
        <h3 className='font-bold mb-2 text-gray-800'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
