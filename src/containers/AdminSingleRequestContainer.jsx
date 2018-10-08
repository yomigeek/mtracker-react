import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { fetchASingleRequest } from '../actions/requestAction';
import Navbar from '../components/Navbar';
import PageError from '../components/PageError';
import loader from '../assets/images/loader.gif';
import AdminSingleRequest from '../components/AdminSingleRequest';

class AdminSingleRequestContainer extends React.Component {
  /**
   * @description Fetches the request information with the given Id from the API
   * @returns {null}
   */
  componentDidMount = async () => {
    const { match, fetchSingleRequest } = this.props;
    const { requestId } = match.params;
    await fetchSingleRequest(requestId);
  }

  /**
   * @description Handles the request approval process
   * @returns {null}
   */
  approveRequestHandler = (event) => {
    event.preventDefault();
  }

  /**
   * @description Handles the decline approval process
   * @returns {null}
   */
  declineRequestHandler = (event) => {
    event.preventDefault();
  }

  /**
   * @description Handles the request resolve process
   * @returns {null}
   */
  resolveRequestHandler = (event) => {
    event.preventDefault();
  }

  render() {
    const {
      loading, requestMessage, singleRequest, history,
    } = this.props;
    const errorMessage = 'This Request does not exist!';

    return (
      <React.Fragment>
        <Navbar history={history} />
        {
          singleRequest.title ? (
            <AdminSingleRequest
              approveRequest={this.approveRequestHandler}
              declineRequest={this.declineRequestHandler}
              resolveRequest={this.resolveRequestHandler}
              loading={loading}
              message={requestMessage}
              requestDetail={singleRequest}
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
  requestMessage: PropTypes.string,
  singleRequest: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.shape({}).isRequired,
};

AdminSingleRequestContainer.defaultProps = {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminSingleRequestContainer);