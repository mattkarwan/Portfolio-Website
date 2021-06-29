import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import AboutMePage from './components/AboutMePage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import './style.scss';

// Debounce function for scroll listener
const throttle = (func, delay) => {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    func(...args);
    setTimeout(() => {
      inProgress = false;
    }, delay);
  }
}

function App() {

  const [mobile, setMobile] = useState(window.innerWidth < 1025 ? true : false);

  // Window resize listener to determine user's device size
  useEffect(() => {
    const handleResize = throttle(() => {
      setMobile(window.innerWidth < 1025 ? true : false);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  },[])

  return (
    <div className="App">
      <Navbar mobile={mobile} />
      <HomePage />
      <WorkPage mobile={mobile} />
      <AboutMePage />
      <TestimonialsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
