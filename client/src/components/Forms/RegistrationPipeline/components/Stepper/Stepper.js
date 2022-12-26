// * Modules
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Check from '@mui/icons-material/Check'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Components
import { StepperContainer, ButtonContainer } from './Stepper.styles'
import NavigationArrowUp from '../../../../../assets/Arrows/NavigationArrowUp'
import NavigationArrowDown from '../../../../../assets/Arrows/NavigationArrowDown'

// * Constants
import { GREEN } from '../../../../../constants/colors'
import {useFormikContext} from "formik";
const steps = [
  'InitialPart',
  'UserPersonalInfo',
  'UserConcentration',
  'UserExperience',
  'Education',
  'Links',
  'UserAvatar',
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

export default function CustomizedSteppers() {
  const { step, isLastStep, isOptionalStep } = useSelector((state) => state.registrationReducer)

  const { setStep } = registrationAuth.actions
  const {isValid, initialTouched} = useFormikContext()
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(setStep(step - 1))
  }

  const handleIncrement = () => {
    dispatch(setStep(step + 1))
  }

  return (
    <StepperContainer>
      <ButtonContainer type="button" disabled={step === 1 } onClick={handleDecrement}>
        <NavigationArrowUp />
      </ButtonContainer>
      <Stack>
        <Stepper activeStep={step} orientation="vertical" connector={null}>
          {steps.map((label, i) => (
            <Step key={i}>
              <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <ButtonContainer type="button" disabled={isLastStep || !(isValid || isOptionalStep) } onClick={handleIncrement}>
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
