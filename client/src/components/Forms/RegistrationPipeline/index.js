import React, { useEffect } from 'react'
import InitialPart from './components/RegistrationParts/InitialPart/InitialPart'
import UserConcentration from './components/RegistrationParts/UserConcentration/UserConcentration'
import UserExperience from './components/RegistrationParts/UserExperience/UserExperience'
import Education from './components/RegistrationParts/EducationPart/Education'
import Links from './components/RegistrationParts/LinksPart/Links'
import UserPersonalInfo from './components/RegistrationParts/UserPersonalInfo/UserPersonalInfo'
import UserAvatar from './components/RegistrationParts/UserAvatar/UserAvatar'
import { SnackbarProvider } from 'notistack'
import { styled } from '@mui/material'

// * Redux
import { useSelector } from 'react-redux'
import MultiStepRegistration from "./components/MultiStepRegistration/MultiStepRegistration";


function FinishRegistration() {
  const {isFinishRegistrationStarted } = useSelector((state) => state.registrationReducer)


  return (
    <>
        {isFinishRegistrationStarted ? <MultiStepRegistration /> : <InitialPart />}
    </>
  )
}

export default FinishRegistration
