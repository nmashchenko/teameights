import React from 'react'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import Sheet from '@mui/joy/Sheet'
import Stack from '@mui/material/Stack'
import { useField, useFormikContext } from 'formik'

import { WHITE } from '../../../../shared/constants/colors'
import { ErrorMessage } from '../../../styles/Tpography.styles'

const CustomRadioButtonsGroup = ({ options, type = 'text', ...props }) => {
  const [field, meta] = useField(props)

  // Grab values and submitForm from context
  const { values, setFieldValue } = useFormikContext()

  const isError = meta.touched && meta.error

  /**
   * The function returns true if the name is 'leader', the value is 'true', and the experience is '0'.
   * @returns The function `disableCondition` is returning a boolean value. It returns `true` if the
   * `name` parameter is equal to `'leader'`, the `values.experience` is equal to `'0'`, and the `value`
   * parameter is equal to `'true'`. Otherwise, it returns `false`.
   *
   * ! Can be extended to different types if needed
   */
  const disableCondition = (name, value) => {
    switch (name) {
      case 'leader':
        return values?.experience === '0' && value === 'true'
      // Add additional cases for different types if needed
      default:
        return false
    }
  }

  /**
   * The function checks if a button with a value of '0' was clicked and sets a form field value to an
   * empty string if true.
   *
   * ! Can be extended to different types if needed
   */
  const checkClicked = (e) => {
    switch (e.target.value) {
      case '0':
        setFieldValue('leader', '')
        break
      // Add additional cases for different types if needed
      default:
        break
    }
  }

  /**
   * The function checks the label color based on the checked status and value of a checkbox input.
   * @returns The function `checkLabelColor` returns a string representing a color code. The color code
   * returned depends on the values of the `checked` and `value` parameters, as well as the value of
   * `values.experience`. If `checked` is true and `values.experience` is not equal to '0' or if `value`
   * is not equal to 'true', the color code `
   * ! Can be extended to different types if needed
   */
  const checkLabelColor = (checked, value) => {
    switch (true) {
      case checked && !(values?.experience === '0' && value === 'true'):
        return '#5BD424'
      case values?.experience === '0' && value === 'true':
        return '#86878b68'
      default:
        return WHITE.main
    }
  }

  return (
    <Stack gap="1rem">
      <RadioGroup
        aria-labelledby="experience-label"
        size="lg"
        sx={{ gap: '1rem', flexDirection: 'row', flexWrap: 'wrap' }}
        {...field}
        {...props}
      >
        {options.map(({ value, label }) => (
          <Sheet
            key={label}
            sx={{
              padding: '6px 16px 4px 16px',
              borderRadius: '10px',
              color: values.experience === '0' ? '#86878b68' : '#86878b',
            }}
          >
            <Radio
              label={type === 'text' ? label : label === '0' ? 'No experience' : `${label} years`}
              overlay
              disableIcon
              value={value}
              sx={{
                minWidth: '100px',
              }}
              id={value}
              disabled={disableCondition(props.name, value)}
              onChange={(e) => checkClicked(e)}
              slotProps={{
                label: ({ checked }) => ({
                  sx: {
                    fontWeight: '400px',
                    fontSize: '16px',
                    // text inside the buttons
                    color: checkLabelColor(checked, value),
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                  },
                }),
                action: ({ checked }) => ({
                  sx: {
                    border: '2px solid #86878B',
                    '&:hover': {
                      backgroundColor: '#2F3239',
                      border: checked ? '2px solid #5BD424' : '2px solid #86878B',
                      transform: 'scale(1.04)',
                    },
                    ...(checked && {
                      borderColor: '#5BD424',
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
