import styled from 'styled-components'

import { BLACK, WHITE } from '../../../../../constants/colors'

export const RegistrationContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: flex;
  flex-direction: column;
  padding: 3rem 9.6875rem 5rem 8.125rem;
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
  align-items: center;
  margin-top: 5rem;
`

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: flex-start;
  flex-direction: column;
  width: 100%;
  gap: 3.5rem;
`
