import React, { useState } from "react";

const amenities = [
  {
    image: "src/assets/aminities1.png",
    title: "The Golden Ecosystem",
  },
  {
    image: "src/assets/aminities2.png",
    title: "The Golden Landmark",
  },
  {
    image: "src/assets/aminties3.png",
    title: "The Golden Drive",
  },
  {
    image: "src/assets/aminities4.png",
    title: "The Golden Address",
  },
  {
    image: "src/assets/aminities5.png",
    title: "The Golden Choice",
  },
  {
    image: "src/assets/aminities6.png",
    title: "The Golden Destination",
  },
];

const AmenitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle scroll
  const nextImage = () => {
    if (isTransitioning) return; // Prevent multiple transitions at once

    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % amenities.length);
  };

  const resetTransition = () => {
    setIsTransitioning(false);
  };

  return (
    <div
      id="amenities"
      className="h-screen overflow-hidden relative"
      onWheel={(e) => {
        if (e.deltaY > 0) nextImage(); // Scroll down to next image
      }}
    >
      <div
        className="flex flex-col"
        style={{
          transform: `translateY(-${currentIndex * 100}vh)`, // Move images up based on index
          transition: "transform 1.5s ease-in-out", // Slower transition for smooth scrolling
        }}
        onTransitionEnd={resetTransition} // Reset transition state after animation ends
      >
        {amenities.map((item, index) => (
          <div
            key={index}
            className="w-full relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.image})`,
              minHeight: "100vh", // Ensure each image takes full screen height
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-white text-4xl md:text-5xl font-serif mb-4">
                {item.title}
              </h2>
              <button className="mt-6 px-8 py-3 border text-white border-white hover:bg-white hover:text-black transition text-lg">
                DISCOVER ME NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSection;