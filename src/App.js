import React, { useEffect } from "react";
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
    new WOW().init(); // ✅ WOW.js initializes after component mounts
  }, []);

  return (
    <div>
      <Topbar />
      <Navbar />
      <Carousel />
      <Facts />
      <About />
      <Services />
      <Feature />
      <Project />
      <Team />
    </div>
  );
};

export default App;
