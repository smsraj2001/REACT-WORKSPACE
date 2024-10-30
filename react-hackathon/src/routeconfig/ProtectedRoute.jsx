import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import Navbar from '../components/Navbar';

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <HeaderComponent />
      <Navbar /> 
      <main className="container mt-4">
        <Outlet /> 
      </main>
      <FooterComponent />
    </div>
  );
};

export default ProtectedRoute;
