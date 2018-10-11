import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Login from '../components/Login';
import loginUser from '../actions/loginAction';

export class LoginContainer extends React.Component {
 state = {
   email: '',
   password: '',
 }

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  inputChangedHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  /**
   * @description Handles the login process
   * @returns {null}
   */
  loginFormHandler = (event) => {
    event.preventDefault();
    const { login, history } = this.props;
    const updatedLoginData = Object.assign({}, this.state);
    login(updatedLoginData, history);
  }

  render() {
    const { error, loading, authMessage } = this.props;
    return (
      <React.Fragment>
        <Login
          handleInputChange={this.inputChangedHandler}
          submitUrl={this.loginFormHandler}
          error={error}
          loading={loading}
          authMessage={authMessage}
        />
        <Footer />
      </React.Fragment>
    );
  }
}


LoginContainer.propTypes = {
  error: PropTypes.string,
  history: PropTypes.shape({}).isRequired,
  loading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  authMessage: PropTypes.string,
};

LoginContainer.defaultProps = {
  error: '',
  authMessage: '',
};


export const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.loader.loading,
  authMessage: state.auth.authMessage,
});

export const mapDispatchToProps = dispatch => ({
  login: (userDetails, history) => dispatch(loginUser(userDetails, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
