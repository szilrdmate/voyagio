import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + ".";
        } else {
          return "";
        }
      });
    }, 400); // Adjust the interval time as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='z-50 top-0 left-0 fixed w-screen h-screen bg-black bg-opacity-40 backdrop-blur-lg flex justify-center items-center'>
      <h2 className='text-5xl text-white font-bold'>Planning Your Trip</h2>
      <p className='w-5 text-5xl text-white font-bold'>{dots}</p>
    </div>
  );
};

export default Loading;
