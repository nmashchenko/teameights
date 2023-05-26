import styled, { createGlobalStyle } from 'styled-components'

import { BLACK } from '../../../constants/colors'

export const ToolbarContainer = styled.div`
  width: 100%;
  background: ${BLACK.background};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  height: 78px;
  grid-auto-flow: column;
`

export const NavContainer = styled.div`
  justify-self: center;
`

export const CurrentTeam = styled.div`
  display: flex;
  gap: 16px;
  font-size: 20px;
  line-height: 24px;
  position: absolute;
  top: 2.5%;
  right: 5%;
`

export const Textbox = styled.div`
  cursor: pointer;
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
    bottom: -20%;
    left: 50%;
    background-color: #5bd424;
    transition: all 0.2s;
    transform: translateX(-50%) ${(props) => (props.isMyTeam ? `scaleX(100%)` : `scaleX(0)`)};
  }
`
