import styled from 'styled-components'

import { GREEN } from '../../../shared/constants/colors'

export const Button = styled.button`
  background-color: ${(props) => (props.background ? props.background : GREEN.button)};
  border: ${(props) => (props.border ? props.border : 'none')};
  color: ${(props) => (props.transparent ? '#007bff' : '#fff')};
  padding: 0.875rem 0;
  max-width: 10.625rem;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 140%;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.4' : '1')};
  font-size: 16px;

  @media screen and (max-width: 600px) {
    padding: 0.575rem 0;
  }
`

export const IconWrapper = styled.span`
  display: flex;
  margin-right: ${(props) => (props.iconPosition === 'right' ? 0 : '0.5rem')};
  margin-left: ${(props) => (props.iconPosition === 'left' ? 0 : '0.5rem')};

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`
