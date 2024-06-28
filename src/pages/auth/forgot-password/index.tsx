import type { HttpError } from '@/apis/types.ts';
import Icon from '@/components/icon';
import { useBoolean } from 'ahooks';
import { Alert, Button, Form, Input, Typography } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const { Paragraph, Title } = Typography;

type FieldType = {
  email?: string;
};
const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm<FieldType>();
  const [submitting, { set: setSubmitting }] = useBoolean(false);
  const [error, setError] = useState<string>();

  const onFinish = async (values: FieldType) => {
    setSubmitting(true);
    try {
      console.log(values);
      setError(undefined);
    } catch (e) {
      setError((e as unknown as HttpError).msg || 'System Error');
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <Link to="/login">
        <Icon name="chevron-left" />
        Go back
      </Link>
      <Title level={2}>Reset Password</Title>
      <Paragraph type="secondary">
        We'll email you instructions on how to reset your password.
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
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: 'Email address is required',
            },
          ]}
        >
          <Input placeholder="Enter email address" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={submitting}>
            Send password reset link
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ForgotPassword;
