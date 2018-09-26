import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/css/account.css';
import logo from '../assets/images/logo.png';
import Aux from '../hoc/Aux';

const SignUp = (props) => {
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
              Creating your account....please wait!
          </p>
        ) : ''
      }
      <div id="container">
        <form className="form-signup" onSubmit={submitUrl}>
          <p className="category-panel-header"> Create An Account</p>

          <input
            type="text"
            placeholder=" Username "
            id="username"
            onChange={handleInputChange}
            required
          />

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

          <select name="department" id="department" onChange={handleInputChange}>
            <option value=" " id="department">Select Department</option>
            <option value="IT" id="department">IT</option>
            <option value="Finance" id="department">Finance</option>
            <option value="HR" id="department">HR</option>
          </select>

          <div align="center">
            <button
              className="submit-button"
              id="submit"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>

        <p align="center" className="form-footer">
          Already have an account?
          <Link to="/login" className="form-link-color">
            {' '}
            Login
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

SignUp.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitUrl: PropTypes.func,
};

SignUp.defaultProps = {
  submitUrl: '',
  error: '',
};

export default SignUp;
