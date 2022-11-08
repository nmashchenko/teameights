// * Modules
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Check from '@mui/icons-material/Check'

// * Redux
import { useDispatch } from 'react-redux'
import { registrationAuth } from '../../../../store/reducers/RegistrationAuth'

// * Components
import { StepperContainer, ButtonContainer } from './Stepper.styles'
import NavigationArrowUp from '../../../../assets/Arrows/NavigationArrowUp'
import NavigationArrowDown from '../../../../assets/Arrows/NavigationArrowDown'

// * Constants
import { GREEN } from '../../../../constants/colors'
import { useEffect } from 'react'

const steps = [
  'InitialPart',
  'UserPersonalInfo',
  'UserConcentration',
  'UserExperience',
  'Links',
  'Avatar',
]

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: GREEN.alternativeBorder,
  display: 'flex',
  height: 32,
  alignItems: 'center',
  ...(ownerState.active && {
    color: GREEN.text,
  }),
  '& .QontoStepIcon-completedIcon': {
    color: GREEN.text,
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}))

function QontoStepIcon(props) {
  const { active, completed, className } = props

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  )
}

export default function CustomizedSteppers({ step }) {
  const dispatch = useDispatch()
  const { setStep, setActiveState } = registrationAuth.actions

  const handleCases = (newStep) => {
    switch (newStep) {
      case 0:
        dispatch(setStep(0))
        dispatch(setActiveState(steps[newStep]))
        break
      case 1:
        dispatch(setStep(1))
        dispatch(setActiveState(steps[newStep]))
        break
      case 2:
        dispatch(setStep(2))
        dispatch(setActiveState(steps[newStep]))
        break
      case 3:
        dispatch(setStep(3))
        dispatch(setActiveState(steps[newStep]))
        break
      case 4:
        dispatch(setStep(4))
        dispatch(setActiveState(steps[newStep]))
        break
      case 5:
        dispatch(setStep(5))
        dispatch(setActiveState(steps[newStep]))
        break
      default:
        break
    }
  }

  const handleDecrement = () => {
    if (step - 1 >= 0) {
      step = step - 1
      handleCases(step)
    }
  }
  const handleIncrement = () => {
    if (step + 1 < steps.length) {
      step = step + 1
      handleCases(step)
    }
  }

  return (
    <StepperContainer>
      <ButtonContainer onClick={handleDecrement}>
        <NavigationArrowUp />
      </ButtonContainer>
      <Stack>
        <Stepper activeStep={step - 1} orientation="vertical" connector={null}>
          {steps.map((label, i) => (
            <Step key={i}>
              <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <ButtonContainer onClick={handleIncrement}>
        <NavigationArrowDown />
      </ButtonContainer>
    </StepperContainer>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
}
