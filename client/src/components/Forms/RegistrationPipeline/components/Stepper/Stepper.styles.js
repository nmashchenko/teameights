// * Modules
import styled from 'styled-components'

export const StepperContainer = styled.div`
  width: 300px;
  background: #1a1c22;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`

export const ButtonContainer = styled.button`
  cursor: pointer;
  background: none;
  outline: none;
  border: none;

  &:disabled {
    cursor: not-allowed;
    svg {
      path {
        stroke: grey;
      }
    }
  }
`
