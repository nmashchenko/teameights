import { Autocomplete, Chip, FormControl, TextField, ThemeProvider } from '@mui/material'
import { Field, useField, useFormikContext } from 'formik'

import ArrowDown from '../../../../assets/Arrows/ArrowDown'
import AlertIcon from '../../../../assets/Inputs/AlertIcon'
import { ErrorMessage, Label } from '../../../styles/Tpography.styles'

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
  line = true,
  value,
  ...props
}) => {
  const { setFieldValue, values } = useFormikContext()
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  /**
   * The handleChange function updates the field value based on the selected option and reason.
   */
  const handleChange = (e, option, reason) => {
    if (!multiple) {
      setFieldValue(field.name, option)
    } else {
      if (reason === 'removeOption') {
        setFieldValue(field.name, option)
      } else if (reason === 'selectOption') {
        console.log(option)
        setFieldValue(field.name, option)
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <FormControl sx={{ width: width || '100%', padding: '0px' }}>
        {!hideLabelOnSelect && label && <Label htmlFor={field.name}>{label}</Label>}

        <Field
          component={Autocomplete}
          name={field.name}
          id={field.name}
          options={options?.map((option) => option.label) ?? []}
          // isOptionEqualToValue={(option, value) => option.label === value}
          value={value ? value : null}
          disableClearable
          popupIcon={isError ? <AlertIcon /> : <ArrowDown />}
          autoHighlight
          getOptionLabel={(option) => option.label ?? option}
          multiple={multiple}
          onChange={handleChange}
          disableCloseOnSelect={multiple ? true : false}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                key={index}
                deleteIcon={_deleteicon}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              sx={{
                borderBottom: '1px solid #86878B',
                '& fieldset': { border: 'none', padding: 0 },
              }}
              name={field.name}
              {...params}
              label="" // removing jumping placeholder
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                sx: {
                  color: 'white',
                },
              }}
            />
          )}
        />
        {/* <Autocomplete
          {...field}
          {...props}
          id={field.name}
          options={options}
          disableClearable
          popupIcon={isError ? <AlertIcon /> : <ArrowDown />}
          autoHighlight
          isOptionEqualToValue={(option, value) => option.label === value}
          multiple={multiple}
          onChange={handleChange}
          disableCloseOnSelect={multiple ? true : false}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                key={index}
                deleteIcon={_deleteicon}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              sx={{
                borderBottom: '1px solid #86878B',
                '& fieldset': { border: 'none', padding: 0 },
              }}
              {...params}
              label="" // removing jumping placeholder
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                sx: {
                  color: 'white',
                },
              }}
            />
          )}
        /> */}

        {displayError && isError && <ErrorMessage>{meta.error}</ErrorMessage>}
      </FormControl>
    </ThemeProvider>
  )
}

/* The `const _deleteicon` is a variable that holds an SVG element. It represents the delete icon used
in the `renderTags` function of the `Autocomplete` component. This icon is displayed next to each
selected option in the form as a visual indicator that the option can be removed. */
const _deleteicon = (
  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.625 4.375L4.375 15.625M15.625 15.625L4.375 4.375"
      stroke="white"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CustomSelectAutocomplete
