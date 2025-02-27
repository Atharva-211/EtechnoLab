import React from 'react';

const Home = () => {
  return (
    <div className="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="owl-home header-home position-relative">

          <img className="img-fluid" src="img/image.png" alt="" />
          <div className="owl-home-inner">
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-1 text-white animated slideInDown">Software Solutions for Your Business Needs</h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-3">We deliver innovative and reliable software solutions tailored to your business requirements. Our team ensures exceptional quality and performance in every project, from mobile applications to web solutions.</p>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Home;