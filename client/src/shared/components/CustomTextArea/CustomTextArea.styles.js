import styled from 'styled-components'

import { WHITE } from '../../../constants/colors'
import { shake } from '../../styles/KeyFrames.styles'

export const TextAreaWrapper = styled.div`
  margin: ${(props) => props.margin || `0`};
`

export const TextArea = styled.textarea`
  margin-top: 10px;
  height: 180px;
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: ${(props) => props.border || `1px solid #4b4b4b`};
  color: ${WHITE.main};
  border-radius: 5px;
  background: inherit;
  font-size: 16px;
  resize: none;
  animation-name: ${(props) => props.animation || shake};
  animation-duration: 0.3s;
`

export const TextLimitContainer = styled.div`
  display: flex;
  justify-content: end;
`

export const TextCounter = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.color || WHITE.main};
`
