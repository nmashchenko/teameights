// * Modules
import React, { useState } from 'react'
// * Redux
import { useSelector } from 'react-redux'
import WarningIcon from '@mui/icons-material/Warning'

import concentrationsOptions from '../../../../../../constants/concentrations'
// * Data
import frameworksOptions from '../../../../../../constants/frameworks'
import programmingLanguagesOptions from '../../../../../../constants/programmingLanguages'
// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'

import ConcentrationArea from './Components/ConcentrationArea'
import FramewoksArea from './Components/FrameworksArea'
// * Components
import ProgrammingLanguagesArea from './Components/ProgrammingLanguagesArea'
import concentrationHooks from './Hooks/concentrationHooks'
// * Hooks
import useConcentrationSubmit from './Hooks/useConcentrationSubmit'
// * Styles
import {
  BottomContainer,
  Button,
  ButtonDisabled,
  Container,
  ContentContainer,
  RegistrationContainer,
} from './UserConcentration.styles'

const UserConcentration = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState(
    userData.userProgrammingLanguages,
  )
  const [frameworks, setFrameworks] = useState(userData.userFrameworks)
  const [concentration, setConcentration] = useState(userData.userConcentration)

  // * useInfoSubmit hook
  const handleSubmit = useConcentrationSubmit(
    programmingLanguages,
    frameworks,
    concentration,
    setOpen,
    setErrors,
  )

  const handleProgrammingLanguages = concentrationHooks.useHandleProgrammingLanguages(
    setErrors,
    setProgrammingLanguages,
  )
  const handleFrameworks = concentrationHooks.useHandleFrameworks(setErrors, setFrameworks)
  const handleConcentration = concentrationHooks.useHandleConcentration(setErrors, setConcentration)

  console.log(userData)

  return (
    <>
      <form>
        <Container>
          <Stepper step={step} />
          <RegistrationContainer>
            <NavLogo sectionName={'Concentration'} />
            <ContentContainer>
              <ProgrammingLanguagesArea
                programmingLanguages={programmingLanguages}
                handleProgrammingLanguages={handleProgrammingLanguages}
                programmingLanguagesOptions={programmingLanguagesOptions}
                errors={errors}
              />
              <FramewoksArea
                frameworks={frameworks}
                handleFrameworks={handleFrameworks}
                frameworksOptions={frameworksOptions}
                errors={errors}
              />
              <ConcentrationArea
                concentration={concentration}
                handleConcentration={handleConcentration}
                concentrationsOptions={concentrationsOptions}
                errors={errors}
              />
              <BottomContainer>
                {errors.length > 0 ? (
                  <ButtonDisabled onClick={handleSubmit}>
                    <WarningIcon />
                  </ButtonDisabled>
                ) : (
                  <Button onClick={handleSubmit}>Next</Button>
                )}
              </BottomContainer>
            </ContentContainer>
          </RegistrationContainer>
        </Container>
      </form>
    </>
  )
}

export default UserConcentration
