import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="text-primary m-0">
          <div className="logo-wrapper">
            <img 
              src="img/image30.png" 
              alt="Logo" 
              className="logo-img me-3" 
              style={{ width: "200px", height: "auto" }} 
            />
          </div>
        </h1>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="carousel" smooth={true} duration={500} className="nav-item nav-link">Home</Link>
          <Link to="about" smooth={true} duration={500} className="nav-item nav-link">About</Link>
          <Link to="services" smooth={true} duration={500} className="nav-item nav-link">Services</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu border-0 m-0">
              <Link to="feature" smooth={true} duration={500} className="dropdown-item">Our Features</Link>
              <Link to="project" smooth={true} duration={500} className="dropdown-item">Our Projects</Link>
              <Link to="team" smooth={true} duration={500} className="dropdown-item">Team Members</Link>
              <Link to="facts" smooth={true} duration={500} className="dropdown-item">Facts</Link>
              <Link to="industries" smooth={true} duration={500} className="dropdown-item">Industries</Link>
            </div>
          </div>
          <Link to="appointment" smooth={true} duration={500} className="nav-item nav-link">Appointment</Link>
          <Link to="footer" smooth={true} duration={500} className="nav-item nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
