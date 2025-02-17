import React from 'react';

const Feature = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title">Why Choose Us!</h4>
            <h1 className="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
            <p className="mb-4">Here’s why eTechno Solutions stands out because we don’t just meet expectations, we exceed them. Our commitment to innovation, precision, and top-tier customer service sets us apart.</p>
            <div className="row g-4">
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <img className="flex-shrink-0" src="img/icons/icon-2.png" alt="Icon" />
                  <div className="ms-4">
                    <h3>Collaborative Spirit</h3>
                    <p className="mb-0">Talent wins game, but teamwork and intelligence win chamionship</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <img className="flex-shrink-0" src="img/icons/icon-6.png" alt="Icon" />
                  <div className="ms-4">
                    <h3>Expert Thinking</h3>
                    <p className="mb-0">Our expert and experienced team provide the ultimate solution for the client's query.</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <img className="flex-shrink-0" src="img/icons/icon-3.png" alt="Icon" />
                  <div className="ms-4">
                    <h3>Integrity</h3>
                    <p className="mb-0">To give real services to the client, we add something which cannot be bought or measured with money, and that is integrity.</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex align-items-start">
                  <img className="flex-shrink-0" src="img/icons/icon-4.png" alt="Icon" />
                  <div className="ms-4">
                    <h3>Client Serenity</h3>
                    <p className="mb-0">We are doing everything with clarity. Because clarity brings Serenity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="feature-img">
              <img className="img-fluid" src="img/image18.png" alt="" />
              <img className="img-fluid" src="img/image21.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;