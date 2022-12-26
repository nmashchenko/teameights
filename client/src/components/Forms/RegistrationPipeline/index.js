import React from 'react'
import InitialPart from './components/RegistrationParts/InitialPart/InitialPart'

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
