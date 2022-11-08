// * Modules
import React, { useState, useEffect } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { includes } from 'lodash'

// * Redux
import { useSelector } from 'react-redux'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import SnackBar from '../../../../SnackBar/SnackBar'
import Stepper from '../../Stepper/Stepper'

// * Components
import NameUsernameArea from './Components/NameUsernameArea'
import AgeArea from './Components/AgeArea'
import CountryArea from './Components/CountryArea'
import AboutMeArea from './Components/AboutMeArea'

// * Hooks
import useInfoSubmit from './Hooks/useInfoSubmit'
import personalInfoHooks from './Hooks/personalInfoHooks'

// * Styles
import {
  Container,
  RegistrationContainer,
  ContentContainer,
  GroupContainer,
  SectionContainer,
  ResetButton,
  ButtonContainer,
  Button,
  ButtonDisabled,
} from './UserPersonalInfo.styles'

function NamePart() {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(userData.userRealName)
  const [username, setUsername] = useState(userData.userUsername)
  const [age, setAge] = useState(userData.userAge)
  const [country, setCountry] = useState(userData.userCountry)
  const [description, setDescription] = useState(userData.userDescription)
  const [errors, setErrors] = useState([])

  // * useEffect
  useEffect(() => {
    userData.userUsername !== ''
      ? setUsername(userData.userUsername)
      : setName(userData.userRealName)
  }, [])

  // * Error messages
  const errorMessage = `You need to fix ${errors.length} error(s) before continuing`
  const alternativeErrorMessage = 'Username is already taken!'

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleReset = () => {
    userData.userUsername !== '' ? setName('') : setUsername('')
    setAge('')
    setCountry('')
    setDescription('')
    setErrors([])
  }

  // * useInfoSubmit hook
  const handleSubmit = useInfoSubmit(
    userData,
    username,
    name,
    age,
    country,
    description,
    setOpen,
    setErrors,
  )

  // * Other hooks to handle age, name, username, country, description
  const handleAge = personalInfoHooks.useHandleAge(setErrors, setAge)
  const handleName = personalInfoHooks.useHandleName(setErrors, setName)
  const handleUsername = personalInfoHooks.useHandleUsername(setErrors, setUsername, errors)
  const handleCountry = personalInfoHooks.useHandleCountry(setErrors, setCountry)
  const handleDescription = personalInfoHooks.useHandleDescription(setErrors, setDescription)

  return (
    <>
      <form onSubmit={handleSubmit}>
        {open && errors.length > 0 && (
          <SnackBar
            handleClose={handleClose}
            open={open}
            error={
              includes(errors, 'Username is already taken!')
                ? alternativeErrorMessage
                : errorMessage
            }
            vertical="bot"
          />
        )}
        <Container>
          <Stepper step={step} />
          <RegistrationContainer>
            <NavLogo sectionName={'User Profile'} />
            <ContentContainer>
              <SectionContainer>
                <GroupContainer>
                  <NameUsernameArea
                    userData={userData}
                    errors={errors}
                    handleFunction={handleName}
                    nameUsername="Full Name"
                    name={name}
                  />
                </GroupContainer>
                <GroupContainer>
                  <CountryArea errors={errors} handleCountry={handleCountry} country={country} />
                </GroupContainer>
              </SectionContainer>

              <SectionContainer margin="80px 0 0 40px">
                <GroupContainer>
                  <NameUsernameArea
                    userData={userData}
                    errors={errors}
                    handleFunction={handleUsername}
                    nameUsername="Username"
                    name={username}
                  />
                </GroupContainer>
                <GroupContainer>
                  <AgeArea errors={errors} handleAge={handleAge} age={age} />
                </GroupContainer>
              </SectionContainer>

              <AboutMeArea
                errors={errors}
                handleDescription={handleDescription}
                description={description}
              />
              <ButtonContainer>
                <ResetButton type="button" onClick={handleReset}>
                  Reset all
                </ResetButton>
                {errors.length > 0 ? (
                  <ButtonDisabled>
                    <WarningIcon />
                  </ButtonDisabled>
                ) : (
                  <Button type="submit">Next</Button>
                )}
              </ButtonContainer>
            </ContentContainer>
          </RegistrationContainer>
        </Container>
      </form>
    </>
  )
}

export default NamePart
