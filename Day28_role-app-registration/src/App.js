import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/SignIn';
import Admin from './components/Admin';
import User from './components/User';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import UserForm from './components/UserProfile';
import Services from './components/Services';
import Media from './components/Media';
import Sustainability from './components/Sustainability';
import International from './components/International';
import Investors from './components/Investors';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user ? user.role : null; // Get user role from localStorage
  const msg = "Page not accessible... Please sign in to continue"

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  return (
    <div className="App">
      {role && <HeaderComponent />}
      {role && <Navbar role={role} onLogout={handleLogout} />}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={role ? <Home /> : <h1>{msg}</h1>} />
        <Route path="/admin" element={role === "admin" ? <Admin /> : <h1>Only admin can access this page</h1>} />
        <Route path="/user" element={role === "user" ? <User /> : <h1>Only user can access this page</h1>} />
        <Route path="/contactus" element={role ? <ContactUs /> : <h1>{msg}</h1>} />
        <Route path="/aboutus" element={role ? <AboutUs /> : <h1>{msg}</h1>} />
        <Route path="/products" element={role ? <Products /> : <h1>{msg}</h1>} />
        <Route path="/userform" element={role ? <UserForm /> : <h1>{msg}</h1>} />
        <Route path="/cart" element={role ? <Cart /> : <h1>{msg}</h1>} />
        <Route path="/services" element={role ? <Services /> : <h1>{msg}</h1>} />
        <Route path="/media" element={role ? <Media /> : <h1>{msg}</h1>} />
        <Route path="/sustainability" element={role ? <Sustainability /> : <h1>{msg}</h1>} />
        <Route path="/international" element={role ? <International /> : <h1>{msg}</h1>} />
        <Route path="/investors" element={role ? <Investors /> : <h1>{msg}</h1>} />
        <Route path="*" element={role ? <Products /> : <h1>{msg}</h1>} />
      </Routes>
      {role && <FooterComponent />}
    </div>
  );
}

export default App;
