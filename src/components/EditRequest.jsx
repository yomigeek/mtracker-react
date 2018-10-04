import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loader from '../assets/images/loader.gif';
import backIcon from '../assets/images/back_icon.png';
import '../assets/css/dashboard.css';
import Aux from '../hoc/Aux';

const EditRequest = (props) => {
  const {
    error, handleInputChange, submitUrl, loading, message, requestDetail,
  } = props;
  return (
    <Aux>
      <h4 className="resolved-request-header">
            Edit-A-Request
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
            <p>...Updating Request...</p>
          </div>
        ) : ''
      }
      <div id="container">
        <h5 className="request-id-container">
          Request ID:
          {' '}
          {requestDetail.id}
        </h5>

        <form className="edit-form" onSubmit={submitUrl}>
          <h5>Title</h5>
          <input
            type="text"
            value={requestDetail.title}
            id="title"
            onChange={handleInputChange}
            required
          />
          <h5>Description</h5>
          <textarea
            row="5"
            value={requestDetail.description}
            id="description"
            onChange={handleInputChange}
            required
          >
            {requestDetail.description}
          </textarea>
          <h5>Priority</h5>
          <select name="request_type" id="priority" value={requestDetail.priority} onChange={handleInputChange}>
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
              Update Request
            </button>
          </div>
        </form>
      </div>
    </Aux>
  );
};

EditRequest.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  submitUrl: PropTypes.func.isRequired,
  message: PropTypes.string,
  requestDetail: PropTypes.instanceOf(Object),
};

EditRequest.defaultProps = {
  error: '',
  message: '',
  requestDetail: {},
};

export default EditRequest;
