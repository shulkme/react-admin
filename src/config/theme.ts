// +---------------------------------
// | Ant Design 主题token配置
// | 要实现灵活的主题配置，还需配合`./src/global.ts`进行深度定制
// +---------------------------------

import type { ThemeConfig } from 'antd';

import { theme } from 'antd';

const sharedConfig: ThemeConfig = {
  cssVar: true, // use css variables -> var(--xxx)
  hashed: false, // close hash
  token: {
    colorPrimary: '#2464F1',
    borderRadiusXS: 2,
    borderRadiusSM: 4,
    borderRadius: 4,
    borderRadiusLG: 6,
    controlHeightXS: 24,
    controlHeightSM: 28,
    controlHeight: 36,
    controlHeightLG: 44,
  },
  components: {
    Button: {
      contentFontSizeSM: 12,
      contentFontSize: 14,
      contentFontSizeLG: 16,
      onlyIconSize: 18,
      onlyIconSizeLG: 20,
      onlyIconSizeSM: 16,
    },
    Table: {
      // 一般存放于卡片中，所以默认参照卡片容器
      headerBorderRadius: 0,
      headerBg: 'transparent',
      cellPaddingInlineSM: 16,
      cellPaddingInline: 24,
      cellPaddingInlineMD: 32,
      selectionColumnWidth: 64,
    },
    Card: {
      headerHeight: 64,
      headerHeightSM: 40,
      headerFontSize: 16,
      headerFontSizeSM: 14,
    },
    Skeleton: {
      controlHeightXS: 16,
    },
    Alert: {
      withDescriptionIconSize: 14,
      withDescriptionPadding: '12px 16px',
      fontSizeLG: 14,
    },
  }
};

const lightConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.defaultAlgorithm,
  components: {
    ...sharedConfig.components,
    Layout: {
      headerHeight: 48,
      headerPadding: '0 16px',
      footerBg: '#e4ebf1',
      headerBg: '#09121a',
      headerColor: '#fff',
      siderBg: '#fff',
      bodyBg: '#e4ebf1',
    },
  },
};

const darkConfig: ThemeConfig = {
  ...sharedConfig,
  algorithm: theme.darkAlgorithm,
  components: {
    ...sharedConfig.components,
    Layout: {
      headerHeight: 48,
      headerPadding: '0 16px',
      headerBg: '#09121a',
      headerColor: '#fff',
      siderBg: '#141414',
      bodyBg: '#000',
      footerBg: '#000'
    },
  },
};

export { darkConfig, lightConfig };
