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
  { icon: "img/icons/i1.png", name: "Healthcare" },
  { icon: "img/icons/i2.png", name: "Education" },
  { icon: "img/icons/i3.png", name: "E-commerce" },
  { icon: "img/icons/i4.png", name: "Social Media" },
  { icon: "img/icons/i5.png", name: "Retail" },
  { icon: "img/icons/i6.png", name: "Manufacturing" },
  { icon: "img/icons/i7.png", name: "Airways" },
  { icon: "img/icons/i8.png", name: "Help Desk" },
  { icon: "img/icons/i9.png", name: "Construction" },
  { icon: "img/icons/i10.png", name: "Logistics" },
  { icon: "img/icons/i11.png", name: "Media" },
  { icon: "img/icons/i12.png", name: "Healthcare" },
];

export default Industries;
