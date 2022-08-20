// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'

// * Redux
import { useSelector } from 'react-redux'

// * Components
import ExperienceArea from './Components/ExperienceArea'
import AgreementArea from './Components/AgreementArea'

// * Hooks
import useExperienceSubmit from './Hooks/useExperienceSubmit'

// * Styles
import {
  Container,
  CardContainer,
  TopContainer,
  Text,
  MiddleContainer,
  AlertContainer,
  BottomContainer,
  Button,
  ButtonDisabled,
} from './UserExperience.styles'

const UserConcentration = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [experience, setExperience] = useState('')
  const [leader, setLeader] = useState(null)

  // * useExperienceSubmit hook
  const handleSubmit = useExperienceSubmit(experience, leader, setOpen, setErrors)

  return (
    <>
      <NavLogo />
      <Container>
        <Stepper step={step} />
        <CardContainer>
          <TopContainer>
            <Text fontSize="18px" fontWeight="700" margin="0 0 10px 0">
              Experience
            </Text>
          </TopContainer>
          <MiddleContainer>
            <Text fontSize="16px" fontWeight="500" margin="20px 0 0 0">
              How many years of experience you have?
            </Text>
            <ExperienceArea setExperience={setExperience} setErrors={setErrors} errors={errors} />
            <Text fontSize="16px" fontWeight="500" margin="40px 0 0 0">
              Do you want to be a leader of the team?
            </Text>
            <AlertContainer>
              <Text
                fontSize="15px"
                fontWeight="300"
                margin="15px 0 0 0"
                align="center"
                opacity="0.6"
              >
                Please note that leaders typically have 1-3+ years of experience and will be
                required to pass a leadership test.
              </Text>
            </AlertContainer>
            <AgreementArea setLeader={setLeader} setErrors={setErrors} errors={errors} />
          </MiddleContainer>
          <BottomContainer>
            <Text fontSize="14px" fontWeight="300" color="grey">
              👑 Are you ready to be a leader?
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
    </>
  )
}

export default UserConcentration
