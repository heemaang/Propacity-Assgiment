import React from 'react';
import goldenFloorImage from '../assets/floor1.png';
import goldenFloor2Image from '../assets/floor2.png';

const FloorCard = ({ src }) => {
  return (
    <div className="overflow-hidden w-full max-w-[600px] mx-auto">
      <img
        src={src}
        alt="Golden Floor Plan"
        className="w-full h-auto transform transition-transform duration-500 hover:scale-105 rounded-xl shadow-lg"
      />
    </div>
  );
};

export default function GoldenFloor() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 flex flex-col items-center">
      {/* Left-Aligned Title */}
      <div className="mb-12 self-start pl-6 md:pl-24">
        <h1 className="text-6xl font-serif text-gray-800 leading-tight">
          <span className="block" style={{ color: '#808184' }}>The Gold</span>
          <span className="block text-gray-800">Floor</span>
        </h1>
      </div>

      {/* Centered Grid with Larger Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full justify-items-center">
        <FloorCard src={goldenFloorImage} />
        <FloorCard src={goldenFloor2Image} />
      </div>
    </div>
  );
}
