import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import signUpUser from '../actions/signUpAction';

class SignUpContainer extends React.Component {
 state = {
   username: '',
   email: '',
   password: '',
   department: '',
 }

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  inputChangedHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  signUpFormHandler = async (event) => {
    event.preventDefault();
    const { signup, history } = this.props;
    const updatedSignUpData = Object.assign({}, this.state);
    const response = await signup(updatedSignUpData);
    if (response === 'success') history.push('/login');
    // actions.signUpUser(updatedSignUpData);
    // this.setState({ password: '' });

    // if (updatedSignUpData.department === '') {
    //   console.log('Department cannot be empty!');
    // } else {
  }

  render() {
    const { error, loading } = this.props;
    return (
      <React.Fragment>
        <SignUp
          handleInputChange={this.inputChangedHandler}
          submitUrl={this.signUpFormHandler}
          error={error}
          loading={loading}
        />
        <Footer />
      </React.Fragment>
    );
  }
}


SignUpContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  signup: PropTypes.func.isRequired,
  // actions: PropTypes.func.isRequired,
};

SignUpContainer.defaultProps = {
  error: '',
};


const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.loader.loading,
});

const mapDispatchToProps = dispatch => ({
  signup: userDetails => dispatch(signUpUser(userDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
