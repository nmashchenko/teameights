import { Meta } from '@storybook/react';
import { SelectAutocomplete } from '@/shared/ui/select/ui/select-autocomplete/select-autocomplete';

const meta: Meta<typeof SelectAutocomplete> = {
  title: 'shared/Fields/Select-Autocomplete',
  component: SelectAutocomplete,
  tags: ['autodocs'],
  argTypes: {},
};

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
        <p>For unauthenticated requests, the rate limit allows for up to 60 requests per hour.</p>
        <SelectAutocomplete name='concentration' />
      </div>
    </div>
    // )
  );
};

export default meta;
