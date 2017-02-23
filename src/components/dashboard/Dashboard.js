import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Menus from './layout/Menus';
import styles from './Dashboard.css';

const { Header, Content, Footer } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Layout>
        <Header className={styles.header}>
          <div className="logo" />
        </Header>
        <Layout>
          <Menus />
          <Layout>
            <Content style={{ padding: '0 5px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>
                Home
              </Breadcrumb.Item>
                <Breadcrumb.Item>
                List
              </Breadcrumb.Item>
                <Breadcrumb.Item>
                App
              </Breadcrumb.Item>
              </Breadcrumb>
              <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Content style={{ padding: '0 24px', minHeight: 500 }}>
                  {this.props.children}
                </Content>
              </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Copyright © 2008 -
            {new Date().getFullYear()} Adsame Networks Technology Incorporated. All rights reserved. | 沪ICP备091437号
          </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
