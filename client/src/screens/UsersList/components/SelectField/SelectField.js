// * Modules
import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'

// * CSS
import './SelectField.css'

// * Styles
import { Item, PlaceholderText, CustomSelect } from './SelectField.styles'

// * Helpers
import MenuProps from './MenuProps'

// * Assets
import ArrowDown from '../../../../assets/Arrows/ArrowDown'

export default function MultipleSelect(props) {
  return (
    <div>
      <FormControl sx={{ m: 1, width: 130 }}>
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
