import React from 'react'
import Stack from '@mui/material/Stack'
import { useField, useFormikContext } from 'formik'

import { ErrorMessage, Label } from '../../styles/Tpography.styles'

import { TextArea, TextAreaWrapper, TextLimitContainer } from './CustomTextArea.styles'

const CustomTextArea = ({ label, options, maxLength, ...props }) => {
  const [field, meta] = useField(props)
  const { values } = useFormikContext()
  const isError = meta.touched && meta.error

  return (
    <TextAreaWrapper>
      <Label htmlFor={field.name}>{label}</Label>
      <TextArea
        {...field}
        {...props}
        id={field.name}
        maxLength={maxLength}
        animation={!isError && 'none'}
      />
      <Stack
        direction="row"
        justifyContent={isError ? 'space-between' : 'flex-end'}
        alignItems="center"
      >
        {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
        <TextLimitContainer>
          <Label>
            {values.description.length}/{maxLength}
          </Label>
        </TextLimitContainer>
      </Stack>
    </TextAreaWrapper>
  )
}

export default CustomTextArea
