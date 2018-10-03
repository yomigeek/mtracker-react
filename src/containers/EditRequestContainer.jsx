import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { fetchASingleRequest, updateRequestAction } from '../actions/requestAction';
import Navbar from '../components/Navbar';
import EditRequest from '../components/EditRequest';
import PageError from '../components/PageError';
import loader from '../assets/images/loader.gif';


class EditRequestContainer extends React.Component {
  state = {
    request: {
      title: '',
      description: '',
      priority: '',
    },
  }

  /**
   * @description Fetches the request with the given Id from the API
   * @returns {null}
   */
  componentDidMount = () => {
    const { match, fetchSingleRequest, singleRequest } = this.props;
    const { request } = this.state;
    const { requestId } = match.params;
    fetchSingleRequest(requestId)
      .then(newres => this.setAppState(request, newres));
    // console.log(newres, 'hhhhhh');
    // this.setState({ request: { ...request, ...newres } });
    // this.setState({ request: { ...request, title: newres.title } });
    // this.setState({
    //   request
    // });
    // this.setState({ singleRequest: { ...singleRequest, }});
  }

  setAppState = (request, newres) => {
    this.setState({ request: { ...request, ...newres } });
  };

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  inputChangedHandler = (event) => {
    const { request } = this.state;
    // debugger;
    this.setState({ request: { ...request, [event.target.id]: event.target.value } });
    // this.setState({ [event.target.id]: event.target.value });
  }

  editRequestFormHandler = async (event) => {
    event.preventDefault();
    const { match, updateSingleRequest } = this.props;
    const { requestId } = match.params;
    const requestData = Object.assign({}, this.state);
    updateSingleRequest(requestId, requestData);
  }

  render() {
    const {
      error, loading, requestMessage, singleRequest,
    } = this.props;
    const { request } = this.state;
    const errorMessage = 'This Request does not exist!';
    // console.log(request, 'request');
    // console.log(singleRequest, 'single request');

    return (
      <React.Fragment>
        <Navbar />
        {
          singleRequest.title ? (
            <EditRequest
              handleInputChange={this.inputChangedHandler}
              submitUrl={this.editRequestFormHandler}
              error={error}
              loading={loading}
              message={requestMessage}
              requestDetail={request}
            />
          ) : (
            <React.Fragment>
              {!loading
                ? (
                  <PageError
                    errorMessage={errorMessage}
                  />
                )
                : (
                  <div className="request-loader-container">
                    <img className="loader-img" src={loader} alt="" />
                    <p>...Loading Request...</p>
                  </div>
                )
                }
            </React.Fragment>
          )
        }
        <Footer />
      </React.Fragment>
    );
  }
}


EditRequestContainer.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  // createARequest: PropTypes.func.isRequired,
  requestMessage: PropTypes.string,
  singleRequest: PropTypes.instanceOf(Object),
};

EditRequestContainer.defaultProps = {
  error: '',
  requestMessage: '',
  // singleRequest: {},
};


const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.loader.dashboardLoading,
  requestMessage: state.request.message,
  singleRequest: state.request.singleRequest,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleRequest: requestId => dispatch(fetchASingleRequest(requestId)),
  updateSingleRequest: (requestId, requestDetails) => dispatch(updateRequestAction(requestId, requestDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRequestContainer);
