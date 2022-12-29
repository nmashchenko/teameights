import styled from 'styled-components'

import { WHITE } from '../../../../../../../constants/colors'

export const Skip = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 5px;

  &:hover {
    cursor: pointer;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }
`

export const SkipButton = styled.button`
  border: none;
  background: inherit;
  outline: none;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${WHITE.main};
`
