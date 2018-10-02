import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import UserDashboard from '../components/UserDashboard';
import userRequests from '../actions/requestAction';

class UserDashboardContainer extends React.Component {
 state = {
   username: '',
   failedRequestMessage: '',
 }

 componentWillMount = async () => {
   const newUsername = localStorage.getItem('username');
   this.setState({
     username: newUsername,
   });
   const { getAllRequest } = await this.props;
   const response = await getAllRequest();
   if (response === 'fail') {
     this.setState({
       failedRequestMessage: 'User does not have a request yet!',
     });
   }
 }

 render() {
   const { username, requestLoading, failedRequestMessage } = this.state;
   return (
     <React.Fragment>
       <UserDashboard
         username={username}
         loading={requestLoading}
         failedRequestMessage={failedRequestMessage}
       />
       <Footer />
     </React.Fragment>

   );
 }
}

const mapStateToProps = state => ({
  requestLoading: state.loader.dashboardLoading,
});

const mapDispatchToProps = dispatch => ({
  getAllRequest: () => dispatch(userRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboardContainer);
