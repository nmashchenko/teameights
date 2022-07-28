// * Modules
import React, { useState, useMemo, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'
import countryList from 'react-select-country-list'

// * Other
import ProgressBar from '../../ProgressBar/ProgressBar'
import NavLogo from '../../NavLogo/NavLogo'
import yupValidation from '../../YupValidations/YupValidations'
import Alert from '../../Alert/Alert'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  SelectField,
} from './CountryPart.styles'

function CountryPart() {
  // * Redux
  const dispatch = useDispatch()
  const { setActiveState, setProgress, setUserCountry } = registrationAuth.actions
  const { progress } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  // * Functions
  const changeHandler = (value) => {
    setValue(value)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      value
        ? await yupValidation.countrySchema.validate(value)
        : await yupValidation.countrySchema.validate({ value })
      dispatch(setUserCountry(value.label))
      dispatch(setActiveState('AgePart'))
      dispatch(setProgress('36'))
    } catch (err) {
      setErrors(err.errors)
      setOpen(true)
    }
  }

  useEffect(() => {}, [errors])

  return (
    <>
      <NavLogo />
      {errors.length > 0 && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Alert onClose={handleClose} severity="error">
            {errors[0]}
          </Alert>
        </Snackbar>
      )}
      <Container>
        <ProgressBar done={progress} />
        <CardContainer>
          <div>
            <TopText>Where are you from?</TopText>
          </div>
          <MiddleTextContainer>
            <SelectField
              options={options}
              value={value}
              onChange={changeHandler}
              theme={(theme) => ({
                ...theme,
                borderRadius: 5,
                colors: {
                  ...theme.colors,
                  primary25: '#E0FF00',
                  primary: 'black',
                },
              })}
            />
          </MiddleTextContainer>
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  )
}

export default CountryPart
