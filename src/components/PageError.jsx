import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.png';

const PageError = ({ errorMessage }) => (
  <React.Fragment>
    <div className="header">
      <p>
        <img src={logo} className="logo" alt="" />
      </p>
      <h2>404</h2>
      <h3 className="app-description">{errorMessage}</h3>

    </div>
  </React.Fragment>
);

PageError.propTypes = {
  errorMessage: PropTypes.string,
};

PageError.defaultProps = {
  errorMessage: '',
};

export default PageError;
