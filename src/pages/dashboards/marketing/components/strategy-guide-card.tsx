import Icon from '@/components/icon';
import {
  Button,
  Card,
  Col,
  Collapse,
  CollapseProps,
  Image,
  Progress,
  Row,
  Space,
  Typography,
} from 'antd';
import { createStyles } from 'antd-style';
import { isArray } from 'lodash';
import React, { useState } from 'react';

interface StepType {
  title: string;
  description: string;
  cover: string;
  finished: boolean;
  key: string;
  action?: {
    text: string;
    href: string;
  };
}

const { Title, Paragraph, Link } = Typography;

const useStyles = createStyles(({ prefixCls, css, token }) => {
  return {
    root: css`
      &.${prefixCls}-collapse-item {
        & > .${prefixCls}-collapse-header {
          align-items: center;
          padding: ${token.padding}px ${token.paddingLG}px;
          .${prefixCls}-collapse-expand-icon {
            height: auto;
          }
        }
        & > .${prefixCls}-collapse-content {
          .${prefixCls}-collapse-content-box {
            padding: 0 ${token.padding}px ${token.padding}px;
          }
        }
      }
    `,
    item: css`
      &.${prefixCls}-collapse-item {
        border: none;
        border-radius: ${token.borderRadiusLG}px;
        &:last-child {
          border-radius: ${token.borderRadiusLG}px;
        }
        & > .${prefixCls}-collapse-header {
          padding: ${token.paddingSM}px;
        }
        & > .${prefixCls}-collapse-content {
          padding-left: ${token.controlHeightXS + token.padding}px;
        }
        &.${prefixCls}-collapse-item-active {
          background: ${token.colorFillAlter};
        }
      }
    `,
  };
});

const steps: StepType[] = [
  {
    key: '1',
    title: 'Create subscription pop-up',
    description:
      "Making your subscription channels easier to find can increase customers' excitement.",
    cover:
      'https://img.myshopline.com/image/shopline/d82f8563482a4e3dbcebbe9b2ce35d31.png',
    finished: true,
    action: {
      text: 'Create pop-up',
      href: '',
    },
  },
  {
    key: '2',
    title: 'Set discount style',
    description:
      'The right banner style for the discount code can increase usage and conversion rates.',
    cover:
      'https://img.myshopline.com/image/shopline/d7d6d375595a4186bc21abf5a993b27b.png',
    finished: false,
    action: {
      text: 'Set style',
      href: '',
    },
  },
  {
    key: '3',
    title: 'Create product bundle',
    description:
      'Increase amount of unit per transaction and the average transaction value by setting multiple product bundles',
    cover:
      'https://img.myshopline.com/image/shopline/109159c5a2854cfe9d9467b39217b262.png',
    finished: false,
    action: {
      text: 'Create bundle',
      href: '',
    },
  },
];

const StepTabs: React.FC = () => {
  const { styles } = useStyles();

  const [activeKey, setActiveKey] = useState<string[]>([steps[0]['key']]);

  const onChange: CollapseProps['onChange'] = (key) => {
    if (isArray(key) && key.length > 0) {
      // 保留一个
      setActiveKey(key);
    }
  };

  function getStepItem(
    record: StepType,
  ): NonNullable<CollapseProps['items']>[number] {
    return {
      label: (
        <Space size={16}>
          <Button
            size="small"
            shape="circle"
            icon={record.finished && <Icon name="check" />}
            type={record.finished ? 'primary' : 'dashed'}
          />
          <Title level={5} style={{ margin: 0 }}>
            {record.title}
          </Title>
        </Space>
      ),
      children: (
        <Row gutter={[32, 32]} justify="space-between">
          <Col xs={24} lg={16} xl={12}>
            <Typography>
              <Paragraph>
                {record.description} <Link>Learn more</Link>.
              </Paragraph>
            </Typography>
            {record.action && (
              <Button type="primary" href={record.action.href}>
                {record.action.text}
              </Button>
            )}
          </Col>
          <Col xs={24} lg={8} xl={6}>
            <div style={{ marginBlockStart: -16 }}>
              <Image width={200} preview={false} src={record.cover} />
            </div>
          </Col>
        </Row>
      ),
      showArrow: false,
      className: styles.item,
    };
  }

  return (
    <Collapse
      activeKey={activeKey}
      ghost
      bordered={false}
      accordion
      onChange={onChange}
      items={[...steps.map((step) => getStepItem(step))]}
    />
  );
};

const StrategyGuideCard: React.FC = () => {
  const { styles, theme } = useStyles();
  return (
    <Card
      styles={{
        header: {
          fontWeight: 'unset',
          paddingBlock: theme.padding,
        },
        body: {
          padding: 0,
        },
      }}
      title={
        <Typography>
          <Title level={5} style={{ marginTop: 0 }}>
            All-in-one marketing 🚀
          </Title>
          <Paragraph
            type="secondary"
            ellipsis={{ rows: 2 }}
            style={{ margin: 0, whiteSpace: 'normal', paddingRight: 8 }}
          >
            Explore our multi-functional, one-stop marketing tool. Smoothly
            create different kinds of marketing campaigns, integrate 10 common
            solutions, and handle common marketing bottlenecks.
          </Paragraph>
        </Typography>
      }
      extra={<Button>Use Now</Button>}
      bordered={false}
    >
      <Collapse
        ghost
        expandIconPosition="end"
        collapsible="icon"
        defaultActiveKey="root"
        items={[
          {
            label: (
              <Space size="large">
                <Paragraph strong style={{ margin: 0 }}>
                  New merchant strategy
                </Paragraph>
                <Progress
                  steps={3}
                  percent={33}
                  format={(percent) =>
                    `${Math.ceil(((percent || 1) / 100) * 3)} / 3`
                  }
                />
              </Space>
            ),
            key: 'root',
            children: <StepTabs />,
            extra: (
              <Button
                size="small"
                type="text"
                icon={<Icon name="ellipsis" size={16} />}
              />
            ),
            className: styles.root,
          },
        ]}
        expandIcon={({ isActive }) => (
          <Button
            size="small"
            type="text"
            icon={
              <Icon name={isActive ? 'chevron-up' : 'chevron-down'} size={16} />
            }
          />
        )}
      />
    </Card>
  );
};

export default StrategyGuideCard;
