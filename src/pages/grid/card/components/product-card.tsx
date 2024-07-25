import Icon from '@/components/icon';
import { ProductRecord } from '@/pages/grid/card/types.ts';
import { Button, Card, Image, Skeleton, Typography } from 'antd';
import { createStyles } from 'antd-style';
import type React from 'react';

const { Title, Paragraph } = Typography;

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      height: 100%;
    `,
    cover: css`
      position: relative;
      display: block;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      overflow: hidden;
      border-radius: ${token.borderRadius}px;
      .${prefixCls}-image-img {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        object-fit: cover;
        object-position: center;
      }
      .${prefixCls}-skeleton {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        .${prefixCls}-skeleton-image {
          width: 100%;
          height: 100%;
        }
      }
    `,
    intro: css`
      padding: 8px;
    `,
    title: css`
      &.${prefixCls}-typography {
        margin: 8px 0;
        height: 20px;
        line-height: 20px;
      }
    `,
    desc: css`
      &.${prefixCls}-typography {
        height: 20px;
        line-height: 20px;
        font-size: 16px;
      }
    `,
    skeleton: css`
      &.${prefixCls}-skeleton {
        padding: 12px 0 4px;
        .${prefixCls}-skeleton-title {
          margin: 0;
          & + .${prefixCls}-skeleton-paragraph {
            margin-block-start: 8px;
          }
        }
        .${prefixCls}-skeleton-paragraph {
          margin: 0;
        }
      }
    `,
  };
});

const ProductCard: React.FC<{
  record?: ProductRecord;
}> = ({ record }) => {
  const { styles } = useStyles();

  if (!record) {
    return (
      <Card
        bordered={false}
        styles={{
          body: {
            padding: 8,
          },
        }}
        className={styles.root}
      >
        <div className={styles.cover}>
          <Skeleton.Image active />
        </div>
        <Skeleton
          rootClassName={styles.skeleton}
          paragraph={{ rows: 1 }}
          active
        />
      </Card>
    );
  }

  return (
    <Card
      bordered={false}
      styles={{
        body: {
          padding: 8,
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
      <div className={styles.intro}>
        <Title level={5} className={styles.title} ellipsis>
          {record.title}
        </Title>
        <Paragraph className={styles.desc} type="secondary">
          $ {record.price.toLocaleString()}
        </Paragraph>
      </div>
    </Card>
  );
};

export default ProductCard;
