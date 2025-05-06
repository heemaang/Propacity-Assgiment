import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Location from './components/Location';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import EnquireModal from './components/EnquireModal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const contactFormRef = useRef(null); // Step 1: Ref for contact form

  useEffect(() => {
    const timer = setTimeout(() => {
      setModalOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Step 2: Function to scroll to contact form
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar
        onEnquireClick={() => setModalOpen(true)}
        scrollToContactForm={scrollToContactForm} // Step 3: Pass function to Navbar
      />
      <Hero onEnquireClick={() => setModalOpen(true)} />
      <Overview />
      <Location />
      <Amenities />
      <FloorPlans />
      <div ref={contactFormRef}> {/* Step 4: Wrap ContactForm in div with ref */}
        <ContactForm />
      </div>
      <Footer />
      <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;
