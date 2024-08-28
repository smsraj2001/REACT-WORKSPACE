import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const ProtectedRoute = () => {
    // let auth = {token: true}
    // let auth = localStorage.getItem("user");

    let keyvalue = JSON.parse(localStorage.getItem("user"));
    let auth = {token : keyvalue};

  return (
    <div>
        {
            // ((auth.token === "true") ? <Outlet /> : <Navigate to = '/login' />)
            ((auth.token === true) ? <><HeaderComponent /><Navbar /> <Outlet /><FooterComponent /></>: <Navigate to = '/login' />)
        }
    </div>
  )
}

export default ProtectedRoute