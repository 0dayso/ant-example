import dva from 'dva';
import { message } from 'antd';
import createLogger from 'redux-logger';
import { browserHistory } from 'dva/router';
// import { useRouterHistory, browserHistory } from 'dva/router'
// import { createHashHistory } from 'history'

import './index.css';

// 1. Initialize
const globalconfig = {
  onError(e) {
    message.error(e.message);
  },
  onAction: createLogger(), // 开启日志
  history: browserHistory, //   切换 history 为 browserHistory
};
const app = dva(globalconfig);

// 2. Plugins
// app.use({})

// 3. Model
// app.model(require('./models/example'))
app.model(require('./models/users.js'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
