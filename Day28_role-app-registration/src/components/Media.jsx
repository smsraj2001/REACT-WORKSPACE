import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const mediaItems = [
  {
    source: "kets.Ft",
    date: "08 Mar 2024",
    title: "TVS Motor Company - Now in France",
    image: "Pictures/tvsbg.jpg" 
  },
  {
    source: "EconomicTimes",
    date: "05 Mar 2024",
    title: "TVS Motor champions Children Safety with ‘Protect Little Riders Campaign’",
    image: "Pictures/tvsbg.jpg" 
  },
  {
    source: "TheNews",
    date: "26 Feb 2024",
    title: "TVS HLX Marks a Decade in International Markets; Becomes the Product of Choice of 3.5 Mn Customers",
    image: "Pictures/tvsbg.jpg" 
  },
  {
    source: "AutoCarpro",
    date: "02 Feb 2024",
    title: "TVS showcases R&D and tech prowess at Bharat Mobility Show, PM Modi visits pavilion",
    image: "Pictures/tvsbg.jpg" 
  },
  {
    source: "CnbcTV18",
    date: "20 Jan 2024",
    title: "DAKAR Rally 2024: TVS Racing Factory Racer Harith Noah Creates History; becomes the 1st Indian to win the Rally 2 Class and secure 11th Position Overall",
    image: "Pictures/tvsbg.jpg" 
  }
];

const Media = () => {
    return (
      <div className="container mt-5">
        <h1 className="text-center mb-4">Media Coverage</h1>
        <div className="row">
          {mediaItems.map((item, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="media p-3 shadow-sm bg-white rounded">
                <img
                  src={item.image}
                  className="mr-3 img-fluid rounded"
                  alt={item.title}
                  style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', transition: 'transform 0.3s ease' }} // Ensure image fits nicely
                />
                <div className="media-body">
                  <h5 className="mt-0">{item.title}</h5>
                  <p><strong>{item.source} | {item.date}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Adding hover effect */}
        <style>
          {`
            .media:hover {
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              transform: scale(1.02);
            }
  
            .media img {
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  };
  
  export default Media;