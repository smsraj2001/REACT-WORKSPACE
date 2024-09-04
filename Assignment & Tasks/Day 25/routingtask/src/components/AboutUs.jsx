import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AboutUs = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <section className="text-center mb-5">
        <div className="bg-info p-4 rounded-3 shadow-sm">
          <h1 className="display-4 mb-3">About Us</h1>
          <p className="lead">
            Discover who we are and what drives us.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="mb-5">
        <div className="container">
          <div className="row">
            {/* Vision Section */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 rounded-3 bg-success text-white h-100 d-flex flex-column justify-content-center align-items-center">
                <h2 className="display-5 mb-3 text-center">Our Vision</h2>
                <p className="lead text-center">
                  To transform the quality of life of people across the world by providing mobility solutions that are exciting, responsible, sustainable, and safe.
                </p>
              </div>
            </div>
            {/* Mission Section */}
            <div className="col-lg-6 mb-4">
              <div className="p-4 rounded-3 bg-warning shadow-sm h-100 d-flex flex-column justify-content-center">
                <h2 className="display-5 mb-3 text-center">Our Mission</h2>
                <div className="d-flex flex-column gap-4">
                  {[
                    "An innovation-driven culture thriving on relentless reflection and teamwork",
                    "Focus on speed and agility to seize opportunities in a Volatile Uncertain Complicated Ambiguous (VUCA) world",
                    "Scalable technology platforms & solutions with the highest quality to delight customers",
                    "Commitment towards a sustainable future for societies and the environment"
                  ].map((item, index) => (
                    <p key={index} className="mb-3">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="text-center mb-5">
        <h2 className="display-4 mb-4">Core Values</h2>
        <div className="row">
          {/* Core Values Cards */}
          {["Trust", "Customer Obsession", "Value Maximization", "Speed & Agility", "Exactness", "Disruptive Mindset"].map((value, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 bg-dark text-white shadow-lg rounded-3">
                <div className="card-body p-4">
                  <h3 className="card-title mb-3">{value}</h3>
                  <p className="card-text">
                    Embracing {value} in every aspect of our work.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <Link to="/" className="btn btn-primary btn-lg shadow-lg">
          Return to Home
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
