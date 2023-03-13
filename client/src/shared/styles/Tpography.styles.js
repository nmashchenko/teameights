import styled from 'styled-components'

import { WHITE } from '../../constants/colors'

export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
  opacity: ${(props) => props.opacity || '1'};
`

export const Label  = styled.label`
  color:  #86878B;
  font-size: 16px;
  display: block;
  margin-bottom: 0.75rem;
;
`

export const ErrorMessage = styled.p`
  font-size: 15px;
  font-weight: 900;
  margin: 0.5rem 0 0 0;
  color: #cf625e;
`
