// * Modules
import React, { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Other
import ProgressBar from '../../ProgressBar/ProgressBar'
import NavLogo from '../../NavLogo/NavLogo'
import yupValidation from '../../YupValidations/YupValidations'
import Alert from '../../Alert/Alert'

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  InputField,
} from './NamePart.styles'

function NamePart() {
  // * Redux
  const dispatch = useDispatch()
  const { setActiveState, setProgress, setUserName } = registrationAuth.actions
  const { progress } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  let [name, setName] = useState('')
  const [errors, setErrors] = useState([])

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await yupValidation.nameSchema.validate({ name })
      dispatch(setUserName(name))
      dispatch(setActiveState('CountryPart'))
      dispatch(setProgress('24'))
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
            <TopText>What is your name?</TopText>
          </div>
          <MiddleTextContainer>
            <InputField onChange={(e) => setName(e.target.value)} />
          </MiddleTextContainer>
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  )
}

export default NamePart
