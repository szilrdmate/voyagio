import React from "react";

const About: React.FC = () => {
  const about = [
    {
      id: 1,
      title: "Supercharged Travel",
      par: "At VoyageAI, we believe that travel should be a seamless experience, enriched by technology and personalized to your unique tastes. Our AI-driven platform serves as your personal travel assistant, harnessing the power of machine learning to offer bespoke recommendations and itineraries tailored just for you.",
    },
    {
      id: 2,
      title: "Our Vision",
      par: "Travel is more than moving from point A to B; it's about discovering new horizons and creating memories that last a lifetime. We envision a world where technology anticipates your needs, simplifies decision-making, and connects you with experiences that resonate with your passions.",
    },
    {
      id: 3,
      title: "Our Technology",
      par: "VoyageAI's cutting-edge algorithms analyze vast amounts of data to suggest destinations, accommodations, and activities that align with your preferences. Whether you're an adventure-seeker, a culture enthusiast, or in need of a tranquil retreat, our platform curates your journey with precision and care.",
    },
  ];

  return (
    <div className='w-full bg-white px-6 py-16'>
      <h2 className='text-5xl max-w-6xl font-extrabold mb-8 text-gray-800 mx-auto'>
        All About AI Travel
      </h2>
      <div className='max-w-6xl mx-auto grid grid-cols-3 grid-rows-1 gap-8'>
        {about.map((item, index) => (
          <div
            key={index}
            className='px-8 py-10 bg-white border border-gray-300 border-opacity-20 shadow-xl rounded-xl '>
            <h3 className='text-gray-800 mb-2 font-bold text-3xl'>
              {item.title}
            </h3>
            <p className='text-justify text-gray-500 font-medium text-md'>
              {item.par}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
