// * Modules
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'

// * Assets
import ArrowDown from '../../../../assets/Arrows/ArrowDown'

// * Helpers
import MenuProps from './MenuProps'
// * Styles
import { CustomSelect, Item, PlaceholderText } from './SelectField.styles'

// * CSS
import './SelectField.css'

export default function MultipleSelect(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 130, background: 'transparent' }}>
        <CustomSelect
          IconComponent={ArrowDown}
          multiple
          displayEmpty
          value={props.data}
          onChange={props.handleChange}
          input={<OutlinedInput />}
          variant="standard"
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <PlaceholderText>{props.inputName}</PlaceholderText>
            }

            return selected.join(', ')
          }}
          MenuProps={MenuProps}
          sx={{
            borderRadius: '0.75em',
            background: 'none',
            height: '45px',
            color: 'white',
            fontSize: '0.875rem',
            fontWeight: '600',
          }}
        >
          <Item disabled value="">
            <em>Select 1 or more</em>
          </Item>
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
