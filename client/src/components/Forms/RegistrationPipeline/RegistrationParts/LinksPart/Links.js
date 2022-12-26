// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { includes } from 'lodash'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'
import GitHubIcon from '../../../../../assets/Links/GitHubIcon'
import LinkedInIcon from '../../../../../assets/Links/LinkedInIcon'
import TelegramIcon from '../../../../../assets/Links/TelegramIcon'
import SkipArrow from '../../../../../assets/Arrows/SkipArrow'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Hooks
import useLinksSubmit from './Hooks/useLinksSubmit'

// * Styles
import {
  Container,
  DataContainer,
  MiddleContainer,
  LinkArea,
  LinkInput,
  ButtonContainer,
  SkipButton,
  ButtonDisabled,
  Button,
  BottomContainer,
  Skip,
} from './Links.styles'

const Links = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)
  const { setActiveState, setStep, setStageFiveCompleted } = registrationAuth.actions
  const dispatch = useDispatch()

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [github, setGithub] = useState('')
  const [telegram, setTelegram] = useState('')
  const [linkedIn, setLinkedIn] = useState('')

  const handleGit = (e) => {
    setErrors((errors) => errors.filter((word) => word !== 'github'))
    setGithub(e.target.value)
  }

  const handleTelegram = (e) => {
    setErrors((errors) => errors.filter((word) => word !== 'telegram'))
    setTelegram(e.target.value)
  }

  const handleLinked = (e) => {
    setErrors((errors) => errors.filter((word) => word !== 'linkedIn'))
    setLinkedIn(e.target.value)
  }

  const handleSkip = () => {
    dispatch(setActiveState('UserAvatar'))
    dispatch(setStageFiveCompleted(true))
    dispatch(setStep(6))
  }

  const handleSubmit = useLinksSubmit(github, telegram, linkedIn, setOpen, setErrors)

  return (
    <Container>
      <Stepper step={step} />
      <DataContainer>
        <NavLogo sectionName={'Links'} />
        <MiddleContainer>
          <LinkArea>
            <GitHubIcon />
            {includes(errors, 'github') ? (
              <LinkInput
                placeholder="Provide your link here"
                borderColor="#cf625e"
                value={github}
                onChange={handleGit}
              />
            ) : (
              <LinkInput
                placeholder="Provide your link here"
                animation="none"
                value={github}
                onChange={handleGit}
              />
            )}
          </LinkArea>
          <LinkArea>
            <LinkedInIcon />
            {includes(errors, 'linkedIn') ? (
              <LinkInput
                placeholder="Provide your link here"
                borderColor="#cf625e"
                value={linkedIn}
                onChange={handleLinked}
              />
            ) : (
              <LinkInput
                placeholder="Provide your link here"
                animation="none"
                value={linkedIn}
                onChange={handleLinked}
              />
            )}
          </LinkArea>
          <LinkArea>
            <TelegramIcon />
            {includes(errors, 'telegram') ? (
              <LinkInput
                placeholder="Provide your link here"
                borderColor="#cf625e"
                value={telegram}
                onChange={handleTelegram}
              />
            ) : (
              <LinkInput
                placeholder="Provide your link here"
                animation="none"
                value={telegram}
                onChange={handleTelegram}
              />
            )}
          </LinkArea>
        </MiddleContainer>
        <BottomContainer>
          <ButtonContainer>
            <Skip>
              <SkipButton type="button" onClick={handleSkip}>
                Skip
              </SkipButton>
              <SkipArrow />
            </Skip>
            {errors.length > 0 ? (
              <ButtonDisabled>
                <WarningIcon />
              </ButtonDisabled>
            ) : (
              <Button type="submit" onClick={handleSubmit}>
                Next
              </Button>
            )}
          </ButtonContainer>
        </BottomContainer>
      </DataContainer>
    </Container>
  )
}

export default Links
