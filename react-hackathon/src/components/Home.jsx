import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Home = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  }, []);

  return (
    <div>
      <div className="container mt-4">
        <h1>Welcome to Vehicle Inventory</h1>
        <div className="row">
          {vehicles.map(vehicle => (
            <div className="col-md-4 mb-4" key={vehicle.id}>
              <div className="card">
                <img src={vehicle.image} className="card-img-top" alt={vehicle.name} />
                <div className="card-body">
                  <h5 className="card-title">{vehicle.model}</h5>
                  <p className="card-text">Price: {vehicle.price}</p>
                  <p className="card-text">Type: {vehicle.type}</p>

                  <a href={`/view-vehicle/${vehicle.id}`} className="btn btn-primary">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
