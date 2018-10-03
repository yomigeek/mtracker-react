import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { createRequestAction } from '../actions/requestAction';
import CreateRequest from '../components/CreateRequest';
import Navbar from '../components/Navbar';

class CreateRequestContainer extends React.Component {
 state = {
   title: '',
   description: '',
   priority: '',
 }

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  inputChangedHandler = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  createRequestFormHandler = async (event) => {
    event.preventDefault();
    const { createARequest } = this.props;
    const requestData = Object.assign({}, this.state);
    createARequest(requestData);
    // if (response === 'success') history.push('');
  }

  render() {
    const { error, loading, requestMessage } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <CreateRequest
          handleInputChange={this.inputChangedHandler}
          submitUrl={this.createRequestFormHandler}
          error={error}
          loading={loading}
          message={requestMessage}
        />
        <Footer />
      </React.Fragment>
    );
  }
}


CreateRequestContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  createARequest: PropTypes.func.isRequired,
  requestMessage: PropTypes.string,
  // actions: PropTypes.func.isRequired,
};

CreateRequestContainer.defaultProps = {
  error: '',
  requestMessage: '',
};


const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.loader.dashboardLoading,
  requestMessage: state.request.message,
});

const mapDispatchToProps = dispatch => ({
  createARequest: requestData => dispatch(createRequestAction(requestData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequestContainer);
