// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,scss,sass}',
    './public/index.html',
    './.storybook/preview.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F45D2D',  // Primary color 1
        secondary: '#816CF9', // Secoundry color
        secondaryLight: '#AAAAAA', // Secondary color (más claro)
        font: '#000000', // Font color
        bg: '#F7F8F9', // BG color
        whiteBg: '#FFFFFF', // White BG
        grayEEE: '#EEEEEE', // EEE
        grayCCC: '#CCCCCC', // CCC
        grayAAA: '#AAAAAA', // AAA
        primaryA10: 'rgba(244, 93, 45, 0.1)', // 10% opacity
      },
    },
  },
  plugins: [],
};
