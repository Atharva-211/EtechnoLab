import React from 'react';

const Industries = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container pt-5">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "800px" }}>
          <h4 className="section-title">Industries We Serve</h4>
          <h1 className="display-5 mb-4">Our expertise and technology solutions help industry verticals to improve return on investment and become more efficient.</h1>
        </div>
        <div className="row g-4">
          {industries.map((industry, index) => (
            <div className="col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
              <div className="Industrie-item text-center bg-light h-100 p-4">
                <div className="Industrie-icon">
                  <img src={industry.icon} alt={industry.name} />
                </div>
                <h3 className="mb-3">{industry.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const industries = [
  { icon: "img/i1.png", name: "Healthcare" },
  { icon: "img/i2.png", name: "Education" },
  { icon: "img/i3.png", name: "E-commerce" },
  { icon: "img/i4.png", name: "Social Media" },
  { icon: "img/i5.png", name: "Retail" },
  { icon: "img/i6.png", name: "Manufacturing" },
  { icon: "img/i7.png", name: "Airways" },
  { icon: "img/i8.png", name: "Help Desk" },
  { icon: "img/i9.png", name: "Construction" },
  { icon: "img/i10.png", name: "Logistics" },
  { icon: "img/i11.png", name: "Media" },
];

export default Industries;
