// * Modules
import React, { useState, useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar'

// * Assets
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
  InputField,
} from './Links.styles'

function Links() {
  // * Redux
  const dispatch = useDispatch()
  const { setActiveState, setProgress, setUserLinks } = registrationAuth.actions
  const { progress } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  let [github, setGithub] = useState('')
  let [linkedIn, setLinkedIn] = useState('')
  let [instagram, setInstagram] = useState('')
  let [telegram, setTelegram] = useState('')

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleSubmit = async () => {
    try {
      await yupValidation.urlsSchema.validate({ github, linkedIn, instagram, telegram })
      dispatch(setUserLinks({ github, linkedIn, instagram, telegram }))
      dispatch(setActiveState('Leader'))
      dispatch(setProgress('100'))
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
            <TopText>Do you have any social links?</TopText>
          </div>
          <MiddleTextContainer>
            <InputField
              maxlength="35"
              placeholder="Github"
              onChange={(e) => setGithub(e.target.value)}
            />
            <InputField
              maxlength="35"
              placeholder="LinkedIn"
              onChange={(e) => setLinkedIn(e.target.value)}
            />
            <InputField
              maxlength="35"
              placeholder="Telegram"
              onChange={(e) => setTelegram(e.target.value)}
            />
            <InputField
              maxlength="35"
              placeholder="Instagram"
              onChange={(e) => setInstagram(e.target.value)}
            />
          </MiddleTextContainer>
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  )
}

export default Links
