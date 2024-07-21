import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token }) => {
  return {
    ghost: css`
      visibility: hidden;
    `,
    root: css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: ${token.zIndexPopupBase};
      padding: 0 ${token.paddingLG}px;
      line-height: 1;
    `,
  };
});

export default useStyles;
