import React,{ PropTypes } from 'react';
import { Form, Icon, Input, Button, Card } from 'antd';
import styles from './Login.css';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card style={{ width: 300 }} className={styles.card} title="系统登录入口">
        <Form onSubmit={this.handleSubmit.bind(this)} className={styles.login_form}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入账号' }],
            })(<Input addonBefore={<Icon type="user" />} placeholder="用户账号" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(<Input addonBefore={<Icon type="lock" />} type="password" placeholder="用户密码" />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.login_form_button}>
              登录
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object,
  loginButtonLoading: PropTypes.bool,
  onOk: PropTypes.func
}

export default Form.create()(LoginForm);
