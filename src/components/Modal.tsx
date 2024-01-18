// src/components/Modal.tsx
import React from "react";
import { ModalProps } from "../types/ModalProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal: React.FC<ModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className=' px-4 fixed z-50 inset-0 overflow-hidden grid place-content-center w-screen h-screen'>
      {/* Background overlay */}
      <div
        className='absolute inset-0 bg-black bg-opacity-40 w-full h-full'
        onClick={onClose}></div>

      {/* Modal content */}
      <div className='border border-gray-300 z-10 max-w-4xl mx-auto bg-white rounded-2xl text-left overflow-x-hidden shadow-xl h-[80vh] overflow-y-scroll'>
        <button className='absolute ml-4 mt-4 text-white' onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <img
          className='h-64 object-cover w-full'
          src={post.image}
          alt={post.title}
        />
        <div className='px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
          <h3 className='text-2xl font-bold text-gray-900' id='modal-title'>
            {post.title}
          </h3>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>{post.content}</p>
          </div>
        </div>
        <div className='px-4 py-3 sm:flex sm:flex-row-reverse'>
          <button
            className='text-white button rounded-xl mb-2 bg-blue-500 w-full'
            onClick={onClose}>
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
