import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import AdminDashboard from '../components/AdminDashboard';
import { userRequests } from '../actions/requestAction';

export class AdminDashboardContainer extends React.Component {
 state = {
   failedRequestMessage: '',
 }

 /**
   * @description Fetches all the requests
   * @returns {null}
   */
 componentDidMount = async () => {
   const { getAllRequest } = this.props;
   const response = await getAllRequest();
   if (response === 'fail') {
     this.setFail();
   }
 }

 /**
   * @description Handles the fail to get a request message state
   * @param {Object} failedRequestMessage The returned request object
   */
 setFail = () => {
   this.setState({
     failedRequestMessage: 'No request exist yet',
   });
 };

 render() {
   const { failedRequestMessage } = this.state;
   const { requestLoading, allUserRequests, history } = this.props;
   return (
     <React.Fragment>
       <AdminDashboard
         loading={requestLoading}
         failedRequestMessage={failedRequestMessage}
         requests={allUserRequests}
         history={history}
       />
       <Footer />
     </React.Fragment>

   );
 }
}

AdminDashboardContainer.propTypes = {
  requestLoading: PropTypes.bool.isRequired,
  allUserRequests: PropTypes.instanceOf(Array),
  history: PropTypes.shape({}).isRequired,
};

AdminDashboardContainer.defaultProps = {
  allUserRequests: [],
};

const mapStateToProps = state => ({
  requestLoading: state.loader.dashboardLoading,
  allUserRequests: state.request.allRequests,
});

export const mapDispatchToProps = dispatch => ({
  getAllRequest: () => dispatch(userRequests('admin')),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardContainer);
