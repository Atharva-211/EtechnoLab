import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="text-primary m-0">
          <img className="me-3" src="img/icons/icon-1.png" alt="Icon" />Arkitektur
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="carousel" smooth={true} duration={500} className="nav-item nav-link">Carousel</Link>
          <Link to="facts" smooth={true} duration={500} className="nav-item nav-link">Facts</Link>
          <Link to="about" smooth={true} duration={500} className="nav-item nav-link">About</Link>
          <Link to="services" smooth={true} duration={500} className="nav-item nav-link">Services</Link>
          <Link to="feature" smooth={true} duration={500} className="nav-item nav-link">Feature</Link>
          <Link to="project" smooth={true} duration={500} className="nav-item nav-link">Project</Link>
          <Link to="team" smooth={true} duration={500} className="nav-item nav-link">Team</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
