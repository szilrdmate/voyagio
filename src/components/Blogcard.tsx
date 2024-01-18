// src/components/Blogcard.tsx
import React from "react";
import { BlogCardProps } from "../types/BlogCardProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const trimStringToCharLimit = (
    inputString: string,
    limit: number
  ): string => {
    if (inputString.length > limit) {
      return inputString.substring(0, limit) + "..."; // Return the string trimmed to 'limit' characters and append an ellipsis
    }
    return inputString; // Return the original string if it's within the limit
  };

  return (
    <div
      onClick={onClick}
      className='cursor-pointer h-[470px] rounded-3xl overflow-hidden shadow-lg bg-white  border-gray-300'>
      <img
        className='w-full h-64 object-cover'
        src={post.image}
        alt={post.title}
      />
      <div className='px-6 py-4'>
        <div className='flex space-x-2 mb-2'>
          {post.tags.map((item, index) => (
            <div
              key={index}
              className='text-sm w-fit font-medium text-white bg-gray-800 rounded-full px-4 py-1'>
              {item}
            </div>
          ))}
        </div>
        <div className='font-bold text-xl mb-2'>{post.title}</div>

        <p className='mb-2 text-gray-500 text-base text-justify '>
          {trimStringToCharLimit(post.preview, 100)}
        </p>
      </div>
      <button
        className='-translate-y-20 hover:-translate-y-24 transition-transform duration-300 font-bold text-gray-600 hover:text-gray-800 py-8 relative bottom-0 rounded-xl bg-gradient-to-t from-white via-[#ffffff98] to-transparent w-full'
        onClick={onClick}>
        <span className=' mx-auto duration-150 px-2 py-1 rounded-full w-fit flex flex-col'>
          <FontAwesomeIcon icon={faChevronUp} />
          Read More
        </span>
      </button>
    </div>
  );
};

export default BlogCard;
