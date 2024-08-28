import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import ProtectedRoute from './routeconfig/ProtectedRoute';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* Redirect from the root path to the login page */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </div>
  );
}

export default App;
