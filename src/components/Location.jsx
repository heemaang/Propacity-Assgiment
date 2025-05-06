import React from "react";
import mapImage from "../assets/location.webp"; // Replace with actual map image

const LocationPage = () => {
  return (
    <div className="bg-white text-gray-800 px-8 md:px-24 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Left Text Section */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-4xl uppercase tracking-widest text-gray-400 border-l-4 border-gray-300 pl-4">
            The Golden
          </h2>
          <h1 className="text-6xl font-serif font-semibold">Location</h1>

          <p className="text-gray-600 leading-relaxed mt-4 text-xl">
            Swarnim’s position in <strong>Sector 5, Gurgaon</strong>, one of the
            city’s most promising sub-cities, makes it an irresistible choice
            for those looking to invest in{" "}
            <strong>commercial retail space in Gurgaon</strong>.
          </p>

          {/* Icon Points */}
          <div className="space-y-6 mt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-xl">👨‍👩‍👧‍👦</span>
              </div>
              <p className="text-xl">
                Located in a bustling community of 25,000 families
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-xl">🪑</span>
              </div>
              <p className="text-xl">
                Proximity and easy access to Gurugram’s city center and Delhi
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-xl">🛣️</span>
              </div>
              <p className="text-xl">Well-connected to all major roads</p>
            </div>
          </div>

          {/* Footer Paragraph */}
          <p className="mt-8 text-gray-600 leading-relaxed text-xl">
            Swarnim is a dream come true for investors looking for{" "}
            <strong>retail space in Gurgaon</strong> because here every
            opportunity is golden. Swarnim offers thoughtfully designed shops
            that promise high growth potential. <br /> <br />
            Welcome to a space where golden opportunities await.
          </p>
        </div>

        {/* Map Image with Zoom Effect */}
        <div className="md:w-1/2 flex justify-center items-center px-4">
          <div className="rounded-xl overflow-hidden shadow-lg h-[700px] w-full max-w-[600px]">
            <img
              src={mapImage}
              alt="Swarnim Location Map"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
     {/* Timeline */}
<div className="mt-20 pl-6 md:pl-20 relative overflow-x-auto">
  {/* Connecting yellow line (runs behind the dots) */}
  <div className="absolute top-6 left-0 right-0 h-0.5 bg-yellow-500 z-0"></div>

  <div className="relative flex gap-12 justify-start items-start pt-8">
    {[
      ["Delhi Mumbai Industrial Corridor", "5 minutes"],
      ["IGI Airport", "30 minutes"],
      ["G.D. Goenka School", "5 minutes"],
      ["K.R. Mangalam University", "5 minutes"],
      ["Medanta - The Medicity", "15 minutes"],
      ["Proposed Metro", "10 minutes"],
      ["Gurugram Railway Station", "20 minutes"],
    ].map(([label, time], index) => (
      <div
        key={index}
        className="relative flex flex-col items-center w-[160px] text-center z-10"
      >
        {/* Dot */}
        <div className="w-4 h-4 bg-yellow-600 rounded-full z-10 relative"></div>

        {/* Content */}
        <div className="mt-4">
          <p className="font-medium text-gray-700">{label}</p>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default LocationPage;
