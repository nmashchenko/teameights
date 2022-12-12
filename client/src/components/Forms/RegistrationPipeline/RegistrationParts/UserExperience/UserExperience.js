// * Modules
import React, { useState } from 'react'
// * Redux
import { useSelector } from 'react-redux'
import WarningIcon from '@mui/icons-material/Warning'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'

import AgreementArea from './Components/AgreementArea'
// * Components
import ExperienceArea from './Components/ExperienceArea'
// * Hooks
import useExperienceSubmit from './Hooks/useExperienceSubmit'
// * Styles
import {
  AlertContainer,
  Button,
  ButtonDisabled,
  CardContainer,
  Container,
  ContentContainer,
  MiddleContainer,
  Text,
} from './UserExperience.styles'

const UserConcentration = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [experience, setExperience] = useState(userData.userExperience)
  const [leader, setLeader] = useState(userData.userLeader)

  // * useExperienceSubmit hook
  const handleSubmit = useExperienceSubmit(experience, leader, setOpen, setErrors)

  return (
    <>
      <Container>
        <Stepper step={step} />
        <CardContainer>
          <NavLogo sectionName={'Experience'} />

          <MiddleContainer>
            <ContentContainer>
              <Text fontSize="23px" fontWeight="400" margin="20px 0 0 0">
                How many years of experience you have?
              </Text>
              <ExperienceArea setExperience={setExperience} setErrors={setErrors} errors={errors} />
              <Text fontSize="23px" fontWeight="400" margin="40px 0 0 0">
                Do you want to be a leader of the team?
              </Text>
              <AlertContainer>
                <Text fontSize="16px" fontWeight="200" margin="15px 0 0 0" opacity="0.4">
                  👑 Please note that leaders typically have 1-3+ years of experience and will be
                  required to pass a leadership test.
                </Text>
              </AlertContainer>
              <AgreementArea setLeader={setLeader} setErrors={setErrors} errors={errors} />
              {errors.length > 0 ? (
                <ButtonDisabled onClick={handleSubmit}>
                  <WarningIcon />
                </ButtonDisabled>
              ) : (
                <Button onClick={handleSubmit}>Next</Button>
              )}
            </ContentContainer>
          </MiddleContainer>
        </CardContainer>
      </Container>
    </>
  )
}

export default UserConcentration
