import React from "react";
import overviewImage from "../assets/overview.webp"; // replace with actual path

const OverviewPage = () => {
  return (
    <div id="overview" className="bg-[#3c394b] text-white min-h-screen px-4 md:px-20 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h4 className="text-m tracking-widest uppercase text-gray-300 mb-2">
            Overview
          </h4>
          <h1 className="text-4xl md:text-7xl font-serif font-semibold mb-6 leading-tight">
            The Golden <br /> Life
          </h1>
          <p className="text-gray-300 leading-relaxed text-xl">
            You promise yourself and your loved ones brighter opportunities, a
            prospering tomorrow, and a purer life. Our promise is delivering
            spaces that help you fulfill yours. A high-street retail project in
            the heart of an auspicious region, Swarnim is a landmark. And, a
            worthy investment for the far-sighted. When you own your part of
            Swarnim, you own more than just{" "}
            <strong>affordable commercial shops in Gurgaon</strong>; you own a
            pure asset, a bright opportunity. It is your step toward the golden
            life.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-[536px] h-[560px] overflow-hidden rounded-xl shadow-xl">
          <img
            src={overviewImage}
            alt="Swarnim Building"
            className="w-full h-full transform transition-transform duration-500 hover:scale-105 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
