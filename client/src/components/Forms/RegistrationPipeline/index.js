import React, { useState, useEffect } from 'react'
import InitialPart from './RegistrationParts/InitialPart/InitialPart'
import Programming from './RegistrationParts/ProgrammingLanguagesPart/Programming'
import ConcentrationPart from './RegistrationParts/ConcentrationPart/Concentration'
import Experience from './RegistrationParts/ExperiencePart/Experience'
import Links from './RegistrationParts/LinksPart/Links'
import UserPersonalInfo from './RegistrationParts/UserPersonalInfo/UserPersonalInfo'

// * Redux
import { useSelector } from 'react-redux'
import LeaderPart from './RegistrationParts/LeaderPart/LeaderPart'

function FinishRegistration() {
  const { active } = useSelector((state) => state.registrationReducer)

  useEffect(() => {}, [active])

  return (
    <>
      {active === 'InitialPart' && <InitialPart />}
      {active === 'UserPersonalInfo' && <UserPersonalInfo />}
      {active === 'Programming' && <Programming />}
      {active === 'ConcentrationPart' && <ConcentrationPart />}
      {active === 'Experience' && <Experience />}
      {active === 'Links' && <Links />}
      {active === 'Leader' && <LeaderPart />}
    </>
  )
}

export default FinishRegistration
