import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Page404 from './Page404';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route to="*" component={Page404} />
    </Switch>
  </div>

);

export default App;
