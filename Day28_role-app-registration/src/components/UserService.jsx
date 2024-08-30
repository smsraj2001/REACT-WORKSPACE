import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserService = () => {
    useEffect(() => {
        axios.get('http://localhost:5000/Users')
          .then(response => {
            setVehicles(response.data);
            setFilteredVehicles(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div>UserService</div>
  )
}

export default UserService