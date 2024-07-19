import Icon from '@/components/icon';
import { Card, Col, Row, Typography } from 'antd';
import { keys } from 'lodash';
import type React from 'react';

const { Paragraph, Text } = Typography;

const LocalIcon: React.FC = () => {
  const modules = import.meta.glob('../../../icons/**.tsx');
  const local_icons = keys(modules).map((key) => {
    return key.match(/[^/]+(?=\.\w+$)/)?.[0] || key;
  });
  return (
    <Card bordered={false} title="Use local icons">
      <Typography>
        <Paragraph>
          Local icons are the most common and recommended usage, and the number
          of icons updates with the development of the business. Since all icons
          are lazily loaded, there is no need to worry about{' '}
          <Text code>FCP</Text> issues.
        </Paragraph>
        <ol>
          <li>
            Firstly, you need to place the SVG icon file in the{' '}
            <Text mark>./src/icons</Text> directory.
          </li>
          <li>
            Then, where you need to use the icon, use the{' '}
            <Text code>{`<Icon />`}</Text> component to reference the relevant
            icon through the <Text mark>name</Text> attribute, where{' '}
            <Text mark>name</Text> is the icon file name.
          </li>
        </ol>
        <Paragraph>These are the local icons below:</Paragraph>
      </Typography>
      <Row gutter={[16, 16]}>
        {local_icons.map((name, index) => (
          <Col key={index} xs={12} sm={8} md={6} lg={4}>
            <Card
              hoverable
              size="small"
              styles={{
                body: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                },
              }}
              style={{
                height: '100%',
              }}
            >
              <Icon name={name} size={32} />
              <Typography.Text
                ellipsis={{
                  tooltip: {
                    title: name,
                    placement: 'bottom',
                  },
                }}
              >
                {name}
              </Typography.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default LocalIcon;
