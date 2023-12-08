import type { Meta } from '@storybook/react';
import { frameworks, fields, methodologies } from '@/shared/constant';
import { BadgeText } from './badge-text';
import { Typography } from '@/shared/ui';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof BadgeText> = {
  title: 'shared/BadgeText',
  component: BadgeText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BadgeFramework_default = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
        <Typography>Frameworks:</Typography>
        {frameworks.map((key, index) => (
          <BadgeText data={key.label} key={index} />
        ))}
      </div>
    </>
  );
};

export const BadgeField_default = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
        <Typography>Fields:</Typography>
        {fields.map((key, index) => (
          <BadgeText data={key.label} key={index} />
        ))}
      </div>
    </>
  );
};

export const BadgeMethodology_default = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexWrap: 'wrap' }}>
        <Typography>Methodologies:</Typography>
        {methodologies.map((key, index) => (
          <BadgeText data={key.label} key={index} />
        ))}
      </div>
    </>
  );
};
