import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Products = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/vehicles')
      .then(response => {
        setVehicles(response.data);
        setFilteredVehicles(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredVehicles(vehicles);
    } else {
      const filtered = vehicles.filter(vehicle => {
        // Ensure category comparison is case-insensitive
        return vehicle.category.toLowerCase() === selectedCategory.toLowerCase();
      });
      setFilteredVehicles(filtered);
    }
  }, [selectedCategory, vehicles]);

  return (
    <div>
      {/* Navbar for vehicle categories */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#!">TVS Motors</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={() => setSelectedCategory('All')}>All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={() => setSelectedCategory('Scooters')}>Scooters</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={() => setSelectedCategory('Motorcycles')}>Motorcycles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={() => setSelectedCategory('Mopeds')}>Mopeds</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={() => setSelectedCategory('Electric')}>Electric</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!" onClick={() => setSelectedCategory('Three Wheelers')}>Three Wheelers</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <h1 className="text-center mb-4">TVS Motors</h1>
        <div className="row">
          {filteredVehicles.map((vehicle, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={vehicle.image}
                  className="card-img-top"
                  alt={vehicle.name}
                  style={{ maxHeight: '200px', objectFit: 'cover' }} // Ensures images fit nicely
                />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.name}</h5>
                  <table className="table">
                    <tbody>
                      {vehicle.engine && (
                        <tr>
                          <td><strong>Engine:</strong></td>
                          <td>{vehicle.engine}</td>
                        </tr>
                      )}
                      {vehicle.power && (
                        <tr>
                          <td><strong>Power:</strong></td>
                          <td>{vehicle.power}</td>
                        </tr>
                      )}
                      {vehicle.weight && (
                        <tr>
                          <td><strong>Weight:</strong></td>
                          <td>{vehicle.weight}</td>
                        </tr>
                      )}
                      {vehicle.price && (
                        <tr>
                          <td><strong>Price:</strong></td>
                          <td>{vehicle.price}</td>
                        </tr>
                      )}
                      {vehicle.category && (
                        <tr>
                          <td><strong>Category:</strong></td>
                          <td>{vehicle.category}</td>
                        </tr>
                      )}
                      {vehicle.range && (
                        <tr>
                          <td><strong>Range:</strong></td>
                          <td>{vehicle.range}</td>
                        </tr>
                      )}
                      {vehicle.batteryCapacity && (
                        <tr>
                          <td><strong>Battery Capacity:</strong></td>
                          <td>{vehicle.batteryCapacity}</td>
                        </tr>
                      )}
                      {vehicle.topSpeed && (
                        <tr>
                          <td><strong>Top Speed:</strong></td>
                          <td>{vehicle.topSpeed}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
