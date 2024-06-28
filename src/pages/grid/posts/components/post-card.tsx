import Icon from '@/components/icon';
import { PostRecord } from '@/pages/layouts/grid/posts/types.ts';
import { Button, Card, Image, Typography } from 'antd';
import { createStyles } from 'antd-style';
import type React from 'react';

const { Title, Paragraph } = Typography;

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      height: 100%;
    `,
    cover: css`
      display: block;
      width: 100%;
      height: 0;
      padding-bottom: 50%;
      overflow: hidden;
      border-radius: ${token.borderRadius}px;
      > img {
        position: absolute;
        inset: 0;
        object-fit: cover;
      }
    `,
    title: css`
      &.${prefixCls}-typography {
        margin: 16px 0 8px;
        line-height: 1.25;
        height: 20px;
      }
    `,
    desc: css`
      &.${prefixCls}-typography {
        line-height: 1.14;
        height: 32px;
      }
    `,
  };
});

const PostCard: React.FC<PostRecord> = (record) => {
  const { styles } = useStyles();
  return (
    <Card
      bordered={false}
      styles={{
        body: {
          padding: 16,
        },
      }}
      className={styles.root}
    >
      <Image
        rootClassName={styles.cover}
        src={record.cover}
        preview={{
          visible: false,
          mask: (
            <Button
              ghost
              icon={<Icon name="eye" />}
              size="large"
              shape="circle"
            />
          ),
        }}
      />
      <Title level={5} className={styles.title} ellipsis>
        {record.title}
      </Title>
      <Paragraph
        className={styles.desc}
        type="secondary"
        ellipsis={{ rows: 2 }}
      >
        {record.description}
      </Paragraph>
      <Button block icon={<Icon name="pen-line" />}>
        Edit
      </Button>
    </Card>
  );
};

export default PostCard;
