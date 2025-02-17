import React from 'react';

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          {/* About Us */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">About Us</h5>
            <p>
              eTechno Lab takes an agile, collaborative approach to creating customized solutions 
              across the digital value chain through our solutions, services, and people.
            </p>
          </div>

          {/* Address Details */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Address</h5>
            <p><strong>Office:</strong><br />
              F.No. 105, 1st Floor, Swami Krupa, B Wing, Anand Vihar, Colony No-1,<br />
              Sinhgad Road, Pune, Maharashtra (India)
            </p>
            <p><strong>Interview Address:</strong><br />
              471, 2nd Floor, Joshi Building, Near Lokhande Talim,<br />
              Narayan Peth, Pune, Maharashtra (India)
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">eTechno Lab</h5>
            <a className="btn btn-link text-white-50" href="#">Home</a>
            <a className="btn btn-link text-white-50" href="#">Company</a>
            <a className="btn btn-link text-white-50" href="#">Services</a>
            <a className="btn btn-link text-white-50" href="#">Blogs</a>
          </div>
        </div>

        <div className="row g-5 mt-4">
          {/* Social Media */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Connect with us</h5>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
