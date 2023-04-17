import React from 'react'
import Box from '@mui/material/Box'
import { useField } from 'formik'

import { ErrorMessage, Label } from '../../styles/Tpography.styles'

import { Input } from './CustomInput.styles'

const CustomInput = ({ label, containerWidth = 'auto', inputWidth = '100%', ...props }) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <Box width={containerWidth}>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <Input
        {...field}
        {...props}
        inputWidth={inputWidth}
        borderColor={isError && '#cf625e'}
        animation={!isError && 'none'}
        id={field.name}
      />
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Box>
  )
}

export default CustomInput
