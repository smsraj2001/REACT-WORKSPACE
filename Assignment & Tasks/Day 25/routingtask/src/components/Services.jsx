import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Services = () => {
  return (
    <div>
      {/* Carousel Component */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="Pictures/service3.jpg" className="d-block w-100" alt="Service 3" />
          </div>
          <div className="carousel-item active">
            <img src="Pictures/service1.jpg" className="d-block w-100" alt="Service 1" />
          </div>
          <div className="carousel-item">
            <img src="Pictures/service2.jpg" className="d-block w-100" alt="Service 2" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Contact Section */}
      <div className="container-fluid py-5">
        <div className="bg-light p-4 rounded shadow-sm">
          <div className="text-center mb-4">
            <h3>Reach out to us for any service-related complaints or queries</h3>
          </div>
          <div className="text-center">
            <div className="d-flex flex-column align-items-center">
              <span className="mb-2">
                <a href="tel:18002587111" className="text-decoration-none">
                  <img src="logo/call.png" alt="Call Icon" style={{ width: '24px', height: '24px' }} className="me-2" />
                  1800 258 7111
                </a>
              </span>
              <p className="mb-2">OR</p>
              <span>
                <a href="mailto:customercare@tvsmotor.com" className="text-decoration-none">
                  customercare@tvsmotor.com
                </a>
              </span>
            </div>
          </div>
          <p className="text-center mt-4">For further details, please contact your nearest dealer.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
