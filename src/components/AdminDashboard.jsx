import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logIcon from '../assets/images/log-icon.png';
import loader from '../assets/images/loader.gif';
import '../assets/css/dashboard.css';

const AdminDashboard = (props) => {
  const {
    loading, failedRequestMessage, requests,
  } = props;
  return (
    <React.Fragment>
      <p className="photo-container" />
      <h5 className="welcome-msg" id="welcome-msg">
        Welcome,
        {' '}
        Admin
      </h5>
      <h4 className="resolved-request-header">
        <img src={logIcon} className="resolved-request-header-photo" alt="" />
        {' '}
        LOGGED REQUESTS

      </h4>

      <div align="center">
        <input type="text" id="myfilter" placeholder="Filter by names,ID,title..." title="Type in a name" />
      </div>
      {failedRequestMessage ? (<p className="error">{failedRequestMessage}</p>) : ''}
      {loading
        ? (
          <div className="request-loader-container">
            <img className="loader-img" src={loader} alt="" />
            <p>...Loading All Requests...</p>
          </div>
        ) : (

          <table id="request-table">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Request ID</th>
                <th>Requester Name</th>
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
                    <td data-column="Request ID">{userRequest.username}</td>
                    <td data-column="Title">{userRequest.title}</td>
                    <td data-column="Description">{userRequest.description}</td>
                    <td data-column="Priority">{userRequest.priority}</td>
                    <td data-column="Action" id="action-row">
                      <Link to={`/view-request/${userRequest.id}`}>
                        <button className="view-button" type="button">
                            View
                        </button>
                      </Link>

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

AdminDashboard.propTypes = {
  loading: PropTypes.bool,
  failedRequestMessage: PropTypes.string,
  requests: PropTypes.instanceOf(Array),
  history: PropTypes.shape({}).isRequired,
};

AdminDashboard.defaultProps = {
  loading: false,
  failedRequestMessage: '',
  requests: [],
};

export default AdminDashboard;
