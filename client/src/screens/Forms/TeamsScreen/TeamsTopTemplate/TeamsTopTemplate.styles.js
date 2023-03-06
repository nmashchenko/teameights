import styled from 'styled-components'

import { BLACK } from '../../../../constants/colors'

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
`

export const Textbox = styled.div`
  cursor: pointer;
  position: relative;

  span {
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -20%;
    background-color: #5bd424;
    transition: all 5s;
    transform: ${(props) => (props.isMyTeam ? `scaleX(100%)` : `scaleX(0)`)};
  }
`
