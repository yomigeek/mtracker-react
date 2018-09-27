import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/css/account.css';
import logo from '../assets/images/logo.png';
import Aux from '../hoc/Aux';

const Login = (props) => {
  const {
    error, handleInputChange, submitUrl, loading,
  } = props;
  return (
    <Aux>
      <p align="center">
        <img src={logo} alt="" className="logo" />
      </p>
      <p className="app-name">M-Tracker</p>
      {error ? (<p className="error">{error}</p>) : ''}
      {loading
        ? (
          <p className="working-msg" id="signup-process">
              Checking Credentials and Connecting!
          </p>
        ) : ''
      }
      <div id="container">
        <form className="post-form" onSubmit={submitUrl}>
          <p className="category-panel-header">Login to your Account</p>
          <input
            type="email"
            placeholder=" Email "
            id="email"
            onChange={handleInputChange}
            required
          />

          <input
            type="password"
            placeholder=" Password "
            id="password"
            onChange={handleInputChange}
            required
          />
          <div align="center">
            <button
              className="submit-button"
              id="submit"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        <p align="center" className="form-footer">
          Don
          {"'"}
          t have account yet?
          <Link to="/signup" className="form-link-color">
            {' '}
            SignUp
          </Link>
        </p>
        <p align="center" className="form-footer">
          <Link to="/" className="form-link-color">
            Home
          </Link>
        </p>
      </div>
    </Aux>
  );
};

Login.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitUrl: PropTypes.func,
};

Login.defaultProps = {
  submitUrl: '',
  error: '',
};

export default Login;
