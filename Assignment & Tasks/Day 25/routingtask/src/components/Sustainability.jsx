import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const sustainabilityItems = [
  {
    source: "EcoNews",
    date: "10 Aug 2024",
    title: "TVS Motors Launches Green Initiative for Sustainable Manufacturing",
    image: "Pictures/tvsforest.jpg"
  },
  {
    source: "GreenTimes",
    date: "15 Jul 2024",
    title: "TVS Partners with NGOs to Promote Electric Vehicles",
    image: "Pictures/tvsforest.jpg"
  },
  {
    source: "SustainabilityToday",
    date: "22 Jun 2024",
    title: "TVS Motors Achieves Zero-Waste Certification for Manufacturing Plants",
    image: "Pictures/tvsforest.jpg"
  }
];

const Sustainability = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sustainability Initiatives</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Source</th>
            <th>Title</th>
            <th>Source</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {sustainabilityItems.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '400px', height: '100px', objectFit: 'cover' }} // Adjust image size as needed
                />
              </td>
              <td>{item.title}</td>
              <td>{item.source}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Adding hover effect */}
      <style>
        {`
          .table tbody tr:hover {
            background-color: #f1f1f1;
          }

          .table img {
            transition: transform 0.3s ease;
          }

          .table img:hover {
            transform: scale(1.1);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Sustainability;
