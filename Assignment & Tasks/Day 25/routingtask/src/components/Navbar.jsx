import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="logo/tvslogo.jpg" alt="TVS Logo" width="60" height="30" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/products">Our Products</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/services">Our Service</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/investors">Investors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/sustainability">Sustainability</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                <li><a className="dropdown-item" href="https://shop.tvsmotor.com/" target="_blank">Accessories & Merchandise</a></li>
                <li><a className="dropdown-item" href="https://www.advantagetvs.com/PartEcommerceUI/home?Type=Customer" target="_blank">Parts & Lubricants</a></li>
              </ul>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/media">Media</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/international">International</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/cart" aria-current="page">
                <img src="logo/cart-icon.png" alt="Cart" width="40" height="30" />
            </Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/userform" aria-current="page">
              <img src="logo/profile-icon.png" alt="Profile" width="40" height="30" className="me-2" />
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
