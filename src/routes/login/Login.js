import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
import LoginForm from '../../components/login/Login';

function Login() {
  return (
    <div className={styles.normal}>
      <LoginForm />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
