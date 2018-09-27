import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

const checkAuthentication = (WrappedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      const { history } = this.props;
      const token = localStorage.getItem('token');
      const authenticated = localStorage.getItem('authenticated');
      const role = localStorage.getItem('role');
      if (!token || authenticated === 'false') {
        history.push('/login');
      }
      const decode = jwtDecode(token);
      if (!decode) {
        history.push('/login');
      }
      const checkTokenExpiryDate = decode.exp - Math.floor(Date.now() / 1000);
      if (checkTokenExpiryDate <= 0) {
        history.push('/login');
      }
      if (role !== 'user') {
        history.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }


  return connect()(Authentication);
};

export default checkAuthentication;
