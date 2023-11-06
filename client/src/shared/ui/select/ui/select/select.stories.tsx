import type { Meta } from '@storybook/react';
import { specialities } from '@/shared/constant';
import { Select } from './select';
// import { useForm } from 'react-hook-form'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: 'shared/Fields/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
// type Story = StoryObj<typeof Select>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Select_default = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Signle</p>
        <Select
          // control={control}
          name='concentration'
          label='Single select'
          options={specialities}
        />
      </div>
    </div>
    // )
  );
};

export const Select_default_multiple = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Multiple</p>
        <Select
          // control={control}
          name='concentration'
          label='Multiple select'
          options={specialities}
          isMulti={true}
        />
      </div>
    </div>
  );
};

export const Select_error = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Single with error</p>
        <Select
          name='concentration'
          label='Description'
          options={specialities}
          error='test error'
        />
      </div>
    </div>
  );
};

export const Select_error_multiple = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Multiple with error</p>
        <Select
          name='concentration'
          label='Description'
          options={specialities}
          error='test error'
          isMulti
        />
      </div>
    </div>
  );
};

export const Select_disabled = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Single disabled</p>
        <Select name='concentration' label='Description' options={specialities} disabled />
      </div>
    </div>
  );
};

export const Select_checkbox = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Checkbox</p>
        <Select name='concentration' label='Description' options={specialities} isCheckbox />
      </div>
    </div>
  );
};

export const Select_checkbox_multiple = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
        minHeight: '400px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Checkbox multy</p>
        <Select
          name='concentration'
          label='Description'
          options={specialities}
          isCheckbox
          isMulti
        />
      </div>
    </div>
  );
};
