import React, {useState, useEffect} from 'react'
import InitialPart from './RegistrationParts/InitialPart/InitialPart'
import NamePart from './RegistrationParts/NamePart/NamePart'
import CountryPart from './RegistrationParts/CountryPart/CountryPart'
import AgePart from './RegistrationParts/AgePart/AgePart'
import Programming from './RegistrationParts/ProgrammingLanguagesPart/Programming'
import ConcentrationPart from './RegistrationParts/ConcentrationPart/Concentration'
import Experience from './RegistrationParts/ExperiencePart/Experience'
import Links from './RegistrationParts/LinksPart/Links'

// * Redux
import { useSelector } from "react-redux";
import LeaderPart from './RegistrationParts/LeaderPart/LeaderPart'

function FinishRegistration() {

  const {active} = useSelector(
    (state) => state.registrationReducer
  );

  useEffect(() => {

  }, [active])

  return(
    <>
        {active === 'InitialPart' && <InitialPart />}
        {active === 'NamePart' && <NamePart />}
        {active === 'CountryPart' && <CountryPart />}
        {active === 'AgePart' && <AgePart />}
        {active === 'Programming' && <Programming />}
        {active === 'ConcentrationPart' && <ConcentrationPart />}
        {active === 'Experience' && <Experience />}
        {active === 'Links' && <Links />}
        {active === 'Leader' && <LeaderPart />}
    </>
  )
}

export default FinishRegistration