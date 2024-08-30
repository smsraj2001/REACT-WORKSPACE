import React from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';
import { Link } from 'react-router-dom';

const Home = () => {
  return (

    <div>
      <h1>Home Page</h1>
      <Link to="/aboutus" >About Us</Link>
      <Link to="contactus" >Contact Us</Link>
      <Link to="/admin" >Admin Page</Link>
      <Link to="/user" >User Page</Link>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="Pictures/home1.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Pictures/home2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="Pictures/home3.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <h2 className="text-center">Presenting you... The definition of novelty...</h2>
      <main className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div
              className="position-relative bg-image rounded-3"
              style={{
                backgroundImage: "url('logo/main1.jpg')",
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="text-center text-white">
                  <h3 className="mb-3">TAKE OFF WITH THE 125 3-VALVE</h3>
                  <h4 className="mb-3">CVTI REVV ENGINE</h4>
                  <Link className="btn btn-outline-light btn-lg" to="/learn-more">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative bg-image rounded-3"
              style={{
                backgroundImage: "url('logo/main2.jpg')",
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="text-center text-white">
                  <h3 className="mb-3">ROADS WITH STEALTH OF THE AGE</h3>
                  <h4 className="mb-3">AIRCRAFT INSPIRED DESIGN</h4>
                  <Link className="btn btn-outline-light btn-lg" to="/learn-more">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="position-relative bg-image rounded-3"
              style={{
                backgroundImage: "url('logo/main3.jpg')",
                height: '400px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className="text-center text-white">
                  <h3 className="mb-3">TVS RACING INSPIRED PERFORMANCE</h3>
                  <h4 className="mb-3">
                    <img src="logo/tvsracing.png" alt="TVS Racing" className="img-fluid" />
                  </h4>
                  <Link className="btn btn-outline-light btn-lg" to="/learn-more">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
