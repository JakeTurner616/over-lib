import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false
      }
    },
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },
  staticDirs: [
    "../public"
  ],
  webpackFinal: async (config) => {
    // Ensure config.module and config.module.rules are defined
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    
    // Add loader to process MDX files
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: '@mdx-js/loader',
          options: {}
        }
      ],
    });
    return config;
  }
};

export default config;
