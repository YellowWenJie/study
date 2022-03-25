import React, { useState } from "react";
import "./login.scss";
import { Button, Form, Input } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
interface StateProps {
  name: string;
  address: string;
}
const Login = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form>
        <Form.Item label="用户名" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
