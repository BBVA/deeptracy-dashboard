export const COSMIC_THEME = {
  name: 'cosmic',
  base: 'default',
  variables: {
    vulnerability: {
      tooltipBg: 'rgba(255, 0, 170, 0.35)',
      tooltipLineColor: 'rgba(255, 255, 255, 0.1)',
      tooltipLineWidth: '1',
      tooltipBorderColor: '#d90077',
      tooltipExtraCss: 'box-shadow: 0px 2px 46px 0 rgba(0, 255, 170, 0.35); border-radius: 10px; padding: 8px 24px;',
      tooltipTextColor: '#ffffff',
      tooltipFontWeight: 'normal',

      axisLineColor: 'rgba(161, 161 ,229, 0.3)',
      xAxisTextColor: '#a1a1e5',
      yAxisSplitLine: 'rgba(161, 161 ,229, 0.2)',

      itemBorderColor: '#ffffff',
      lineStyle: 'solid',
      lineWidth: '6',
      lineGradFrom: '#d90077',
      lineGradTo: '#fff835',
      lineShadow: 'rgba(14, 16, 48, 0.4)',

      areaGradFrom: 'rgba(255, 92, 255, 0.5)',
      areaGradTo: 'rgba(188, 92, 255, 0)',
      shadowLineDarkBg: '#a695ff',
    },

    bubbleMap: {
      titleColor: '#ffffff',
      areaColor: '#2c2961',
      areaHoverColor: '#a1a1e5',
      areaBorderColor: '#654ddb',
    },

    echarts: {
      bg: '#3d3780',
      textColor: '#ffffff',
      axisLineColor: '#a1a1e5',
      splitLineColor: '#342e73',
      itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
      tooltipBackgroundColor: '#6a7985',
      areaOpacity: '1',
    },

    chartjs: {
      axisLineColor: '#a1a1e5',
      textColor: '#ffffff',
    },
  },
};
