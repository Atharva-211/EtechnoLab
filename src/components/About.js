import React from 'react';

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="about-img">
              <img className="img-fluid" src="img/image20.png" alt="" />
              <img className="img-fluid" src="img/image4.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h4 className="section-title">About Us</h4>
            <h1 className="display-5 mb-4">Innovative Tech Solutions to Power Your Vision</h1>
            <p>We’re here to make the impossible possible. Every line of code, every design, built with precision to push the boundaries of what you thought was achievable. It's not just about solving problems; it's about redefining how things are done.</p>
            <p className="mb-4">We don’t just innovate we revolutionize. Challenges are simply opportunities for us to show you what’s next.</p>
            <div className="d-flex align-items-center mb-5">
              <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{ width: "120px", height: "120px" }}>
                <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
              </div>
              <div className="ps-4">
                <h3>Years</h3>
                <h3>Working</h3>
                <h3 className="mb-0">Experience</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;