import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const Appointment = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setShowSuccess(true);
    reset(); // Reset form
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="appointment-section">
      <div className="appointment-container">
        <div className="appointment-grid">
          {/* Left Section */}
          <div>
            <h4 className="section-title">Appointment</h4>
            <h1 className="main-title">Make An Appointment To Start Your Dream Project</h1>
            <p className="description">
              Welcome to eTechnolab, where innovation meets excellence. We specialize in
              turning your digital dreams into reality with cutting-edge technology solutions.
            </p>
            
            {/* Contact Cards */}
            <div className="contact-card">
              <div className="icon-box">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-info">
                <p>Call Us Now</p>
                <h3>+012 345 6789</h3>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="icon-box">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-info">
                <p>Mail Us Now</p>
                <h3>info@etechnolab.com</h3>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="appointment-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    {...register("name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/,
                        message: "Name should only contain letters"
                      }
                    })}
                  />
                  {errors.name && <div className="error-message">{errors.name.message}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email"
                      }
                    })}
                  />
                  {errors.email && <div className="error-message">{errors.email.message}</div>}
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Mobile"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Please enter a valid 10-digit mobile number"
                      },
                      onChange: (e) => {
                        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      }
                    })}
                  />
                  {errors.mobile && <div className="error-message">{errors.mobile.message}</div>}
                </div>

                <div className="form-group full-width">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Message"
                    {...register("message", {
                      required: "Message is required"
                    })}
                  ></textarea>
                  {errors.message && <div className="error-message">{errors.message.message}</div>}
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="submit-btn">
                    Book Appointment
                  </button>
                </div>
              </div>
            </form>

            {showSuccess && (
              <div className="success-message show">
                Thank you! Your appointment has been booked successfully.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;