import { createGlobalStyle, css } from 'antd-style';

/**
 * 全局样式，更灵活的主题定制，用于antd组件样式覆盖，支持消费token
 * @link https://ant-design.github.io/antd-style/zh-CN/api/global-styles
 */
export const GlobalStyles = createGlobalStyle(({ theme }) => {
  const prefix = theme.prefixCls;
  return css`
    // 移除所有排版的外间距
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    div {
      &.${prefix}-typography {
        margin: 0;
        & + .${prefix}-typography {
          margin: 0;
        }
      }
    }

    // 移除列表项中标题的下间距，解决单标题时不居中问题
    .${prefix}-list
      .${prefix}-list-item
      .${prefix}-list-item-meta
      .${prefix}-list-item-meta-title {
      margin: 0;
    }

    // 垂直间距排列时，默认块级容器
    .${prefix}-space.${prefix}-space-vertical {
      display: flex;
    }

    // 头像图片支持自适应
    .${prefix}-avatar.avatar-contain > img {
      object-fit: contain;
    }

    // 表格卡片通用样式
    .${prefix}-card.with-table {
      .${prefix}-card-head {
        margin: 0;
      }
      .${prefix}-card-head-wrapper {
        gap: ${theme.padding}px;
      }
      .${prefix}-card-head-title {
        flex: none;
      }
      .${prefix}-card-extra {
        flex: auto;
      }
      .${prefix}-card-body {
        padding: 0;
      }
      .${prefix}-table-wrapper
        .${prefix}-table-pagination.${prefix}-pagination {
        padding-inline: ${theme.paddingLG}px;
      }
    }

    .${prefix}-alert {
      &.${prefix}-alert-with-description.${prefix}-alert-icon {
        margin-block: 3px;
      }
      .${prefix}-alert-message {
        font-weight: 600;
      }
    }
  `;
});
