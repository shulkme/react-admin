import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    colorBgLayout: '#e4ebf1',
    // borderRadius: 6,
    // borderRadiusLG: 8,
    // borderRadiusXS: 2,
    // borderRadiusSM: 4,
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
    },
    Input: {
      inputFontSizeSM: 12,
      inputFontSize: 14,
      inputFontSizeLG: 16,
    },
    Layout: {
      headerHeight: 64,
    },
  },
};

export default theme;
