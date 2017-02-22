import React from 'react';
import { Router, Route } from 'dva/router';
import Dashboard from './routes/Dashboard.js';

import Setup from './routes/Setup.js';

import Login from './routes/Login.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/setup" component={Setup} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
