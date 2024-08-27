import React from 'react';

const International = () => {
  return (
    <div className="container mt-5 bg-light py-5 rounded shadow-sm" style={{ backgroundImage: 'url(Pictures/international.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-center mb-4 text-white">Our Global Outreach</h1>
      <p className="lead text-center text-white mb-5">
        TVS Motors has established a strong global presence, reaching customers across various continents with its diverse range of products and innovative technologies.
      </p>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3>Global Reach</h3>
            <p>
              With a presence in over 60 countries, TVS Motors has built a reputation for delivering high-quality, reliable, and innovative mobility solutions. Our international operations span across Asia, Africa, the Middle East, Latin America, and Europe, making us a trusted brand worldwide.
            </p>
            <p>
              Our global footprint is supported by a robust network of dealerships, service centers, and distributors, ensuring that our customers receive exceptional service and support no matter where they are located.
            </p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3>International Achievements</h3>
            <ul>
              <li>Ranked among the top two-wheeler manufacturers in India and a leading exporter of two-wheelers worldwide.</li>
              <li>Received the prestigious Global Green Manufacturing Award for our commitment to sustainable practices.</li>
              <li>Launched the TVS Apache series in Europe, receiving accolades for its performance and design.</li>
              <li>Expanded operations into new markets, including the introduction of electric vehicles in multiple international regions.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3>Upcoming International Projects</h3>
            <p>
              TVS Motors is excited about several upcoming international projects that will further solidify our global presence. These projects include new product launches, strategic partnerships, and expansions into emerging markets. We are committed to innovation and excellence as we continue to grow our international operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default International;
