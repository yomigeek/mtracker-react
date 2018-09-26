import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../assets/images/logo.png';
import '../assets/css/landing.css';

const Landing = () => (
  <div>
    <div className="topnav-land">
      <p>M-Tracker</p>
      <Link to="/login">Login</Link>

    </div>
    <div className="header-land">
      <p>
        <img src={logo} className="logo-land" alt="" />
      </p>
      <h2>Easy to use Maintenance Application</h2>
      <h3 className="app-description-land">M-Tracker helps reaching out for maintenance easier and smoother</h3>
      <h4>Get started today!</h4>
      <Link to="/signup">
        <button className="create-button-land" type="button">Create A free Account </button>
      </Link>

    </div>
    <Footer />
  </div>
);

export default Landing;
