import { createStyles } from 'antd-style';

const useStyles = createStyles(({ css, token, prefixCls }) => {
  return {
    root: css`
      &.${prefixCls}-layout-sider {
        position: fixed;
        left: 0;
        top: 64px; // header height
        bottom: 0;
        z-index: ${token.zIndexPopupBase};
      }
    `,
    ghost: css`
      visibility: hidden;
    `,
    menu: css`
      &.${prefixCls}-menu-light.${prefixCls}-menu-root {
        &.${prefixCls}-menu-inline,&.${prefixCls}-menu-vertical {
          border-inline-end: 0;
          max-height: 100%;
          overflow: auto;
          padding: ${token.paddingXS}px 0;
          &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          &::-webkit-scrollbar-thumb {
            background: ${token.colorFill};
            border-radius: 4px;
          }
        }
      }

      // 推荐通过样式隐藏分组标题
      &.${prefixCls}-menu-inline-collapsed {
        .${prefixCls}-menu-item-group-title {
          display: none;
        }
      }
      .${prefixCls}-menu-submenu-arrow {
        &:before,
        &:after {
          height: 1px;
          border-radius: 0;
        }
      }
    `,
  };
});

export default useStyles;
