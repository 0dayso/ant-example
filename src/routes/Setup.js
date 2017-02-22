import React from 'react';
import { connect } from 'dva';
// import styles from './Setup.css'
import Setups from '../components/setup/Setup';

function Setup() {
  return (
    <Setups />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Setup);
