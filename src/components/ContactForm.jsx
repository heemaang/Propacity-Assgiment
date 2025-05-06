import React, { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <h1 className="text-5xl text-center font-serif mb-12">
        <span className="text-gray-500">Enquire</span>{' '}
        <span className="text-black font-medium">Now</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto border border-gray-300 px-8 py-10 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="text-sm mb-2 block text-gray-600">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1.5 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block text-gray-600">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1.5 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block text-gray-600">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1.5 placeholder-gray-400"
            />
          </div>
          <div>
            <label className="text-sm mb-2 block text-gray-600">
              Email Id<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-1.5 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="mt-10">
          <label className="text-sm mb-2 block text-gray-600">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Type your message here"
            className="w-full border-b py-1.5 resize-none placeholder-gray-400"
          ></textarea>
        </div>

        <div className="mt-10 text-center text-sm text-black bg-white border border-gray-300 py-4">
          I'm not a robot (reCAPTCHA Placeholder)
        </div>

        <div className="mt-6 flex items-start gap-3">
          <input
            type="checkbox"
            name="accepted"
            checked={formData.accepted}
            onChange={handleChange}
            className="w-5 h-5 border border-gray-300"
          />
          <label className="text-sm text-gray-700">
            I accept the privacy policy and terms of use
          </label>
        </div>

        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="border border-black px-8 py-2 tracking-wider text-sm hover:bg-black hover:text-white transition-all"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
