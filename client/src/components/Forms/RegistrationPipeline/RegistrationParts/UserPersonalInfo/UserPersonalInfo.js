// * Modules
import React, { useState, useEffect } from 'react'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import yupValidation from '../../YupValidations/YupValidations'
import SnackBar from '../../../../SnackBar/SnackBar'
import Stepper from '../../Stepper/Stepper'

import {
  Container,
  CardContainer,
  TopContainer,
  Text,
  MiddleContainer,
  LeftContainer,
  Input,
  RightContainer,
  TextArea,
  ButtonContainer,
  Button,
} from './UserPersonalInfo.styles'

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
      {errors.length > 0 && <SnackBar handleClose={handleClose} open={open} error={errors[0]} />}
      <Container>
        <Stepper />
        <CardContainer>
          <TopContainer>
            <Text fontSize="18px" fontWeight="700" margin="0 0 10px 0">
              User Profile
            </Text>
          </TopContainer>
          <MiddleContainer>
            <LeftContainer>
              <Text fontSize="17px" fontWeight="400">
                Full Name
              </Text>
              <Input />
              <Text fontSize="17px" fontWeight="400">
                Age
              </Text>
              <Input />
              <Text fontSize="17px" fontWeight="400">
                Country
              </Text>
              <Input />
            </LeftContainer>
            <RightContainer>
              <div>
                <Text fontSize="17px" fontWeight="400">
                  About me
                </Text>
                <TextArea />
              </div>
              <ButtonContainer>
                <Button>Next</Button>
              </ButtonContainer>
            </RightContainer>
          </MiddleContainer>
        </CardContainer>
      </Container>
    </>
  )
}

export default NamePart
