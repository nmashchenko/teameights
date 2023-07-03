import styled from 'styled-components'

import { WHITE } from '../../../../constants/colors'
import { shake } from '../../../styles/KeyFrames.styles'

export const InputWrapper = styled.div`
  position: relative;
`

export const IconSpan = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: ${(props) => props.borderColor || '#8F9094'};
  background: inherit;
  width: ${(props) => props.inputWidth};
  height: ${(props) => props.height || '2.375rem'};
  font-size: 18px;
  color: ${WHITE.main};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
  display: ${(props) => (props.isOptional ? 'none' : 'block')};
  padding: 8px 4px;

  &:focus {
    border-color: ${WHITE.main};
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    font-size: 16px;
    font-weight: 400;
  }

  &:hover {
    background: #2f3239;
    cursor: pointer;
  }
`

export const GroupContainer = styled.div`
  display: flex;
  flex-basis: 33.3%;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-basis: auto;
    width: 100%;
  }
`

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 32px;
    flex: 0;
  }
`

export const InputWithIConWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  align-self: flex-start;
`
