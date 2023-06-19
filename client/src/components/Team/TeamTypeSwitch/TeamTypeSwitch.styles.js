import styled, { createGlobalStyle } from 'styled-components'

import { BLACK } from '../../../constants/colors'

export const GridContainer = styled.div`
  display: flex;
  /* grid-template-columns: repeat(3, 1fr); */
  font-size: 20px;
  max-height: 38px;
  width: 100%;
  margin-top: 49px;
  align-items: center;
  justify-content: end;
  position: absolute;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const Textbox = styled.div`
  cursor: pointer;
`

export const SelectType = styled.div`
  grid-column: 3; /* Place the element in the second column */
  justify-self: end; /* Align the element to the end of its column (right corner) */
  margin-right: 30px;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`

export const LogoContainer = styled.div`
  grid-column: 2; /* Place the element in the first column */
  justify-self: center; /* Center the element within its column */
  align-self: center;
`

export const Text = styled.p`
  transition: all 0.2s;
  position: relative;
  display: inline-block;
  color: ${(props) => (props.isMyTeam ? '#5bd424' : `white`)};
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '18px'};
  line-height: ${(props) => props.lineHeight || '1'};
  span {
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -10%;
    left: 50%;
    background-color: #5bd424;
    transition: all 0.2s;
    transform: translateX(-50%) ${(props) => (props.isMyTeam ? `scaleX(100%)` : `scaleX(0)`)};
  }
`
