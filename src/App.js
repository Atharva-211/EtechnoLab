import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Facts from './components/Facts';
import Industries from './components/Industries';
import About from './components/About';
import Services from './components/Services';
import Feature from './components/Feature';
import Project from './components/Project';
import Appointment from './components/Appointment';
import Team from './components/Team';
import Footer from './components/Footer';
import WOW from 'wow.js'; // Import WOW from wow.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
  useEffect(() => {
    // Initialize WOW.js
    new WOW().init();
  }, []);

  return (
    <div>
      <Navbar />
      <Element name="carousel"><Carousel /></Element>
      <Element name="facts"><Facts /></Element>
      <Element name="about"><About /></Element>
      <Element name="services"><Services /></Element>
      <Element name="feature"><Feature /></Element>
      <Element name="industries"><Industries /></Element>
      <Element name="project"><Project /></Element>
      <Element name="team"><Team /></Element>
      <Element name="appointment"><Appointment /></Element>
      <Footer />
    </div>
  );
};

export default App;