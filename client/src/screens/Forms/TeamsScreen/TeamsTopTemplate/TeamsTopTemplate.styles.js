import styled, { createGlobalStyle } from 'styled-components'

import { BLACK } from '../../../../constants/colors'

export const GlobalStyle = createGlobalStyle`
html {
  --H1-f: "NoirPro-Medium"
  --H1-s: "38px"
  --H1-lh: "45.6px"
  
  --H2-f: "NoirPro-Medium"
  --H2-s: "32px"
  --H2-lh: "38.4px"
  
  --H3-f: "NoirPro-Medium"
  --H3-s: "24px"
  --H3-lh: "28.8px"
  
  --H4-f: "NoirPro-Medium"
  --H4-s: "20px"
  --H4-lh: "24px"

  --B-f: "NoirPro-Regular"
  --B1-s: "24px"
  --B1-lh: "33.6px"
  
  --B2-f: "NoirPro-Regular"
  --B2-s: "16px"
  --B2-lh: "22.4px"

  --B3-f: "NoirPro-Light"
  --B3-s: "14px"
  --B3-lh: "16.8px"

}
`

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
