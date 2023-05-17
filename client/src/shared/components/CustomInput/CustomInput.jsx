import React from 'react'
import Box from '@mui/material/Box'
import { useField } from 'formik'

import AlertIcon from '../../../assets/AlertIcon'
import { ErrorMessage, Label } from '../../styles/Tpography.styles'

import { IconSpan, Input, InputWrapper } from './CustomInput.styles'

const CustomInput = ({
  label,
  containerWidth = 'auto',
  inputWidth = '100%',
  onInputChange,
  uniqueError,
  uniqueErrorMessage,
  ...props
}) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  const handleInputChange = (event) => {
    field.onChange(event) // Update the form field value
    if (onInputChange) {
      onInputChange(event.target.value) // Pass the input value to the callback
    }
  }

  return (
    <Box width={containerWidth}>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <InputWrapper>
        <Input
          {...field}
          {...props}
          inputWidth={inputWidth}
          borderColor={isError && '#D42422'}
          animation={!isError && 'none'}
          id={field.name}
          onChange={handleInputChange} // Add the onChange event handler
        />
        {(isError || uniqueError) && (
          <IconSpan>
            <AlertIcon />
          </IconSpan>
        )}
      </InputWrapper>
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
      {uniqueError && <ErrorMessage>{uniqueErrorMessage}</ErrorMessage>}
    </Box>
  )
}

export default CustomInput
