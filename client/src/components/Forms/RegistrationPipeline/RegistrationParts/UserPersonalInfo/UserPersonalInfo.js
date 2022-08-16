// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'

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
  CardContainer,
  TopContainer,
  Text,
  MiddleContainer,
  LeftContainer,
  RightContainer,
  ButtonContainer,
  Button,
  ButtonDisabled,
} from './UserPersonalInfo.styles'

function NamePart() {
  // * Redux
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
  const handleUsername = personalInfoHooks.useHandleUsername(setErrors, setUsername)
  const handleCountry = personalInfoHooks.useHandleCountry(setErrors, setCountry)
  const handleDescription = personalInfoHooks.useHandleDescription(setErrors, setDescription)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <NavLogo />
        {open && errors.length > 0 && (
          <SnackBar
            handleClose={handleClose}
            open={open}
            error={`You need to fix ${errors.length} error(s) before continuing`}
            vertical="bot"
          />
        )}
        <Container>
          <Stepper step={step} />
          <CardContainer>
            <TopContainer>
              <Text fontSize="18px" fontWeight="700" margin="0 0 10px 0">
                User Profile
              </Text>
            </TopContainer>
            <MiddleContainer>
              <LeftContainer>
                <NameUsernameArea
                  userData={userData}
                  errors={errors}
                  handleUsername={handleUsername}
                  handleName={handleName}
                />
                <CountryArea errors={errors} handleCountry={handleCountry} country={country} />
                <AgeArea errors={errors} handleAge={handleAge} />
              </LeftContainer>
              <RightContainer>
                <AboutMeArea
                  errors={errors}
                  handleDescription={handleDescription}
                  description={description}
                />
                <ButtonContainer>
                  {errors.length > 0 ? (
                    <ButtonDisabled>
                      <WarningIcon />
                    </ButtonDisabled>
                  ) : (
                    <Button type="submit">Next</Button>
                  )}
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
