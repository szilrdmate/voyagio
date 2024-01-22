import React from "react";
import "../styles/animations.css";

const About: React.FC = () => {
  const about = [
    {
      id: 1,
      title: "Supercharged Travel",
      par: "At Voyagio, we believe that travel should be a seamless experience, enriched by technology and personalized to your unique tastes. Our AI-driven platform serves as your personal travel assistant, harnessing the power of machine learning to offer bespoke recommendations and itineraries tailored just for you.",
      src: "https://pics.clipartpng.com/Airplane_PNG_Clipart-421.png",
    },
    {
      id: 2,
      title: "Example 2",
      par: "At Voyagio, we believe that travel should be a seamless experience, enriched by technology and personalized to your unique tastes. Our AI-driven platform serves as your personal travel assistant, harnessing the power of machine learning to offer bespoke recommendations and itineraries tailored just for you.",
      src: "https://www.shutterstock.com/image-vector/airplane-tickets-boarding-pass-template-600nw-2318539741.jpg",
    },
    {
      id: 3,
      title: "Example 3",
      par: "At Voyagio, we believe that travel should be a seamless experience, enriched by technology and personalized to your unique tastes. Our AI-driven platform serves as your personal travel assistant, harnessing the power of machine learning to offer bespoke recommendations and itineraries tailored just for you.",
      src: "https://www.pngall.com/wp-content/uploads/2/Travel-PNG-Photo.png",
    },
  ];

  return (
    <div className='w-full bg-white px-6 pt-16 pb-40'>
      <h2 className='text-5xl max-w-6xl font-extrabold mb-16 text-gray-800 mx-auto '>
        How to Use Voyagio
      </h2>

      <div className='max-w-6xl mx-auto gap-8'>
        {about.map((item, id) => (
          <div key={id} className='flex justify-between gap-8 mb-8'>
            <div>
              <img src={item.src} />
            </div>
            <div className='px-8 py-10 bg-white border rounded-3xl max-w-xl'>
              <h3 className='text-gray-800 mb-4 font-bold text-4xl'>
                {item.title}
              </h3>
              <p className='text-justify text-gray-500 font-medium text-md leading-7'>
                {item.par}
              </p>
            </div>
          </div>
        ))}
        <div className='bg-blue-300 p-8'>finally</div>
      </div>
    </div>
  );
};

export default About;
