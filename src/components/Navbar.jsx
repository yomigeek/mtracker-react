import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logout from '../actions/logoutAction';

class Navbar extends React.Component {
  state = {}

  log = (event) => {
    event.preventDefault();
    const { logoutUser, history } = this.props;
    logoutUser();
    history.push('/login');
  }

  render() {
    return (
      <React.Fragment>
        <div className="topnav">
          <p>M-Tracker - Dashboard</p>

          <button className="logout-button" type="button" onClick={this.log}>Logout</button>
          <Link to="/dashboard">Home</Link>

        </div>
      </React.Fragment>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout()),
});


export default connect(null, mapDispatchToProps)(Navbar);
