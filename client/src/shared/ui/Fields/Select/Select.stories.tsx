import type { Meta } from '@storybook/react';
import { useState } from 'react';
import concentrations from 'shared/constant/concentrations';
import { Select } from './Select';
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
  const [selectV, setSelectV] = useState(concentrations[0].value);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        width: '300px',
      }}
    >
      <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
        <p>Type - Signle</p>
        <Select
          // control={control}
          name="concentration"
          value={selectV}
          onChange={(e) => setSelectV(e.target.value)}
          label="Description"
          options={concentrations}
        />
      </div>
    </div>
    // )
  );
};

// TODO: FIX ERROR
// export const Select_error = () => {
//   const [selectV, setSelectV] = useState(concentrations[0].value);

//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 30,
//         width: '300px',
//       }}
//     >
//       <div style={{ display: 'flex', gap: 5, flexDirection: 'column' }}>
//         <p>Type - Single with error</p>
//         <Select
//           // control={control}
//           name="concentration"
//           value={selectV}
//           onChange={(e) => setSelectV(e.target.value)}
//           label="Description"
//           options={concentrations}
//           error="test error"
//         />
//       </div>
//     </div>
//     // )
//   );
// };
