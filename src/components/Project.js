import React, { useState } from 'react';

const Project = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // State to manage active tab

  return (
    <div className="container-xxl project py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">Our Projects</h4>
          <h1 className="display-5 mb-4">Visit Our Latest Projects And Our Innovative Works</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
              <button
                className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab1' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab1')}
              >
                <h3 className="m-0">01. Typing Speed Tester</h3>
              </button>
              <button
                className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab2' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab2')}
              >
                <h3 className="m-0">02. CineMatch</h3>
              </button>
              <button
                className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab3' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab3')}
              >
                <h3 className="m-0">03. Notes Taking App</h3>
              </button>
              <button
                className={`nav-link w-100 d-flex align-items-center text-start p-4 mb-4 ${activeTab === 'tab4' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab4')}
              >
                <h3 className="m-0">04. GitHub</h3>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              {activeTab === 'tab1' && (
                <div className="tab-pane fade show active">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/p1.png" style={{ objectFit: "cover" }} alt="Typing Speed Test" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">Typing Speed Tester</h1>
                      <p className="mb-4">A React-based web application for testing and improving typing speed. It offers customizable difficulty levels, timed sessions, and real-time feedback to enhance typing accuracy and performance.</p>
                      <a href="https://github.com/Atharva-211/typing_speed_test" className="btn btn-primary py-3 px-5 mt-3">View Project</a>
                      <br />
                      <a href="https://atharva-211.github.io/typing_speed_test/" className="btn btn-secondary py-3 px-5 mt-3">Live Demo</a>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'tab2' && (
                <div className="tab-pane fade show active">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/p2.png" style={{ objectFit: "cover" }} alt="CineMatch" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">CineMatch</h1>
                      <p className="mb-4">An AI-powered content-based movie recommendation system that uses NLP and machine learning to generate personalized movie suggestions. Deployed on Streamlit for easy access and interaction.</p>
                      <a href="https://github.com/Atharva-211/CineMatch" className="btn btn-primary py-3 px-5 mt-3">View Project</a>
                      <br />
                      <a href="https://atharva-211-movies-recommendation-movies-feapp-zxdti5.streamlit.app/" className="btn btn-secondary py-3 px-5 mt-3">Live Demo</a>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'tab3' && (
                <div className="tab-pane fade show active">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/p3.png" style={{ objectFit: "cover" }} alt="Notes Taking App" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">Notes Taking App</h1>
                      <p className="mb-4">A minimalistic React-based note-taking app with integrated 3D models for enhanced visualization, helping users organize their thoughts and ideas effortlessly.</p>
                      <a href="https://github.com/Atharva-211/Notes_taking_App" className="btn btn-primary py-3 px-5 mt-3">View Project</a>
                      <br />
                      <a href="https://atharva-211.github.io/Notes_taking_App/" className="btn btn-secondary py-3 px-5 mt-3">Live Demo</a>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'tab4' && (
                <div className="tab-pane fade show active">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/p4.png" style={{ objectFit: "cover" }} alt="Notes Taking App" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">Explore More Projects</h1>
                      <p className="mb-4">Check out my GitHub profile for more innovative projects and contributions.</p>
                      <a href="https://github.com/Atharva-211/" className="btn btn-primary py-3 px-5 mt-3">View Project</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
