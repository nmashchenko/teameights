import styled from 'styled-components'

import { BLACK, WHITE } from '../../../../../constants/colors'

export const RegistrationContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`

export const ResetButton = styled.button`
  border: none;
  background: inherit;
  color: ${WHITE.main};
  outline: none;
  font-weight: 400;
  font-size: 18px;
  margin-top: 0.8rem;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: calc(100vh - 185px);
  align-items: ${(props) => props.alignItems || 'center'};
`
