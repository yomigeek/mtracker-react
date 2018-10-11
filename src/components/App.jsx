import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Page404 from './Page404';
import SignUpContainerComponent from '../containers/SignUpContainer';
import LoginContainerComponent from '../containers/LoginContainer';
import UserDashboardContainerComponent from '../containers/UserDashboardContainer';
import checkAuthentication from '../hoc/Authentication';
import CreateRequestContainerComponent from '../containers/CreateRequestContainer';
import EditRequestContainerComponent from '../containers/EditRequestContainer';
import AdminDashboardContainerComponent from '../containers/AdminDashboardContainer';
import AdminSingleRequestContainerComponent from '../containers/AdminSingleRequestContainer';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={SignUpContainerComponent} />
      <Route exact path="/login" component={LoginContainerComponent} />
      <Route exact path="/dashboard" component={checkAuthentication(UserDashboardContainerComponent)} />
      <Route exact path="/create-a-request" component={checkAuthentication(CreateRequestContainerComponent)} />
      <Route exact path="/edit-request/:requestId" component={checkAuthentication(EditRequestContainerComponent)} />
      <Route exact path="/admin-dashboard" component={checkAuthentication(AdminDashboardContainerComponent)} />
      <Route exact path="/view-request/:requestId" component={checkAuthentication(AdminSingleRequestContainerComponent)} />
      <Route to="*" component={Page404} />
    </Switch>
  </div>
);

export default App;
