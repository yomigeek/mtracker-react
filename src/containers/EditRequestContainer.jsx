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
    const { match, fetchSingleRequest } = this.props;
    const { request } = this.state;
    const { requestId } = match.params;
    fetchSingleRequest(requestId)
      .then(newresponse => this.setRequestState(request, newresponse));
  }

  /**
   * @description Handles the setting of the request state
   * @param {Object} request The request object
   * @param {Object} newRequest The returned request object
   */
  setRequestState = (request, newRequest) => {
    this.setState({ request: { ...request, ...newRequest } });
  };

  /**
   * @description Handles the text change for input fields
   * @param {Object} event The event object
   */
  inputChangedHandler = (event) => {
    const { request } = this.state;
    this.setState({ request: { ...request, [event.target.id]: event.target.value } });
  }

  /**
   * @description Handles the request update process
   * @returns {null}
   */

  updateRequestFormHandler = (event) => {
    event.preventDefault();
    const { match, updateSingleRequest } = this.props;
    const { requestId } = match.params;
    const requestData = Object.assign({}, this.state);
    updateSingleRequest(requestId, requestData);
  }

  render() {
    const {
      error, loading, requestMessage, singleRequest, history,
    } = this.props;
    const { request } = this.state;
    const errorMessage = 'This Request does not exist!';

    return (
      <React.Fragment>
        <Navbar history={history} />
        {
          singleRequest.title ? (
            <EditRequest
              handleInputChange={this.inputChangedHandler}
              submitUrl={this.updateRequestFormHandler}
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
  fetchSingleRequest: PropTypes.func.isRequired,
  updateSingleRequest: PropTypes.func.isRequired,
  requestMessage: PropTypes.string,
  singleRequest: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.shape({}).isRequired,
};

EditRequestContainer.defaultProps = {
  error: '',
  requestMessage: '',
  singleRequest: {},
};


const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.loader.dashboardLoading,
  requestMessage: state.request.message,
  singleRequest: state.request.singleRequest,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleRequest: requestId => dispatch(fetchASingleRequest(requestId)),
  updateSingleRequest:
  (requestId, requestDetails) => dispatch(updateRequestAction(requestId, requestDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditRequestContainer);
