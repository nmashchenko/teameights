import React from 'react'
import FormControl from '@mui/material/FormControl'
import { useField } from 'formik'

import { ErrorMessage, Text } from '../../styles/Tpography.styles'

import { Line, MenuProps, SelectCustom } from './CustomSelect.styles'
import {Item, PlaceholderText} from "../../../screens/UsersList/components/SelectField/SelectField.styles";

const CustomSelect = ({ label, options,  multiple = false, width, styles, line = true, hideLabelOnSelect = false, ...props }) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error
  return (
    <FormControl sx={{ margin: '10px 0 0 0', width: width || '15rem', padding: '0px', ...styles }}>
        {!hideLabelOnSelect  &&  <Text fontWeight="700">{label}</Text>}
      <SelectCustom
        {...field}
        {...props}
        displayEmpty
        multiple={multiple}
        $isError={isError}
        MenuProps={MenuProps}
      >
          {options.map(({ label }) => (
              <Item key={label} value={label}>
                  {label}
              </Item>
          ))}
      </SelectCustom>
      {line && <Line background={isError && '#cf625e'} animation={!isError && 'none'}/>}
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormControl>
  )
}

export default CustomSelect
