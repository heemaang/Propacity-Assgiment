import React from "react";

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-lg h-[700px] p-8 border border-black rounded">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 text-black text-4xl font-light flex items-center justify-center bg-transparent border-none"
        >
          &times;
        </button>

        <h2 className="text-2xl font-serif mb-6 text-center text-black">
          <span className="font-light">Enquire</span>{" "}
          <span className="font-bold">Now</span>
        </h2>

        <form className="space-y-4 text-black overflow-y-auto h-full">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-1/2 border-b border-black outline-none py-2 bg-white"
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-1/2 border-b border-black outline-none py-2 bg-white"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-1/2 border-b border-black outline-none py-2 bg-white"
              required
            />
            <input
              type="email"
              placeholder="Email Id*"
              className="w-1/2 border-b border-black outline-none py-2 bg-white"
              required
            />
          </div>
          <textarea
            placeholder="Message*"
            className="w-full border-b border-black outline-none py-2 h-24 bg-white"
            required
          />
          <div className="flex items-center">
            {/* Dummy reCAPTCHA placeholder */}
            <div className="border border-black p-4 w-full max-w-sm bg-white">
              <div className="flex items-center">
                <input type="checkbox" className="w-3 h-5 mr-2" />
                <span>I&apos;m not a robot</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-3 h-5" required />
            <label className="text-sm">
              I accept the privacy policy and terms of use
            </label>
          </div>
          <button
            type="submit"
            className="bg-white text-black border border-black px-6 py-2 hover:bg-black hover:text-white transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
