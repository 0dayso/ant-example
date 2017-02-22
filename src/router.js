import React from 'react';
import { Router, Route } from 'dva/router';
import Dashboard from './routes/Dashboard';
import Setup from './routes/Setup';
import Login from './routes/Login';
import Error404 from './routes/Error404';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/setup" component={Setup} />
      <Route path="/login" component={Login} />
      <Route path="*" component={Error404} />
    </Router>
  );
}

export default RouterConfig;
