import styled from 'styled-components'

import { GREEN, WHITE } from '../../../constants/colors'

export const Button = styled.button`
  background-color: ${props => props.background ? props.background : 'transparent'};
  border: ${props => props.border ? props.border : 'none'};
  color: ${props => props.transparent ? '#007bff' : '#fff'};
  padding: 0.875rem 0;
  width: 10.625rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 140%;
  cursor: pointer;
  opacity: ${props => props.disabled ? '0.4' : '1'};

  //&:hover {
  //  border: none;
  //  cursor: pointer;
  //  transition: 0.15s;
  //}
`


export const IconWrapper = styled.span`
  display: flex;
  margin-right: ${props => props.iconPosition === 'right' ? 0 : '0.5rem'};
  margin-left: ${props => props.iconPosition === 'left' ? 0 : '0.5rem'};
`;