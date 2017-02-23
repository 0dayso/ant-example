import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Router, Route, Link } from 'react-router';
import styles from './Menus.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Menus extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
          <SubMenu key="sub1" title={<span><Icon type="user" /><span className="nav-text">User</span></span>}>
            <Menu.Item key="1">
              Tom
            </Menu.Item>
            <Menu.Item key="2">
              Bill
            </Menu.Item>
            <Menu.Item key="3">
              Alex
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}>
            <Menu.Item key="4">
              <Link to="/login" >Login</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/setup" >Setup</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="6">
            <span><Icon type="file" /> <span className="nav-text">File</span></span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Menus;
