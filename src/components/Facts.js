import React from "react";

const Facts = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container pt-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="fact-item text-center bg-light h-100 p-5 pt-0">
              <div className="fact-icon">
                <img src="img/icons/icon-2.png" alt="Icon" />
              </div>
              <h3 className="mb-3">Design Approach</h3>
              <p className="mb-0">
                Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
