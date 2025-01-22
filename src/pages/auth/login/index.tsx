import { login } from '@/apis/auth';
import type { LoginData } from '@/apis/auth/types';
import type { HttpError } from '@/apis/types';
import { DEFAULT_ROUTE } from '@/router/routes';
import { setToken } from '@/utils/token';
import { useBoolean } from 'ahooks';
import {
  Alert,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  message,
  Row,
  Typography,
} from 'antd';
import { pick } from 'lodash';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const { Paragraph, Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const [form] = Form.useForm<FieldType>();
  const [submitting, { set: setSubmitting }] = useBoolean(false);
  const navigate = useNavigate();
  const { redirect } = useParams();
  const [error, setError] = useState<string>();

  const onFinish = async (values: FieldType) => {
    setSubmitting(true);
    try {
      const formData = pick(values, ['username', 'password']) as LoginData;
      const {
        data: { token },
      } = await login(formData);
      setToken(token);
      setError(undefined);
      message.success('Welcome back 🎉');
      navigate(redirect ?? DEFAULT_ROUTE, {
        replace: true,
      });
    } catch (e) {
      setError((e as unknown as HttpError).msg || 'System Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Title level={2}>Welcome back</Title>
      <Paragraph type="secondary">
        Don't have an account? <Link to="/signup">Signup Now →</Link>
      </Paragraph>
      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
      <Form
        form={form}
        layout="vertical"
        size="large"
        variant="filled"
        requiredMark={false}
        initialValues={{
          username: 'admin',
          password: '123456',
        }}
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Username is required',
            },
          ]}
        >
          <Input placeholder="Username/Email" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Password is required',
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item<FieldType> name="remember" valuePropName="checked">
          <Row justify="space-between">
            <Col>
              <Checkbox>Remember me</Checkbox>
            </Col>
            <Col>
              <Link to="/forgot-password">Forgot password?</Link>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={submitting}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
