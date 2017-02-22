import React from 'react';
import {Icon} from 'antd';
import { connect } from 'dva';
import styles from './Error404.css';

function Error404() {
  return (
   <div className='content-inner'>
  <div className={styles.error}>
    <Icon type='frown-o' className={styles.anticon} />
    <h1>404 我没找到耶 :|</h1>
  </div>
</div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Error404);
