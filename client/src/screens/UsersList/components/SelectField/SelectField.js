import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import './SelectField.css'

import {
  Item,
  PlaceholderText,
  CustomSelect,
} from './SelectField.styles'

const ITEM_HEIGHT = 318;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      background: 'white',
      boxSizing: 'border-box',
      padding: '5px',
      margin: '10px 0',
      border: '1px solid black',
      borderRadius: '0.75em',
      color: 'black',
      overflow: 'auto',
      outline: '0px',
    },
  },
};


const names = [
  'Ukraine',
  'Finland',
  'Uzbekistan',
  'Kazahstan',
  'Latvia',
];



export default function MultipleSelect(props) {
  const [data, setData] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setData(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 170, }}>
        <CustomSelect
          multiple
          displayEmpty
          value={data}
          onChange={handleChange}
          input={<OutlinedInput />}
          variant='standard'
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <PlaceholderText>{props.inputName}</PlaceholderText>;
            }
            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          classes={{
            icon: {color: 'white'},
          }}
          sx={{
            borderRadius: '0.75em',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            height: '45px'
          }}
        >
          <Item disabled value="">
            <em>Select 1 or more</em>
          </Item>
          {names.map((name) => (
            <Item
              key={name}
              value={name}
            >
              {name}
            </Item>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}