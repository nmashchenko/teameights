import React from 'react'
// * Redux
import { useSelector } from 'react-redux'

import InitialPart from './components/InitialPart/InitialPart'
import MultiStepRegistration from './components/MultiStepRegistration/MultiStepRegistration'

function FinishRegistration() {
  const { isFinishRegistrationStarted } = useSelector((state) => state.registrationReducer)

  return <>{isFinishRegistrationStarted ? <MultiStepRegistration /> : <InitialPart />}</>
}

export default FinishRegistration
