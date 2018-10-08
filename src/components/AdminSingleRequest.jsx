import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import backIcon from '../assets/images/back_icon.png';
import loader from '../assets/images/loader.gif';
import '../assets/css/pages.css';

const AdminSingleRequest = (props) => {
  const {
    requestDetail, loading, approveRequest, message, error, declineRequest, resolveRequest,
  } = props;
  return (
    <React.Fragment>
      <p className="photo-container" />
      <h4 className="resolved-request-header">
        Request Details
      </h4>
      <p className="form-footer">

        <Link to="/admin-dashboard" className="form-link-color">
          <img src={backIcon} className="menu-icon" alt="" />
          {' '}
          BACK TO LOGGED-REQUESTS
        </Link>

      </p>
      {loading
        ? (
          <div className="request-loader-container">
            <img className="loader-img" src={loader} alt="" />
            <p>...Working On Request...</p>
          </div>
        ) : false
      }
      {message ? (<p className="dashboard-message">{message}</p>) : ''}
      {error ? (
        <p className="error">
          {error}
        . Either due to network or it has already been
          {' '}
          {error.substr(-9, 8)}
        .
        </p>
      ) : ''}
      <div className="details-container details-panel-header" id="request-details-box">

        <p>
          <b>
            ID:
          </b>
          <font className="request-detail-value">
            {' '}
            {requestDetail.id}
          </font>
        </p>
        <p>
          <b>
          Request Status:
          </b>
          <font className="request-detail-value">
            {' '}
            {requestDetail.values}
          </font>
        </p>
        <p>
          <b>
          Requester Name:
          </b>
          <font className="request-detail-value">
            {' '}
            {requestDetail.username}
          </font>
        </p>
        <p>
          <b>
          Title:
          </b>
          <font className="request-detail-value">
            {' '}
            {requestDetail.title}
          </font>
        </p>
        <p>
          <b>
          Description:
          </b>
          <font className="request-detail-value">
            {' '}
            {requestDetail.description}
          </font>
        </p>
        <p>
          <b>
          Priority:
          </b>
          <font className="request-detail-value">
            {' '}
            {requestDetail.priority}
          </font>
        </p>
        {requestDetail.status === 2
          ? (
            <React.Fragment>
              <button className="resolve-button" type="button" onClick={resolveRequest}>Resolve Request</button>
              <button className="decline-button" type="button" onClick={declineRequest}>Decline Request</button>
            </React.Fragment>
          )

          : ''
          }
        {requestDetail.status === 3
          ? (
            <React.Fragment>
              <button className="approve-button" type="button" onClick={approveRequest}>Approve Request</button>
            </React.Fragment>
          )

          : ''
          }
        {requestDetail.status === 4
          ? (
            <React.Fragment>
              <p className="resolve-msg">Request has already been resolved!</p>
            </React.Fragment>
          )

          : ''
          }
      </div>


    </React.Fragment>
  );
};

AdminSingleRequest.propTypes = {
  requestDetail: PropTypes.instanceOf(Object).isRequired,
  loading: PropTypes.bool,
  approveRequest: PropTypes.func,
  resolveRequest: PropTypes.func,
  declineRequest: PropTypes.func,
  message: PropTypes.string,
  error: PropTypes.string,
};

AdminSingleRequest.defaultProps = {
  loading: false,
  message: '',
  error: '',
  approveRequest: () => {
  },
  declineRequest: () => {
  },
  resolveRequest: () => {
  },
};

export default AdminSingleRequest;
