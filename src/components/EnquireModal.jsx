import React from 'react';

const EnquiryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white w-full max-w-2xl p-8 rounded shadow-lg">
        {/* Close Button Styled */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 border border-black text-black text-xl font-light flex items-center justify-center hover:bg-gray-100"
        >
          &times;
        </button>

        <h2 className="text-2xl font-serif mb-6 text-center">
          <span className="font-light">Enquire</span>{' '}
          <span className="font-bold">Now</span>
        </h2>

        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-1/2 border-b border-gray-400 outline-none py-2"
              required
            />
            <input
              type="text"
              placeholder="Last Name*"
              className="w-1/2 border-b border-gray-400 outline-none py-2"
              required
            />
          </div>
          <div className="flex gap-4">
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-1/2 border-b border-gray-400 outline-none py-2"
              required
            />
            <input
              type="email"
              placeholder="Email Id*"
              className="w-1/2 border-b border-gray-400 outline-none py-2"
              required
            />
          </div>
          <textarea
            placeholder="Message*"
            className="w-full border-b border-gray-400 outline-none py-2 h-24"
            required
          />
          <div className="flex items-center">
            {/* Dummy reCAPTCHA placeholder */}
            <div className="border p-4 w-full max-w-sm">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>I'm not a robot</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" required />
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
