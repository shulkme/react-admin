import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      min-height: 100vh;
    `,
    header: css`
      padding: ${token.paddingLG}px;
      height: auto;
      line-height: 1;
    `,
    content: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    footer: css`
      text-align: center;
    `,
    sider: css`
      .${prefixCls}-layout-sider-children > div {
        display: block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
    `,
    container: css`
      max-width: ${token.screenXS}px;
      width: 100%;
      padding: ${token.padding}px;
    `,
  };
});

export default useStyles;
