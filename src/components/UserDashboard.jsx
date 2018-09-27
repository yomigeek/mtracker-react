import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import logo from '../assets/images/logo.png';
import '../assets/css/landing.css';

const UserDashboard = (props) => {
  const {
    username,
  } = props;
  return (
    <React.Fragment>
      <div className="topnav-land">
        <p>User Dashboard</p>
        <Link to="/login">
          Welcome,
          {' '}
          {username}
        </Link>

      </div>

    </React.Fragment>
  );
};

UserDashboard.propTypes = {
  username: PropTypes.string,
};

UserDashboard.defaultProps = {
  username: '',
};

export default UserDashboard;
