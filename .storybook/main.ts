import type { StorybookConfig } from "@storybook/react-webpack5";
const path = require('path');

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, {
    configType
  }) => {
    config!.module!.rules!.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src/')
    });
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;
