import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          // Require your Sass preprocessor here
          implementation: require('sass')
        }
      }
    }
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    }
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config) => {
    if (!config.resolve?.modules) return config;

    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    return config;
  }
};
export default config;
