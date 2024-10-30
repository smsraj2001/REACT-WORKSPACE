import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
  const [modelName, setModelName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newVehicle = { modelName, type, price: parseFloat(price) };

    try {
      // Post the new vehicle to the JSON server
      await axios.post('http://localhost:5000/vehicles', newVehicle);
      // Redirect to the view inventory page after adding the vehicle
      navigate('/view-inventory');
    } catch (error) {
      console.error('Error adding vehicle:', error);
    }
  };

  const handleRequest = () => {
    navigate('/home');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="card-title mb-4">Add New Vehicle</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="modelName">Model Name</label>
                  <input
                    type="text"
                    id="modelName"
                    className="form-control"
                    value={modelName}
                    onChange={(e) => setModelName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="type">Type</label>
                  <select
                    id="type"
                    className="form-select"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Bike">Bike</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Auto">Auto</option>
                    <option value="E-Scooter">E-Scooter</option>
                    <option value="Moped">Moped</option>
                  </select>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary me-2">
                  Add Vehicle
                </button>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={handleRequest}
                >
                  Back to Home
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
