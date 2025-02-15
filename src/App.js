import React, { useEffect } from "react";
import { Element } from "react-scroll"; // Import Element for smooth scrolling
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Carousel from "./components/Carousel";
import Feature from "./components/Feature";
import Facts from "./components/Facts";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Team from "./components/Team";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WOW from "wow.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });
    
    fadeElements.forEach(element => observer.observe(element));
  }, []);
  
  return (
    <div>
      <Topbar />
      <Navbar />

      {/* Wrap sections with Element for smooth scrolling */}
      <Element name="carousel"><Carousel /></Element>
      <Element name="facts"><Facts /></Element>
      <Element name="about"><About /></Element>
      <Element name="services"><Services /></Element>
      <Element name="feature"><Feature /></Element>
      <Element name="project"><Project /></Element>
      <Element name="team"><Team /></Element>
    </div>
  );
};

export default App;
