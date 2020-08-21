import React from 'react';

import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';

class SkeletonDemo extends React.Component {
  state = {
    active: false,
    size: 'default',
    buttonShape: 'default',
    avatarShape: 'circle',
  };

  handleActiveChange = (checked: any) => {
    this.setState({ active: checked });
  };

  handleSizeChange = (e:any) => {
    this.setState({ size: e.target.value });
  };

  handleShapeChange = (prop:any) => (e:any) => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { active, size, buttonShape, avatarShape }: any = this.state;
    return (
      <>
        <Space>
          <Skeleton.Button active={active} size={size} shape={buttonShape} />
          <Skeleton.Button active={active} size={size} shape={buttonShape} />
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
          <Skeleton.Input style={{ width: 200 }} active={active} size={size} />
        </Space>
        <br />
        <br />
        <Skeleton.Image />
        <Divider />
        <Form layout="inline" style={{ margin: '16px 0' }}>
          <Form.Item label="Active">
            <Switch checked={active} onChange={this.handleActiveChange} />
          </Form.Item>
          <Form.Item label="Size">
            <Radio.Group value={size} onChange={this.handleSizeChange}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
              <Radio.Button value="small">Small</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Button Shape">
            <Radio.Group value={buttonShape} onChange={this.handleShapeChange('buttonShape')}>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="round">Round</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Avatar Shape">
            <Radio.Group value={avatarShape} onChange={this.handleShapeChange('avatarShape')}>
              <Radio.Button value="square">Square</Radio.Button>
              <Radio.Button value="circle">Circle</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </>
    );
  }
}

export default SkeletonDemo;