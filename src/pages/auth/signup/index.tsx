import { register } from '@/apis/auth';
import type { RegisterData } from '@/apis/auth/types';
import type { HttpError } from '@/apis/types';
import { LOGIN_ROUTE } from '@/router/routes';
import { useBoolean } from 'ahooks';
import {
  Alert,
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Typography,
} from 'antd';
import { pick } from 'lodash';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const { Paragraph, Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  agreement?: boolean;
};

const Signup: React.FC = () => {
  const [form] = Form.useForm<FieldType>();
  const [submitting, { set: setSubmitting }] = useBoolean(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string>();

  const onFinish = async (values: FieldType) => {
    setSubmitting(true);
    try {
      const data = pick(values, ['username', 'password']) as RegisterData;
      await register(data);
      setError(undefined);
      navigate(LOGIN_ROUTE);
      message.success('注册成功 🎉');
    } catch (e) {
      //
      setError((e as unknown as HttpError).msg || 'System Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Title level={2}>Welcome to {import.meta.env.VITE_APP_NAME}</Title>
      <Paragraph type="secondary">
        Have an account? <Link to="/login">Login Here →</Link>
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
          <Input placeholder="Username" />
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
        <Form.Item<FieldType>
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error('Please agree to the Terms of Use'),
                    ),
            },
          ]}
          name="agreement"
          valuePropName="checked"
        >
          <Checkbox>
            By registering you agree to the<a> Terms of Use </a>.
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={submitting}>
            Create Account
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signup;
