import { createStyles } from 'antd-style';

export type PageContainerSite = 'small' | 'middle' | 'large';

const useStyles = createStyles(
  (
    { token, css },
    props: {
      size?: PageContainerSite;
    },
  ) => {
    const widths: Record<PageContainerSite, string> = {
      small: token.screenMDMax + 'px',
      middle: token.screenLGMax + 'px',
      large: token.screenXLMax + 'px',
    };

    const width = props.size ? widths[props.size] : 'unset';
    return {
      root: css`
        width: 100%;
        margin: 0 auto;
        max-width: ${width};
      `,
      header: css`
        margin-bottom: ${token.marginXL}px;
      `,
      container: css``
    };
  },
);

export default useStyles;
