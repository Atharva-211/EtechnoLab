import React from 'react';

const Team = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">Team Members</h4>
          <h1 className="display-5 mb-4">We Are a Passionate and Innovative Tech Team, Building the Future of Digital Solutions.</h1>
        </div>
        <div className="row g-0 team-items">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/t1.png" alt="" />
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Member</h3>
                <span className="text-primary">CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/t2.png" alt="" />
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Member</h3>
                <span className="text-primary">Cybersecurity</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/t3.png" alt="" />
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Member</h3>
                <span className="text-primary">UI/UX Designer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative">
              <div className="position-relative">
                <img className="img-fluid" src="img/t4.png" alt="" />
              </div>
              <div className="bg-light text-center p-4">
                <h3 className="mt-2">Member</h3>
                <span className="text-primary">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;