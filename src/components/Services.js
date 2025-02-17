import React from 'react';

const Services = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h4 className="section-title">Our Services</h4>
          <h1 className="display-5 mb-4">We specialize in delivering cutting-edge software solutions</h1>
        </div>
        <div className="row g-4">
          {/* Service 1 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s2.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i1.png" alt="Icon" />
                <h3 className="mb-3">Web Development</h3>
                <p className="mb-4">Responsive and scalable web application development cutting across the domains and technologies. that are hosted on various cloud infrastructure.</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s1.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i2.png" alt="Icon" />
                <h3 className="mb-3">App Development</h3>
                <p className="mb-4">We develop powerful applications that provide a thrilling experience for your users and bring tangible value to your business. Whether native, hybrid, or cross-platform, our mobile development.</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s3.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i3.png" alt="Icon" />
                <h3 className="mb-3">E-commerce</h3>
                <p className="mb-4">Our experts provide complete online store Solutions to grow your business. We are also proficient in consulting, support & maintenance, feature packed web and mobile friendly eCommerce technologies.</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s4.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i4.png" alt="Icon" />
                <h3 className="mb-3">AWS</h3>
                <p className="mb-4">We are experienced professionals in building web & mobile applications using AWS Services to Scale & Enhance your application.</p>
              </div>
            </div>
          </div>

            {/* Service 1 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s5.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i1.png" alt="Icon" />
                <h3 className="mb-3">Digital Marketing</h3>
                <p className="mb-4">Online advertising allows brands to reach out beyond their existing networks, to tap into new, highly targeted audiences via search, social or display ads.</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s6.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i2.png" alt="Icon" />
                <h3 className="mb-3">IoT Development</h3>
                <p className="mb-4">IoT is transforming businesses across industries worldwide. Learn about Market Trends, Industry Impact, Business Benefits, Implementation Roadmap and why eTechno Lab is ideally positioned to be your IoT Solutions.</p>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s7.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i3.png" alt="Icon" />
                <h3 className="mb-3">DevOps</h3>
                <p className="mb-4">24/7 Dev Ops services that we have been providing to Google and Palo Alto Networks to name just a few.</p>
              </div>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item d-flex position-relative text-center h-100">
              <img className="bg-img" src="img/s8.png" alt="" />
              <div className="service-text p-5">
                <img className="mb-4" src="img/icons/i4.png" alt="Icon" />
                <h3 className="mb-3">Translation</h3>
                <p className="mb-4">We provide complete high-quality translation services using Native professional translators, Quick turnaround with exceptional service.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
