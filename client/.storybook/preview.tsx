import type { StoryFn } from '@storybook/react';
import '../src/app/styles/globals.scss';
import './font.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      title: 'Story',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },

  backgrounds: {
    default: 'main',
    values: [
      {
        name: 'main',
        value: '#26292b',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'additional white',
        value: '#fafafa',
      },
    ],
  },
  viewport: {
    viewports: {
      '360': {
        name: '360',
        styles: {
          width: '360px',
          height: '780px',
        },
      },
      '768': {
        name: '768',
        styles: {
          width: '768px',
          height: '1664px',
        },
      },
      '1024': {
        name: '1024',
        styles: {
          width: '1024px',
          height: '576px',
        },
      },
      '1600+': {
        name: '1600+',
        styles: {
          width: '1600px',
          height: '900px',
        },
      },
    },
  },
};

export const decorators = [
  (Story: StoryFn) => (
    <div
      style={{
        margin: 10,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <Story />
    </div>
  ),
];
