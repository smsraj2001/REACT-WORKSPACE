import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/home">TVS MOTORS</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link btn btn-primary text-white mx-2" to="/view-inventory">View Inventory</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-info text-white mx-2" to="/add-vehicle">Add Vehicle</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-danger text-white mx-2" to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
