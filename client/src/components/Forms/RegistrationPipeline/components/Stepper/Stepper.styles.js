// * Modules
import { Stepper } from '@mui/material'
import styled from 'styled-components'

export const StepperContainer = styled.div`
  width: 14.0625rem;
  background: #1a1c22;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
`

export const CustomStepper = styled(Stepper)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
