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
    username, loading, failedRequestMessage, requests,
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
          <option value="/dashboard">MY REQUESTS</option>
        </select>

      </p>
      <p>
        <Link to="/create-a-request">
          <button className="create-button" type="button">Create-A-Request</button>
        </Link>
      </p>

      <div align="center">
        <input type="text" id="myfilter" placeholder="Filter by names,ID,title..." title="Type in a name" />
      </div>
      {failedRequestMessage ? (<p className="error">{failedRequestMessage}</p>) : ''}
      {loading
        ? (
          <div className="request-loader-container">
            <img className="loader-img" src={loader} alt="" />
            <p>...Loading Requests...</p>
          </div>
        ) : (

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
              {requests.map((userRequest, index) => {
                let serialNumber = index;
                serialNumber += 1;
                return (
                  <tr key={serialNumber}>
                    <td data-column="S/N">{serialNumber}</td>
                    <td data-column="Request ID">{userRequest.id}</td>
                    <td data-column="Title">{userRequest.title}</td>
                    <td data-column="Description">{userRequest.description}</td>
                    <td data-column="Priority">{userRequest.priority}</td>
                    <td data-column="Action" id="action-row">
                      {userRequest.status === 1
                        ? (
                          <Link to={`/edit-request/${userRequest.id}`}>
                            <button className="edit-button" type="button">
                            Edit
                            </button>
                          </Link>
                        )
                        : '' }
                    </td>
                  </tr>
                );
              })
              }
            </tbody>
          </table>
        )
      }


    </React.Fragment>
  );
};

UserDashboard.propTypes = {
  username: PropTypes.string,
  loading: PropTypes.bool,
  failedRequestMessage: PropTypes.string,
  requests: PropTypes.instanceOf(Array),
};

UserDashboard.defaultProps = {
  username: '',
  loading: false,
  failedRequestMessage: '',
  requests: [],
};

export default UserDashboard;
