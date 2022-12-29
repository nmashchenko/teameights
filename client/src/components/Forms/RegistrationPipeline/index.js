import React from 'react'
// * Redux
import { useSelector } from 'react-redux'

import MultiStepRegistration from './components/MultiStepRegistration/MultiStepRegistration'
import InitialPart from './components/RegistrationParts/InitialPart/InitialPart'

function FinishRegistration() {
  const { isFinishRegistrationStarted } = useSelector((state) => state.registrationReducer)

  return <>{isFinishRegistrationStarted ? <MultiStepRegistration /> : <InitialPart />}</>
}

export default FinishRegistration
