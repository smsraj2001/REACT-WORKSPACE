import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  let logout = () => {
    localStorage.setItem("user", false);
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="logo/tvslogo.jpg" alt="TVS Logo" width="60" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link border rounded px-3 mx-1" aria-current="page" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active border rounded px-3 mx-1" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link border rounded px-3 mx-1" aria-current="page" to="/products">Our Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link border rounded px-3 mx-1" aria-current="page" to="/contactus">Contact Us</Link>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="btn btn-danger border rounded px-3 mx-1">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
