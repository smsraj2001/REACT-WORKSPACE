import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Button, Table, Alert } from 'react-bootstrap'; 

const ViewInventory = () => {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/vehicles');
        setVehicles(response.data);
      } catch (error) {
        setError('Error fetching vehicles.');
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const handleRequest = () => {
    navigate('/home');
  };

  const deleteVehicle = async (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      try {
        await axios.delete(`http://localhost:5000/vehicles/${id}`);
        setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
      } catch (error) {
        setError('Error deleting vehicle.');
        console.error('Error deleting vehicle:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Vehicle Inventory</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Model Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.modelName}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => deleteVehicle(vehicle.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button
        className="mt-3"
        variant="info"
        onClick={handleRequest}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default ViewInventory;
