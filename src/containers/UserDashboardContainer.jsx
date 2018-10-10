import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import UserDashboard from '../components/UserDashboard';
import { userRequests } from '../actions/requestAction';

export class UserDashboardContainer extends React.Component {
 state = {
   username: '',
   failedRequestMessage: '',
 }

 componentDidMount = async () => {
   const newUsername = localStorage.getItem('username');
   this.setState({
     username: newUsername,
   });
   const { getAllRequest } = this.props;
   const response = await getAllRequest();
   if (response === 'fail') {
     this.setFail();
   }
 }

 setFail = () => {
   this.setState({
     failedRequestMessage: 'User does not have a request yet!',
   });
 };

 render() {
   const { username, failedRequestMessage } = this.state;
   const { requestLoading, allUserRequests, history } = this.props;
   return (
     <React.Fragment>
       <UserDashboard
         username={username}
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

UserDashboardContainer.propTypes = {
  requestLoading: PropTypes.bool.isRequired,
  allUserRequests: PropTypes.instanceOf(Array),
  history: PropTypes.shape({}).isRequired,
};

UserDashboardContainer.defaultProps = {
  allUserRequests: [],
};

const mapStateToProps = state => ({
  requestLoading: state.loader.dashboardLoading,
  allUserRequests: state.request.allRequests,
});

export const mapDispatchToProps = dispatch => ({
  getAllRequest: () => dispatch(userRequests('user')),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardContainer);
