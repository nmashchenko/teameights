import type { Meta } from '@storybook/react';
import { concentrations } from 'shared/constant';

import { Select } from './ui';
// import { useForm } from 'react-hook-form'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  argTypes: {},
  component: Select,
  tags: ['autodocs'],
  title: 'shared/Fields/Select',
};

export default meta;
// type Story = StoryObj<typeof Select>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Select_default = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Signle</p>
      <Select
        // control={control}
        name='concentration'
        label='Single select'
        options={concentrations}
      />
    </div>
  </div>
  // )
);

export const Select_default_multiple = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Multiple</p>
      <Select
        // control={control}
        name='concentration'
        label='Multiple select'
        options={concentrations}
        isMulti
      />
    </div>
  </div>
);

export const Select_error = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Single with error</p>
      <Select
        name='concentration'
        label='Description'
        options={concentrations}
        error='test error'
      />
    </div>
  </div>
);

export const Select_error_multiple = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Multiple with error</p>
      <Select
        name='concentration'
        label='Description'
        options={concentrations}
        error='test error'
        isMulti
      />
    </div>
  </div>
);

export const Select_disabled = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Single disabled</p>
      <Select name='concentration' label='Description' options={concentrations} disabled />
    </div>
  </div>
);

export const Select_checkbox = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Checkbox</p>
      <Select name='concentration' label='Description' options={concentrations} isCheckbox />
    </div>
  </div>
);

export const Select_checkbox_multiple = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 30,
      minHeight: '400px',
      width: '300px',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <p>Type - Checkbox multy</p>
      <Select
        name='concentration'
        label='Description'
        options={concentrations}
        isCheckbox
        isMulti
      />
    </div>
  </div>
);
