import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { fetchASingleRequest, requestAction } from '../actions/requestAction';
import PageError from '../components/PageError';
import loader from '../assets/images/loader.gif';
import AdminSingleRequest from '../components/AdminSingleRequest';

export class AdminSingleRequestContainer extends React.Component {
  /**
   * @description Fetches the request information with the given Id from the API
   * @returns {null}
   */
  componentWillMount = async () => {
    const { match, fetchSingleRequest, userRole } = this.props;
    const { requestId } = match.params;
    await fetchSingleRequest(requestId, userRole);
  }

  /**
   * @description Handles the request approval process
   * @returns {null}
   */
  approveRequestHandler = (event) => {
    event.preventDefault();
    const { match, approveRequest } = this.props;
    const { requestId } = match.params;
    approveRequest(requestId, 'approve');
  }

  /**
   * @description Handles the decline approval process
   * @returns {null}
   */
  declineRequestHandler = (event) => {
    event.preventDefault();
    const { match, declineRequest } = this.props;
    const { requestId } = match.params;
    declineRequest(requestId, 'decline');
  }

  /**
   * @description Handles the request resolve process
   * @returns {null}
   */
  resolveRequestHandler = (event) => {
    event.preventDefault();
    const { match, resolveRequest } = this.props;
    const { requestId } = match.params;
    resolveRequest(requestId, 'resolve');
  }

  render() {
    const {
      loading, requestMessage, singleRequest, error,
    } = this.props;
    const errorMessage = 'This Request does not exist!';

    return (
      <React.Fragment>
        {
          singleRequest.title ? (
            <AdminSingleRequest
              approveRequest={this.approveRequestHandler}
              declineRequest={this.declineRequestHandler}
              resolveRequest={this.resolveRequestHandler}
              loading={loading}
              message={requestMessage}
              requestDetail={singleRequest}
              error={error}
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


AdminSingleRequestContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  fetchSingleRequest: PropTypes.func.isRequired,
  approveRequest: PropTypes.func,
  declineRequest: PropTypes.func,
  resolveRequest: PropTypes.func,
  requestMessage: PropTypes.string,
  singleRequest: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.shape({}).isRequired,
  error: PropTypes.string,
};

AdminSingleRequestContainer.defaultProps = {
  requestMessage: '',
  singleRequest: {},
  error: '',
  approveRequest: () => {
  },
  declineRequest: () => {
  },
  resolveRequest: () => {
  },
};


const mapStateToProps = state => ({
  error: state.auth.error,
  loading: state.loader.dashboardLoading,
  requestMessage: state.request.message,
  singleRequest: state.request.singleRequest,
  userRole: state.user.role,
});

export const mapDispatchToProps = dispatch => ({
  fetchSingleRequest: (requestId, userRole) => dispatch(fetchASingleRequest(requestId, userRole)),
  approveRequest: (requestId, action) => dispatch(requestAction(requestId, action)),
  declineRequest: (requestId, action) => dispatch(requestAction(requestId, action)),
  resolveRequest: (requestId, action) => dispatch(requestAction(requestId, action)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleRequestContainer);
