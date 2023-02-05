import styled from 'styled-components'

import { GREEN, WHITE } from '../../../constants/colors'

export const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  border: none;
  width: 133px;
  height: 45px;
  background: ${GREEN.button};
  color: ${WHITE.main};
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 4px 50px rgba(93, 157, 11, 0.15);

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.15s;
  }
`
