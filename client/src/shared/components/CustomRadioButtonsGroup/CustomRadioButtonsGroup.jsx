import React from 'react'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import Sheet from '@mui/joy/Sheet'
import Stack from '@mui/material/Stack'
import { useField } from 'formik'

import { GREEN, WHITE } from '../../../constants/colors'
import { ErrorMessage } from '../../styles/Tpography.styles'

const CustomRadioButtonsGroup = ({ options, ...props }) => {
  const [field, meta] = useField(props)

  const isError = meta.touched && meta.error

  return (
    <Stack gap="1rem">
      <RadioGroup
        aria-labelledby="experience-label"
        size="lg"
        sx={{ gap: '3rem', flexDirection: 'row' }}
        {...field}
        {...props}
      >
        {options.map(({ value, label }) => (
          <Sheet
            key={label}
            sx={{
              p: 2,
              borderRadius: 'md',
              borderColor: isError ? '#cf625e' : WHITE.main,
              boxShadow: 'sm',
              color: WHITE.main,
            }}
          >
            <Radio
              label={label}
              overlay
              disableIcon
              value={value}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: 'lg',
                    fontSize: 'md',
                    color: checked ? 'text.primary' : 'text.secondary',
                  },
                }),
                action: ({ checked }) => ({
                  sx: {
                    borderColor: isError ? '#cf625e' : WHITE.main,
                    '&:hover': {
                      backgroundColor: checked ? GREEN.alternativeBorder : 'inherit',
                      transform: 'scale(1.02)',
                    },
                    ...(checked && {
                      border: 'none',
                      backgroundColor: GREEN.alternativeBorder,
                    }),
                  },
                }),
              }}
            />
          </Sheet>
        ))}
      </RadioGroup>
      {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
    </Stack>
  )
}

export default CustomRadioButtonsGroup
