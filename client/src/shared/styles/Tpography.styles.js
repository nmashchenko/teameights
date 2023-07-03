import styled from 'styled-components'

import { WHITE } from '../../shared/constants/colors'

export const Text = styled.h3`
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '500'};
  margin: ${(props) => props.margin || '0'};
  color: ${(props) => props.color || WHITE.main};
  opacity: ${(props) => props.opacity || '1'};
`

export const Label = styled.label`
  color: #86878b;
  font-size: 14px;
  display: block;
  margin-bottom: ${(props) => props.marginBottom || '0.25rem'}; ;
`

export const ErrorMessage = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0.5rem 0 0 0;
  color: #d42422;
`
