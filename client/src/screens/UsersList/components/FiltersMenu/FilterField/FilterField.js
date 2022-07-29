// * Modules
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import CodeIcon from '@mui/icons-material/Code'

//* Constants
import MenuProps from '../MenuProps'

// * Assets
import ArrowDown from '../../../../../assets/Arrows/ArrowDown'

// * Styles
import { Item, CustomSelect } from './FilterField.styles'

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
