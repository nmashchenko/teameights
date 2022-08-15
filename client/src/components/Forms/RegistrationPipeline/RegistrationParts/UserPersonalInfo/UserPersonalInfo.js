// * Modules
import React, { useState, useEffect, useMemo } from 'react'
import { isEmpty, isEqual } from 'lodash'

// * Redux
import { useSelector, useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import yupValidation from '../../YupValidations/YupValidations'
import SnackBar from '../../../../SnackBar/SnackBar'
import Stepper from '../../Stepper/Stepper'
import CustomSelect from '../../CustomSelect/CustomSelect'

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
  WordsCounterContainer,
  WordsCounter,
} from './UserPersonalInfo.styles'

function NamePart() {
  // * Redux
  const dispatch = useDispatch()
  const { setActiveState, setStep, setUserPersonalInfoWithName, setUserPersonalInfoWithUsername } =
    registrationAuth.actions
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [country, setCountry] = useState('')
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState([])

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isEqual(userData.userUsername, '')) {
      yupValidation.userPersonalInfoUsername
        .validate(
          {
            username,
            age,
            country,
            description,
          },
          { abortEarly: false },
        )
        .then(function () {
          console.log('success')
          dispatch(setUserPersonalInfoWithUsername({ username, age, country, description }))
          dispatch(setActiveState('CountryPart'))
          dispatch(setStep(1))
        })
        .catch(function (err) {
          setOpen(true)
          err.inner.forEach((e) => {
            console.log(e.message, e.path)
            setErrors((prevErrors) => [...prevErrors, e.path])
          })
        })
    } else {
      yupValidation.userPersonalInfoName
        .validate({ name, age, country, description }, { abortEarly: false })
        .then(function () {
          dispatch(setUserPersonalInfoWithName({ name, age, country, description }))
          dispatch(setActiveState('CountryPart'))
          dispatch(setStep(1))
        })
        .catch(function (err) {
          setOpen(true)
          err.inner.forEach((e) => {
            console.log(e.message, e.path)
            setErrors((prevErrors) => [...prevErrors, e.path])
          })
        })
    }
  }

  useEffect(() => {}, [errors])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NavLogo />
        {open && (
          <SnackBar
            handleClose={handleClose}
            open={open}
            error={'You can not advance before fixing errors!!'}
          />
        )}
        <Container>
          {errors}
          <Stepper step={step} />
          <CardContainer>
            <TopContainer>
              <Text fontSize="18px" fontWeight="700" margin="0 0 10px 0">
                User Profile
              </Text>
            </TopContainer>
            <MiddleContainer>
              <LeftContainer>
                <Text fontSize="17px" fontWeight="400">
                  {isEqual(userData.userUsername, '') ? 'Username' : 'Full Name'}
                </Text>
                {isEqual(userData.userUsername, '') ? (
                  <Input onChange={(e) => setUsername(e.target.value)} />
                ) : (
                  <Input onChange={(e) => setName(e.target.value)} />
                )}
                <Text fontSize="17px" fontWeight="400">
                  Country
                </Text>
                <CustomSelect country={country} setCountry={setCountry} />
                <Text fontSize="17px" fontWeight="400">
                  Age
                </Text>
                <Input onChange={(e) => setAge(e.target.value)} />
              </LeftContainer>
              <RightContainer>
                <div>
                  <Text fontSize="17px" fontWeight="400">
                    About me
                  </Text>
                  <TextArea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Start typing here..."
                    maxLength={200}
                  />
                  <WordsCounterContainer>
                    {!isEqual(description.length, 200) ? (
                      <WordsCounter>{description.length}/200</WordsCounter>
                    ) : (
                      <WordsCounter color="#cf625e">{description.length}/200</WordsCounter>
                    )}
                  </WordsCounterContainer>
                </div>
                <ButtonContainer>
                  <Button type="submit">Next</Button>
                </ButtonContainer>
              </RightContainer>
            </MiddleContainer>
          </CardContainer>
        </Container>
      </form>
    </>
  )
}

export default NamePart
