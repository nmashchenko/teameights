// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'
import GitHubIcon from '../../../../../assets/Links/GitHubIcon'
import LinkedInIcon from '../../../../../assets/Links/LinkedInIcon'
import TelegramIcon from '../../../../../assets/Links/TelegramIcon'
import SkipArrow from '../../../../../assets/Arrows/SkipArrow'

// * Redux
import { useSelector } from 'react-redux'

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

  console.log(userData)

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [github, setGithub] = useState('')
  const [telegram, setTelegram] = useState('')
  const [linkedIn, setLinkedIn] = useState('')

  const handleSkip = () => {}

  const handleSubmit = () => {}

  return (
    <Container>
      <Stepper step={step} />
      <DataContainer>
        <NavLogo sectionName={'Links'} />
        <MiddleContainer>
          <LinkArea>
            <GitHubIcon />
            <LinkInput placeholder="Provide your link here" />
          </LinkArea>
          <LinkArea>
            <LinkedInIcon />
            <LinkInput placeholder="Provide your link here" />
          </LinkArea>
          <LinkArea>
            <TelegramIcon />
            <LinkInput placeholder="Provide your link here" />
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
