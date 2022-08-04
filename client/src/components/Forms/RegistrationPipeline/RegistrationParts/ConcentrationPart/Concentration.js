// * Modules
import React, { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'

// * Other
import ProgressBar from '../../ProgressBar/ProgressBar'
import { options } from './Concentration.options'
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
} from './Concentration.styles'

function Concentration() {
  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [value, setValue] = useState('')

  // * Redux
  const dispatch = useDispatch()
  const { setActiveState, setProgress, setUserConcentration } = registrationAuth.actions

  const { progress } = useSelector((state) => state.registrationReducer)

  // * Functions
  const handleSubmit = async () => {
    try {
      value
        ? await yupValidation.concentrationSchema.validate(value)
        : await yupValidation.concentrationSchema.validate({ value })
      dispatch(setUserConcentration(value.label))
      dispatch(setActiveState('Experience'))
      dispatch(setProgress('72'))
    } catch (err) {
      setErrors(err.errors)
      setOpen(true)
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const changeHandler = (value) => {
    setValue(value)
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
            <TopText>What is your concentration?</TopText>
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

export default Concentration
