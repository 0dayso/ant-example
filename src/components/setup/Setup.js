import React from 'react';
import { Steps, Button, message } from 'antd';
import styles from './Setup.css';
// import Siders from '../components/layout/Siders'

const Step = Steps.Step;
const steps = [{
  title: '第一步——选择类型',
  content: 'asa',
}, {
  title: '第二步——填写参数',
  content: 'Second-content',
}, {
  title: '第三步——确认信息',
  content: 'Last-content',
}];

class Setup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    return (
      <div>
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">
          {steps[this.state.current].content}
        </div>
        <div className="steps-action">
          {this.state.current < steps.length - 1 &&
          <Button type="primary" onClick={() => this.next()}>下一步</Button>}
          {this.state.current === steps.length - 1 &&
          <Button type="primary" onClick={() => message.error('新建完成!')}>完成</Button>}
          {this.state.current > 0 &&
          <Button style={{ marginLeft: 30 }} onClick={() => this.prev()}>返回修改</Button>}
        </div>
      </div>
    );
  }
}
export default Setup;
