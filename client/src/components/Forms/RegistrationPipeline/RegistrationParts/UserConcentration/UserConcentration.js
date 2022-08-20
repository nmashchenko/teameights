// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'

// * Data
import frameworksOptions from '../../../../../constants/frameworks'
import concentrationsOptions from '../../../../../constants/concentrations'
import programmingLanguagesOptions from '../../../../../constants/programmingLanguages'

// * Redux
import { useSelector } from 'react-redux'

// * Components
import ProgrammingLanguagesArea from './Components/ProgrammingLanguagesArea'
import FramewoksArea from './Components/FrameworksArea'
import ConcentrationArea from './Components/ConcentrationArea'

// * Hooks
import useConcentrationSubmit from './Hooks/useConcentrationSubmit'
import concentrationHooks from './Hooks/concentrationHooks'

// * Styles
import {
  Container,
  CardContainer,
  TopContainer,
  Text,
  MiddleContainer,
  BottomContainer,
  Button,
  ButtonDisabled,
} from './UserConcentration.styles'

const UserConcentration = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [programmingLanguages, setProgrammingLanguages] = useState([])
  const [frameworks, setFrameworks] = useState([])
  const [concentration, setConcentration] = useState('')

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

  return (
    <>
      <form>
        <NavLogo />
        <Container>
          <Stepper step={step} />
          <CardContainer>
            <TopContainer>
              <Text fontSize="18px" fontWeight="700" margin="0 0 10px 0">
                Concentration
              </Text>
            </TopContainer>
            <MiddleContainer>
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
            </MiddleContainer>
            <BottomContainer>
              <Text fontSize="14px" fontWeight="300" color="grey">
                ❤️ Select your favorites!
              </Text>
              {errors.length > 0 ? (
                <ButtonDisabled onClick={handleSubmit}>
                  <WarningIcon />
                </ButtonDisabled>
              ) : (
                <Button onClick={handleSubmit}>Next</Button>
              )}
            </BottomContainer>
          </CardContainer>
        </Container>
      </form>
    </>
  )
}

export default UserConcentration
