import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
  } from 'react-icons/fa6';
  
  export default function Footer() {
    return (
      <footer className="bg-[#1a1a1a] text-gray-300 text-sm pt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-white text-2xl font-semibold tracking-widest mb-2">GANGA</h1>
            <p className="text-xs tracking-wider text-gray-400">REALTY</p>
          </div>
  
          <div className="border-t border-gray-700 pt-10 pb-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h3 className="text-white font-semibold underline mb-4">Company</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>Our Story</li>
                <li>Career</li>
                <li>Grow With Us</li>
                <li>Ganga Foundation</li>
                <li>Life At Ganga</li>
              </ul>
            </div>
  
            {/* Insights & News */}
            <div>
              <h3 className="text-white font-semibold underline mb-4">Insights & News</h3>
              <ul className="space-y-2">
                <li>Resources</li>
                <li>Blog</li>
                <li>Media</li>
                <li>Awards</li>
              </ul>
            </div>
  
            {/* Support & Policies */}
            <div>
              <h3 className="text-white font-semibold underline mb-4">Support & Policies</h3>
              <ul className="space-y-2">
                <li>Pay Online</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Refund & Cancellation Policy</li>
              </ul>
            </div>
  
            {/* Reach Us */}
            <div>
              <h3 className="text-white font-semibold mb-4">Reach Us</h3>
              <p className="mb-2">
                Ground Floor, Tower A,<br />
                Vatika Tower, Sector 54,<br />
                Golf Course Road Gurugram,<br />
                Haryana 122011
              </p>
              <p className="mt-4"><span className="font-medium text-white">Phone</span><br />+91-9990084084</p>
              <p className="mt-4"><span className="font-medium text-white">Email</span><br />info@gangarealty.com</p>
            </div>
          </div>
  
          {/* Socials + Certification */}
          <div className="flex flex-col lg:flex-row justify-between items-center border-t border-gray-700 py-6 gap-6">
            <p className="text-center text-gray-500">
              Ganga Global Homes Pvt. Ltd. <br /> Jai Ganga Realtech LLP
            </p>
  
            <div className="flex gap-4 text-white text-lg">
              <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
              <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
              <FaYoutube className="hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
  
          {/* Bottom */}
          <div className="text-center text-gray-500 border-t border-gray-800 py-4 text-xs">
            © Copyright 2025 Ganga Realty. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }
  