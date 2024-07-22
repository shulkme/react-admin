// +---------------------------------
// | Ant Design 主题token配置
// | 要实现灵活的主题配置，还需配合`./src/global.ts`进行深度定制
// +---------------------------------

import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
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
    // colorTextTertiary: 'rgba(0,0,0,0.65)',
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
    Input: {
      //inputFontSizeSM: 12,
      //inputFontSize: 14,
      //inputFontSizeLG: 16,
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
      //controlHeightSM: 18,
    },
    Alert: {
      withDescriptionIconSize: 14,
      withDescriptionPadding: '8px 12px',
      fontSizeLG: 14,
    },
  },
};

export default theme;
