import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import UserDashboard from '../components/UserDashboard';

class UserDashboardContainer extends React.Component {
 state = {
   username: '',
 }

 componentWillMount() {
   const newUsername = localStorage.getItem('username');
   this.setState({
     username: newUsername,
   });
 }

 render() {
   const { username } = this.state;
   return (
     <React.Fragment>
       <UserDashboard
         username={username}
       />
       <Footer />
     </React.Fragment>

   );
 }
}


export default connect()(UserDashboardContainer);
