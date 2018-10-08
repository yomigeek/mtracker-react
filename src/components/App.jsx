import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Page404 from './Page404';
import SignUpContainer from '../containers/SignUpContainer';
import LoginContainer from '../containers/LoginContainer';
import UserDashboardContainer from '../containers/UserDashboardContainer';
import checkAuthentication from '../hoc/Authentication';
import CreateRequestContainer from '../containers/CreateRequestContainer';
import EditRequestContainer from '../containers/EditRequestContainer';
import AdminDashboardContainer from '../containers/AdminDashboardContainer';
import AdminSingleRequestContainer from '../containers/AdminSingleRequestContainer';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/signup" component={SignUpContainer} />
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/dashboard" component={checkAuthentication(UserDashboardContainer)} />
      <Route exact path="/create-a-request" component={checkAuthentication(CreateRequestContainer)} />
      <Route exact path="/edit-request/:requestId" component={checkAuthentication(EditRequestContainer)} />
      <Route exact path="/admin-dashboard" component={checkAuthentication(AdminDashboardContainer)} />
      <Route exact path="/view-request/:requestId" component={checkAuthentication(AdminSingleRequestContainer)} />
      <Route to="*" component={Page404} />
    </Switch>
  </div>
);

export default App;
