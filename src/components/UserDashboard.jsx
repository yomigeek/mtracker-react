import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/images/logo.png';
import logIcon from '../assets/images/log-icon.png';
import loader from '../assets/images/loader.gif';
import '../assets/css/dashboard.css';
import Navbar from './Navbar';

const UserDashboard = (props) => {
  const {
    username, loading, failedRequestMessage,
  } = props;
  return (
    <React.Fragment>
      <Navbar />
      <p className="photo-container">
        <img src={logo} className="profile-photo" alt="" />
      </p>
      <h5 className="welcome-msg" id="welcome-msg">
          Welcome,
        {' '}
        {username}
      </h5>
      <h4 className="resolved-request-header">
        <img src={logIcon} className="resolved-request-header-photo" alt="" />
        {' '}
        My Requests

      </h4>
      <p className="form-footer">
        <b className="form-link-color"> Select Menu: </b>
        <select className="select" name="forma">
          <option value="user_dashboard.html">MY REQUESTS</option>
        </select>

      </p>
      <p>
        <Link to="/create_request_user">
          <button className="create-button" type="button">Create-A-Request</button>
        </Link>
      </p>

      <div align="center">
        <input type="text" id="myfilter" onKeyUp="myFilterTableFunction()" placeholder="Filter by names,ID,title..." title="Type in a name" />
      </div>
      {failedRequestMessage ? (<p className="error">{failedRequestMessage}</p>) : ''}

      <table id="request-table">

        <thead>
          <tr>
            <th>S/N</th>
            <th>Request ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="S/N" />
            <td data-column="Request ID" />
            <td data-column="Title" />
            <td data-column="Description" />
            <td data-column="Priority" />
            <td data-column="Action" id="action-row" />

          </tr>
        </tbody>
      </table>
      {loading
        ? (
          <div className="request-loader-container">
            <img className="loader-img" src={loader} alt="" />
            <p>...Loading Requests....</p>
          </div>
        ) : ''
      }

    </React.Fragment>
  );
};

UserDashboard.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.bool,
  failedRequestMessage: PropTypes.string,
};

UserDashboard.defaultProps = {
  username: '',
  loading: false,
  failedRequestMessage: '',
};

export default UserDashboard;
