import styled from 'styled-components'

import { GREEN, RED, WHITE } from '../../constants/colors'

export const Button = styled.button`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: ${(props) => props.marginBottom || '30px'};
  border: none;
  width: 170px;
  height: 49px;
  color: ${WHITE.main};
  background: ${GREEN.button};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }

  &:disabled {
    cursor: default;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 3rem;
`

export const ButtonDisabled = styled.button`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 30px;
  border: none;
  width: 180px;
  height: 40px;
  color: ${WHITE.main};
  background: ${RED.alert};
  opacity: 0.3;
  border-radius: 25px;
  cursor: not-allowed;
`
