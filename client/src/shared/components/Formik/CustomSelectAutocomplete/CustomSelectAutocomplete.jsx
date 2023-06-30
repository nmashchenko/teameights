import { Autocomplete, FormControl, TextField, ThemeProvider } from '@mui/material'
import { useField, useFormikContext } from 'formik'

import ArrowDown from '../../../../assets/Arrows/ArrowDown'
import { Label } from '../../../styles/Tpography.styles'

import { theme } from './CustomSelectAutocomplete.theme'

const CustomSelectAutocomplete = ({
  label,
  options,
  multiple = false,
  width,
  placeholder,
  displayError = true,
  margin,
  hideLabelOnSelect = false,
  ...props
}) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ width: width || '100%', padding: '0px' }}>
        {!hideLabelOnSelect && label && <Label htmlFor={field.name}>{label}</Label>}

        <Autocomplete
          {...field}
          {...props}
          id={field.name}
          options={options}
          disableClearable
          popupIcon={<ArrowDown />}
          autoHighlight
          isOptionEqualToValue={(option, value) => option.label === value}
          multiple={multiple}
          onChange={(e, option) => setFieldValue(field.name, option.label)}
          renderInput={(params) => (
            <TextField
              sx={{
                borderBottom: '2px solid #86878B',
                '& fieldset': { border: 'none', padding: 0 },
              }}
              {...params}
              label="" // removing jumping placeholder
              placeholder={label}
              InputProps={{
                ...params.InputProps,
                sx: { color: 'white' },
              }}
            />
          )}
        />

        {/* {line && <Line background={isError && '#cf625e'} animation={!isError && 'none'} />}
      {displayError && isError && <ErrorMessage>{meta.error}</ErrorMessage>} */}
      </FormControl>
    </ThemeProvider>
  )
}

export default CustomSelectAutocomplete
