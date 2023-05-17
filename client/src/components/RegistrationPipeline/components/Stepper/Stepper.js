// * Modules
// * Redux
import Check from '@mui/icons-material/Check'
import Stack from '@mui/material/Stack'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

// * Constants
import { GREEN } from '../../../../constants/colors'

// * Components
import { CustomStepper, StepperContainer } from './Stepper.styles'

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

function QontoStepIcon({ active, completed, className }) {
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

export default function CustomizedSteppers({ steps, step }) {
  return (
    <StepperContainer>
      <Stack>
        <CustomStepper activeStep={step - 1} orientation="vertical" connector={null}>
          {steps.map((label, i) => (
            <Step key={i}>
              <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
            </Step>
          ))}
        </CustomStepper>
      </Stack>
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
