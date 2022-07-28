import * as React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import ArrowDown from '../../../../../assets/Arrows/ArrowDown'
import { Item, PlaceholderText, CustomSelect } from './FilterField.styles'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import CodeIcon from '@mui/icons-material/Code'
import './FielterField.css'

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: '400px',
      background: '#2E3239',
      boxSizing: 'border-box',
      padding: '5px',
      margin: '10px 0',
      boxShadow: '0px 5px 15px rgba(95, 122, 219, 0.12)',
      borderRadius: '0.75em',
      color: 'white',
      overflow: 'auto',
      outline: '0px',
    },
  },
}

export default function MultipleSelect(props) {
  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <CustomSelect
          IconComponent={ArrowDown}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={props.data}
          onChange={props.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  icon={<CodeIcon />}
                  key={value}
                  label={value}
                  sx={{
                    background: '#2E3239',
                    color: 'white',
                    borderRadius: '5px',
                    marginRight: '5px',
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.options.map(({ label, value }) => (
            <Item key={label} value={label}>
              {label}
            </Item>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  )
}
