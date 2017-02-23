import React from 'react';
import { connect } from 'dva';
import DashboardCom from '../../components/dashboard/Dashboard';

function Dashboard() {
  return (
    <DashboardCom />
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Dashboard);
