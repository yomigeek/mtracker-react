import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../assets/images/logo.png';

const Landing = () => (
  <div>
    <div className="topnav">
      <p>M-Tracker</p>
      <Link to="/login">Login</Link>

    </div>
    <div className="header">
      <p>
        <img src={logo} className="logo" alt="" />
      </p>
      <h2>Easy to use Maintenance Application</h2>
      <h3 className="app-description">M-Tracker helps reaching out for maintenance easier and smoother</h3>
      <h4>Get started today!</h4>
      <a href="signup.html">
        <button className="create-button" type="button">Create A free Account </button>
      </a>

    </div>
    <Footer />
  </div>
);

export default Landing;
