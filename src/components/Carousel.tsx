import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { cardItems } from "../data/carddata";

const InfiniteCarousel: React.FC = () => {
  const [items, setItems] = useState(cardItems);
  const containerRef = useRef(null);

  useEffect(() => {
    // Infinite scroll logic
    // Duplicate items to simulate infinite scroll
    setItems((prevItems) => [...prevItems, ...prevItems]);

    // Auto-scroll logic
    let scrollInterval;
    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (containerRef && containerRef.current) {
          containerRef.current.scrollLeft += 2;
        }
      }, 20);
    };

    if (containerRef && containerRef.current) {
      startAutoScroll();

      // Pause on hover
      const handleMouseEnter = () => clearInterval(scrollInterval);
      const handleMouseLeave = () => startAutoScroll();

      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        clearInterval(scrollInterval);
        if (containerRef && containerRef.current) {
          containerRef.current.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );
          containerRef.current.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        }
      };
    }
  }, []);

  return (
    <div className='w-full bg-white px-6'>
      <div className='max-w-6xl mx-auto pt-16'>
        <h2 className='text-5xl font-extrabold mb-8 text-gray-800'>
          Featured Locations
        </h2>
        <div
          ref={containerRef}
          className='flex overflow-x-auto snap-x snap-mandatory pb-16 max-w-5xl mx-auto no-scrollbar'>
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
