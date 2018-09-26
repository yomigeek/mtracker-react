import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Page404 = () => (
  <div>
    <div className="topnav">
      <p>M-Tracker</p>
      <Link to="/">Home</Link>

    </div>
    <div className="header">
      <p>
        <img src="./assets/images/logo.png" className="logo" alt="" />
      </p>
      <h2>404</h2>
      <h3 className="app-description">Page Not Found</h3>

    </div>
    <Footer />
  </div>
);

export default Page404;
