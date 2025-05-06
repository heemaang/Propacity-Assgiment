import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';

export default function Navbar({ onEnquireClick, scrollToContactForm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-black border-white shadow-md' : 'bg-transparent border-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-24 relative">
        <div className="absolute -top-12 left-0 w-40 h-52 z-50">
          <div className="w-full h-full bg-white clip-polygon flex items-center justify-center shadow-lg">
    <a href="/" className="block">
      <img src={Logo} alt="Swarnim Logo" className="h-24 w-auto cursor-pointer" />
    </a>
  </div>
        </div>

        <div className="w-44"></div>

        <div className="flex gap-12 text-sm font-semibold tracking-wide uppercase">
          {[
            ['#overview', 'Overview'],
            ['#projects', 'Our Projects'],
            ['#location', 'Location'],
            ['#amenities', 'Amenities'],
            ['#floor-plans', 'Floor Plans'],
            ['#brochure', 'Download Brochure'],
          ].map(([href, label]) => {
            const isContactTrigger = label === 'Our Projects' || label === 'Download Brochure';
            return (
              <a
                key={label}
                href={isContactTrigger ? '#contact-form' : href}
                onClick={(e) => {
                  if (isContactTrigger) {
                    e.preventDefault();
                    scrollToContactForm();
                  }
                }}
                className="relative text-white no-underline outline-none focus:outline-none hover:text-white transition duration-200"
              >
                <span className="pb-1 hover-underline">{label}</span>
              </a>
            );
          })}
        </div>

        <button
          onClick={scrollToContactForm}
          className="bg-white text-black px-6 py-2 text-sm font-bold uppercase hover:bg-gray-200 transition outline-none"
        >
          Enquire Now
        </button>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        .clip-polygon {
          clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
        }

        .hover-underline {
          position: relative;
        }

        .hover-underline::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: 0;
          background-color: white;
          transition: width 0.3s ease;
        }

        .hover-underline:hover::after {
          width: 100%;
        }

        a {
          color: white !important;
        }
        a:visited {
          color: white !important;
        }
        a:focus {
          color: white !important;
          outline: none;
        }
        a:hover {
          color: white !important;
        }
      `}</style>
    </nav>
  );
}
