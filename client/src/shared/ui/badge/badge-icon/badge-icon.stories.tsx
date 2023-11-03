import type { Meta } from '@storybook/react';
import { programmingLanguages, designerTools, managerTools } from '@/shared/constant';
import { BadgeIcon } from './badge-icon';
import { Typography } from '@/shared/ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeIcon> = {
  title: 'shared/BadgeIcon',
  component: BadgeIcon,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BadgeProgrammingLanguages_default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
      <Typography>Programming languages</Typography>
      {programmingLanguages.map((key, id) => (
        <BadgeIcon data={key.label} key={id} />
      ))}
    </div>
  );
};

export const BadgeDesignerTools_default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
      <Typography>Designer tools</Typography>
      {designerTools.map((key, id) => (
        <BadgeIcon data={key.label} key={id} />
      ))}
    </div>
  );
};

export const ProjectManagerTools_default = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
      <Typography>Project manager tools</Typography>
      {managerTools.map((key, id) => (
        <BadgeIcon data={key.label} key={id} />
      ))}
    </div>
  );
};
