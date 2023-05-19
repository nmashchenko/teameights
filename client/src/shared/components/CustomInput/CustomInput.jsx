import React from 'react'
import Box from '@mui/material/Box'
import { useField } from 'formik'

import AlertIcon from '../../../assets/AlertIcon'
import { formatDateInput } from '../../../utils/formatDateString'
import { ErrorMessage, Label } from '../../styles/Tpography.styles'

import { IconSpan, Input, InputWrapper } from './CustomInput.styles'

const CustomInput = ({
  label,
  containerWidth = 'auto',
  inputWidth = '100%',
  onInputChange,
  uniqueError,
  uniqueErrorMessage,
  shouldFormatDate = false,
  shouldFormatYear = false,
  isOptional = false,
  ...props
}) => {
  const [field, meta, helpers] = useField(props)
  const isError = meta.touched && meta.error

  const handleChange = (event) => {
    const { value } = event.target
    let formattedValue = value

    if (shouldFormatDate) {
      formattedValue = formatDateInput(value) // Format the value if shouldFormatDate is true
    } else if (shouldFormatYear) {
      formattedValue = value.slice(0, 4) // Format the value if shouldFormatNumber is true
    }

    helpers.setValue(formattedValue) // Manually set the value of the field

    if (onInputChange) {
      onInputChange(formattedValue) // Pass the input value to the callback
    }
  }

  return (
    <Box width={containerWidth} sx={{ display: isOptional ? 'none' : 'block' }}>
      {label && <Label htmlFor={field.name}>{label}</Label>}
      <InputWrapper>
        <Input
          {...field}
          {...props}
          inputWidth={inputWidth}
          borderColor={isError && '#D42422'}
          animation={!isError && 'none'}
          id={field.name}
          onChange={handleChange} // Add the onChange event handler
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
