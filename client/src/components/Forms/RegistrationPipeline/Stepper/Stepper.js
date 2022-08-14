// * Modules
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Stepper from '@mui/material/Stepper'
import StepLabel from '@mui/material/StepLabel'
import Step from '@mui/material/Step'
import Check from '@mui/icons-material/Check'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'

// * Constants
import { GREY, GREEN, WHITE } from '../../../../constants/colors'

const QontoConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: GREEN.text,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: GREEN.text,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: GREY.line,
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: GREY.line,
  display: 'flex',
  height: 22,
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
    width: 8,
    height: 8,
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

const steps = ['User profile', 'Specialization', 'Experience', 'Education', 'Links', 'Avatar']

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: '800px' }} spacing={4}>
      <Stepper alternativeLabel activeStep={0} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={QontoStepIcon}
              sx={{
                '& .css-qivjh0-MuiStepLabel-label.Mui-active': {
                  color: 'transparent',
                  fontSize: '15px',
                  fontWeight: '700',
                },
                '& .css-qivjh0-MuiStepLabel-label.Mui-completed': {
                  color: GREEN.text,
                  fontSize: '15px',
                  fontWeight: '700',
                },
                '& .css-qivjh0-MuiStepLabel-label': {
                  color: WHITE.main,
                  fontSize: '15px',
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
