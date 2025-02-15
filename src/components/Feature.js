import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Feature = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Section: Why Choose Us */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title">Why Choose Us!</h4>
            <h1 className="display-5 mb-4">
              Why You Should Trust Us? Learn More About Us!
            </h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            {/* Features List */}
            <div className="row g-4">
              {[
                {
                  icon: "img/icons/icon-2.png",
                  title: "Design Approach",
                  text: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
                },
                {
                  icon: "img/icons/icon-3.png",
                  title: "Innovative Solutions",
                  text: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
                },
                {
                  icon: "img/icons/icon-4.png",
                  title: "Project Management",
                  text: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
                },
              ].map((feature, index) => (
                <div className="col-12" key={index}>
                  <div className="d-flex align-items-start">
                    <img className="flex-shrink-0" src={feature.icon} alt="Icon" />
                    <div className="ms-4">
                      <h3>{feature.title}</h3>
                      <p className="mb-0">{feature.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Feature Images */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-img">
              <img className="img-fluid" src="img/about-2.jpg" alt="Feature 1" />
              <img className="img-fluid" src="img/about-1.jpg" alt="Feature 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
