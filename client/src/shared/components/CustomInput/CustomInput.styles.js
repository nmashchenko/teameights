import styled from 'styled-components'

import { WHITE } from '../../../constants/colors'
import { shake } from '../../styles/KeyFrames.styles'

export const Input = styled.input`
  outline: 0;
  border-width: 0 0 1.5px;
  border-color: ${(props) => props.borderColor || '#4b4b4b'};
  background: inherit;
  width: ${(props) => props.inputWidth };
  height: ${(props) => props.height || '2.375rem'};
  font-size: 18px;
  color: ${WHITE.main};
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;

  &:focus {
    border-color: ${WHITE.main};
  }
`

export const GroupContainer = styled.div`
  display: flex;
  flex-basis: 33.3%;
  flex-direction: column;
  
`
export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  flex: 1;
`

export const InputWithIConWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  align-self: flex-start;
`
