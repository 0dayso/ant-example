import React from 'react';
import { Router, Route } from 'dva/router';
import Dashboard from './routes/dashboard/Dashboard';
import Setup from './routes/setup/Setup';
import Login from './routes/login/Login';
import Error404 from './routes/Error404';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard}>
        <Route path="/setup" component={Setup} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="*" component={Error404} />
    </Router>
  );
}

export default RouterConfig;
