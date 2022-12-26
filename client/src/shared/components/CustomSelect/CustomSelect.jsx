import React from 'react'
import FormControl from '@mui/material/FormControl'
import { useField } from 'formik'

import { ErrorMessage, Text } from '../../styles/Tpography.styles'

import { Line, MenuProps, SelectCustom } from './CustomSelect.styles'

const CustomSelect = ({ label, multiple = false, width, ...props }) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <FormControl sx={{ margin: '10px 0 0 0', width: width || '15rem', padding: '0px' }}>
      <Text fontWeight="400">{label}</Text>
      <SelectCustom
        {...field}
        {...props}
        multiple={multiple}
        $isError={isError}
        MenuProps={MenuProps}
      />
      <Line background={isError && '#cf625e'} animation={!isError && 'none'} />
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FormControl>
  )
}

export default CustomSelect
