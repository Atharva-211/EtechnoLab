import React from 'react';

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">Our Services</h4>
          <h1 className="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/service-1.jpg" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                <h3 className="mb-3">Architecture</h3>
                <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;