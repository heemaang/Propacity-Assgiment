import React, { useState } from "react";

// ✅ Correct way to import images in Vite
import img1 from "../assets/aminities1.png";
import img2 from "../assets/aminities2.png";
import img3 from "../assets/aminties3.png"; // Double-check spelling
import img4 from "../assets/aminities4.png";
import img5 from "../assets/aminities5.png";
import img6 from "../assets/aminities6.png";

const amenities = [
  { image: img1, title: "The Golden Ecosystem" },
  { image: img2, title: "The Golden Landmark" },
  { image: img3, title: "The Golden Drive" },
  { image: img4, title: "The Golden Address" },
  { image: img5, title: "The Golden Choice" },
  { image: img6, title: "The Golden Destination" },
];

const AmenitiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (isTransitioning) return;
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
        if (e.deltaY > 0) nextImage();
      }}
    >
      <div
        className="flex flex-col"
        style={{
          transform: `translateY(-${currentIndex * 100}vh)`,
          transition: "transform 1.5s ease-in-out",
        }}
        onTransitionEnd={resetTransition}
      >
        {amenities.map((item, index) => (
          <div
            key={index}
            className="w-full relative bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.image})`,
              minHeight: "100vh",
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
