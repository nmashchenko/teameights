import type { Preview } from '@storybook/react';
import '../src/app/styles/globals.scss';
import './font.scss';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'blacked',
      values: [
        {
          name: 'blacked',
          value: '#26292b'
        }
      ]
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
