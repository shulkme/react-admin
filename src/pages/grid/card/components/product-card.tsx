import Icon from '@/components/icon';
import { ProductRecord } from '@/pages/grid/card/types.ts';
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
  };
});

const ProductCard: React.FC<ProductRecord> = (record) => {
  const { styles } = useStyles();
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
