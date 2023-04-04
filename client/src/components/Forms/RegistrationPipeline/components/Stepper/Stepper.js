// * Modules
// * Redux
import { useDispatch } from 'react-redux'
import Check from '@mui/icons-material/Check'
import Stack from '@mui/material/Stack'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { styled } from '@mui/material/styles'
import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'

import NavigationArrowDown from '../../../../../assets/Arrows/NavigationArrowDown'
import NavigationArrowUp from '../../../../../assets/Arrows/NavigationArrowUp'
// * Constants
import { GREEN } from '../../../../../constants/colors'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'

// * Components
import { ButtonContainer, StepperContainer } from './Stepper.styles'

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

export default function CustomizedSteppers({ steps, step, isLastStep, isOptionalStep }) {
  const { setStep } = registrationAuth.actions
  const { isValid } = useFormikContext()
  const dispatch = useDispatch()

  const handleDecrement = () => {
    dispatch(setStep(step - 1))
  }

  const handleIncrement = () => {
    console.log(1)
    dispatch(setStep(step + 1))
  }

  return (
    <StepperContainer>
      {/*<ButtonContainer type="button" disabled={step === 1 || step === 0} onClick={handleDecrement}>*/}
      {/*  <NavigationArrowUp />*/}
      {/*</ButtonContainer>*/}
      <Stack>
        <Stepper activeStep={step} orientation="vertical" connector={null}>
          {steps.map((label, i) => (
            <Step key={i}>
              <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      {/*<ButtonContainer*/}
      {/*  type="button"*/}
      {/*  disabled={isLastStep || !(isValid || isOptionalStep)}*/}
      {/*  onClick={handleIncrement}*/}
      {/*>*/}
      {/*  <NavigationArrowDown />*/}
      {/*</ButtonContainer>*/}
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
