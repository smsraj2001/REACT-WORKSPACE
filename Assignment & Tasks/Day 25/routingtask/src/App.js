import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Cart from './components/Cart';
import UserForm from './components/UserForm';
import Services from './components/Services';
import Media from './components/Media';
import Sustainability from './components/Sustainability';
import International from './components/International';
import Investors from './components/Investors';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Default path */}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/international" element={<International />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect all unmatched routes to home */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
