import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import ViewInventory from './components/ViewInventory';
import AddVehicle from './components/AddVehicle';
import Logout from './components/Logout';
import ProtectedRoute from './routeconfig/ProtectedRoute'; // Updated import

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, [location]);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
        <Route path="/view-inventory" element={<ViewInventory />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default App;
