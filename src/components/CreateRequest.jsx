import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loader from '../assets/images/loader.gif';
import pageLogo from '../assets/images/details.png';
import backIcon from '../assets/images/back_icon.png';
import '../assets/css/dashboard.css';
import Aux from '../hoc/Aux';

const CreateRequest = (props) => {
  const {
    error, handleInputChange, submitUrl, loading, message,
  } = props;
  return (
    <Aux>
      <p align="center">
        <img src={pageLogo} alt="" className="logo" />
      </p>
      <h4 className="resolved-request-header">
            Create-A-Request
      </h4>
      <p className="form-footer">

        <Link to="/dashboard" className="form-link-color">
          <img src={backIcon} className="menu-icon" alt="" />
          {' '}
          BACK TO MY-REQUESTS
        </Link>

      </p>
      {error ? (<p className="error">{error}</p>) : ''}
      {message ? (<p className="dashboard-message">{message}</p>) : ''}
      {loading
        ? (
          <div className="request-loader-container">
            <img className="loader-img" src={loader} alt="" />
            <p>...Creating Requests...</p>
          </div>
        ) : ''
      }
      <div id="container">
        <form className="request-form" onSubmit={submitUrl}>
          <input
            type="text"
            placeholder="title here..."
            id="title"
            onChange={handleInputChange}
            required
          />

          <textarea
            row="5"
            placeholder="Description here..."
            id="description"
            onChange={handleInputChange}
            required
          />

          <select name="request_type" id="priority" onChange={handleInputChange}>
            <option value="low" id="priority">Low</option>
            <option value="medium" id="priority">Medium</option>
            <option value="high" id="priority">High</option>
          </select>

          <div align="center">
            <button
              className="request-submit-button"
              id="submit"
              type="submit"
            >
              Create Request
            </button>
          </div>
        </form>
      </div>
    </Aux>
  );
};

CreateRequest.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitUrl: PropTypes.func,
  message: PropTypes.string,
};

CreateRequest.defaultProps = {
  submitUrl: '',
  error: '',
  message: '',
};

export default CreateRequest;
