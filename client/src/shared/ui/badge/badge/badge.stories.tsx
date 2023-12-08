import type { Meta } from '@storybook/react';
import { Badge } from './badge';
import { LinkIcon, XIcon } from '@/shared/assets';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Badge> = {
  title: 'shared/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Badge_link = () => {
  return (
    <Badge
      type='link'
      to='https://teameights.com'
      icon={<LinkIcon width='16' height='16xs' />}
      title='Link'
    />
  );
};

export const Badge_default = () => {
  return <Badge type='block' icon={<XIcon width='16' height='16xs' />} title='Cookie' />;
};
