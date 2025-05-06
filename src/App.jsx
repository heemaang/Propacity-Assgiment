import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Location from './components/Location';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
// import EnquireModal from './components/EnquireModal';

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Navbar onEnquireClick={() => setModalOpen(true)} />
      <Hero onEnquireClick={() => setModalOpen(true)} />
      <Overview />
      <Location />
      <Amenities />
      <FloorPlans />
      <ContactForm />
      <Footer />
      {/* <EnquireModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> */}
    </div>
  );
};

export default App;
