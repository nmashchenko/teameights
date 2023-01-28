import React from 'react'
import Stack from '@mui/material/Stack'
import { useField, useFormikContext } from 'formik'

import { ErrorMessage, Text } from '../../styles/Tpography.styles'

import { TextArea, TextAreaWrapper, TextCounter, TextLimitContainer } from './CustomTextArea.styles'

const CustomTextArea = ({ label, options, maxLength, ...props }) => {
  const [field, meta] = useField(props)
  const { values } = useFormikContext()
  const isError = meta.touched && meta.error

  return (
    <TextAreaWrapper>
      <Text fontSize="18px" fontWeight="700">
        {label}
      </Text>
      <TextArea
        {...field}
        {...props}
        border={isError && '1px solid #cf625e'}
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
          <TextCounter color={isError ? '#cf625e' : undefined}>
            {values.description.length}/{maxLength}
          </TextCounter>
        </TextLimitContainer>
      </Stack>
    </TextAreaWrapper>
  )
}

export default CustomTextArea
