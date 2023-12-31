import type { Meta, StoryObj } from '@storybook/react';
import { ImageLoader } from './image-loader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ImageLoader> = {
  title: 'shared/ImageLoader',
  component: ImageLoader,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageLoader>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ImageLoader_Heavy: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <ImageLoader
        borderRadius={'50%'}
        src={`https://picsum.photos/${Math.floor(Math.random() * 1001) + 3000}/${
          Math.floor(Math.random() * 1001) + 3000
        }`}
        width={70}
        height={70}
        alt={'Something else'}
      />
    </div>
  ),
};

export const ImageLoader_Light: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <ImageLoader
        borderRadius={'0'}
        src={`https://picsum.photos/1920/1080`}
        width={100}
        height={100}
        alt={'Something else'}
      />
    </div>
  ),
};

export const ImageLoader_SuperHeavy: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
      <ImageLoader
        borderRadius={'0'}
        src={`https://picsum.photos/4000/4000`}
        width={300}
        height={300}
        alt={'Something else'}
      />
    </div>
  ),
};
