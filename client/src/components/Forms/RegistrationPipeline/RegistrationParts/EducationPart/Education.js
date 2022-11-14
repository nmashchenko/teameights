// * Modules
import React, { useState } from 'react'
import WarningIcon from '@mui/icons-material/Warning'
import { includes } from 'lodash'

// * Other
import NavLogo from '../../NavLogo/NavLogo'
import Stepper from '../../Stepper/Stepper'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Hooks
import useEducationSubmit from './Hooks/useEducationSubmit'

// * Styles
import {
  Container,
  DataContainer,
  MiddleContainer,
  Text,
  Input,
  ButtonContainer,
  SkipButton,
  ButtonDisabled,
  Button,
  BottomContainer,
  Skip,
} from './Education.styles'
import SkipArrow from '../../../../../assets/Arrows/SkipArrow'

const Education = () => {
  // * Redux
  const { step, userData } = useSelector((state) => state.registrationReducer)
  const { setActiveState, setStep, setUniversityInfo } = registrationAuth.actions
  const dispatch = useDispatch()

  // * useStates
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState([])
  const [university, setUniversity] = useState(userData.userUniversity)
  const [major, setMajor] = useState(userData.userMajor)
  const [graduationDate, setGraduationDate] = useState(parseInt(userData.userGraduationDate))

  const handleUniversity = (e) => {
    setErrors((errors) => errors.filter((word) => word !== 'university'))
    setUniversity(e.target.value)
  }

  const handleMajor = (e) => {
    setErrors((errors) => errors.filter((word) => word !== 'major'))
    setMajor(e.target.value)
  }

  const handleGraduationDate = (e) => {
    setErrors((errors) => errors.filter((word) => word !== 'graduationDate'))
    setGraduationDate(e.target.value)
  }

  const handleSkip = () => {
    dispatch(setActiveState('Links'))
    dispatch(setStep(5))
  }

  // * useExperienceSubmit hook
  const handleSubmit = useEducationSubmit(
    university,
    major,
    graduationDate.toString(),
    setOpen,
    setErrors,
  )

  return (
    <Container>
      <Stepper step={step} />
      <DataContainer>
        <NavLogo sectionName={'Education'} />

        <MiddleContainer>
          <div>
            <Text fontSize="18px" fontWeight="400">
              University/School
            </Text>
            {includes(errors, 'university') ? (
              <Input onChange={handleUniversity} borderColor="#cf625e" value={university} />
            ) : (
              <Input onChange={handleUniversity} animation="none" value={university} />
            )}
          </div>
          <div>
            <Text fontSize="18px" fontWeight="400">
              Major
            </Text>
            {includes(errors, 'major') ? (
              <Input onChange={handleMajor} borderColor="#cf625e" value={major} />
            ) : (
              <Input onChange={handleMajor} animation="none" value={major} />
            )}
          </div>
          <div>
            <Text fontSize="18px" fontWeight="400">
              Expected Graduation
            </Text>
            {includes(errors, 'graduationDate') ? (
              <Input
                onChange={handleGraduationDate}
                borderColor="#cf625e"
                value={graduationDate}
                type="number"
                min="0"
                max="2109"
              />
            ) : (
              <Input
                onChange={handleGraduationDate}
                animation="none"
                value={graduationDate}
                type="number"
                min="0"
                max="2109"
              />
            )}
          </div>
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

export default Education
