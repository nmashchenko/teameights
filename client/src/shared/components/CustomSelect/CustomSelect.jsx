import React from 'react'
import FormControl from '@mui/material/FormControl'
import { useField } from 'formik'

import {
  Item,
  PlaceholderText,
} from '../../../screens/UsersList/components/SelectField/SelectField.styles'
import { ErrorMessage, Label, Text } from '../../styles/Tpography.styles'

import { Line, MenuProps, SelectCustom } from './CustomSelect.styles'

const CustomSelect = ({
  label,
  options,
  multiple = false,
  width,
  margin,
  styles,
  placeholder = 'Select',
  displayError = true,
  line = true,
  hideLabelOnSelect = false,
  ...props
}) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <FormControl
      sx={{ margin: margin || '10px 0 0 0', width: width || '15rem', padding: '0px', ...styles }}
    >
      {!hideLabelOnSelect && label && <Label htmlFor={field.name}>{label}</Label>}

      <SelectCustom
        {...field}
        {...props}
        displayEmpty
        multiple={multiple}
        $isError={isError}
        MenuProps={MenuProps}
        id={field.name}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <PlaceholderText>{placeholder}</PlaceholderText>
          }

          return selected
        }}
      >
        {options.map(({ label }) => (
          <Item key={label} value={label}>
            {label}
          </Item>
        ))}
      </SelectCustom>
      {line && <Line background={isError && '#cf625e'} animation={!isError && 'none'} />}
      {displayError && isError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormControl>
  )
}

export default CustomSelect
