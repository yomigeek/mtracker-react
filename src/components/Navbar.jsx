import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logout from '../actions/logoutAction';

export class Navbar extends React.Component {
  state = {}

  logUserOut = () => {
    const { logoutUser, history } = this.props;
    logoutUser();
    history.push('/login');
  }

  render() {
    const { role } = this.props;
    return (
      <React.Fragment>
        <div className="topnav">
          <p>M-Tracker - Dashboard</p>

          <button className="logout-button" type="button" onClick={this.logUserOut}>Logout</button>
          <Link to={role === 'user' ? '/dashboard' : '/admin-dashboard'}>
          Home
          </Link>

        </div>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
  role: PropTypes.string.isRequired,
};

export const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
});


export default connect(null, mapDispatchToProps)(Navbar);
