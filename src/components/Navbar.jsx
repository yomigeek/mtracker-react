import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/dashboard.css';

const Navbar = () => (
  <React.Fragment>
    <div className="topnav">
      <p>M-Tracker - Dashboard</p>

      <Link to="/logout">Logout</Link>
      <Link to="/dashboard">Home</Link>

    </div>
  </React.Fragment>
);

export default Navbar;
