import { Button, Result } from 'antd';
import type React from 'react';

const ExceptionSystemError: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 'auto',
      }}
    >
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default ExceptionSystemError;
