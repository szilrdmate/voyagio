/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { cardItems } from "../data/cardData";

const InfiniteCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef<number | null>(null);

  const slideWidth = 341; // Width of 'Card' component
  const slideWaitTime = 2000; // Time to wait before sliding to the next item

  useEffect(() => {
    const startAutoScroll = () => {
      slideIntervalRef.current = window.setInterval(() => {
        if (containerRef.current) {
          const node = containerRef.current;
          const nextIndex = (currentIndex + 1) % cardItems.length;
          setCurrentIndex(nextIndex);

          let newScrollLeft = slideWidth * nextIndex;
          if (nextIndex === 0) {
            // Reset the scroll position for a seamless loop
            newScrollLeft = 0;
          }

          node.scroll({ left: newScrollLeft, behavior: "smooth" });
        }
      }, slideWaitTime) as unknown as number;
    };

    startAutoScroll();

    const handleMouseEnter = () => {
      if (slideIntervalRef.current !== null) {
        clearInterval(slideIntervalRef.current);
      }
    };
    const handleMouseLeave = startAutoScroll;

    containerRef.current?.addEventListener("mouseenter", handleMouseEnter);
    containerRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (slideIntervalRef.current !== null) {
        clearInterval(slideIntervalRef.current);
      }
      containerRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      containerRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [currentIndex]);

  return (
    <div className='w-full bg-white px-6'>
      <div className='max-w-6xl mx-auto pt-16'>
        <h2 className='text-5xl font-extrabold mb-8 text-gray-800'>
          Featured Locations
        </h2>
        <div
          ref={containerRef}
          className='flex overflow-x-auto snap-x snap-mandatory pb-16 max-w-5xl mx-auto no-scrollbar'>
          {cardItems.map((item, index) => (
            <Card
              key={index} // Since we're not modifying the array, index can be used as a key
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
