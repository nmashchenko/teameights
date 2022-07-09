import styled, { keyframes } from 'styled-components'
import {LIME, BLACK, WHITE} from '../../../../../constants/colors'
import Toolbar from "@mui/material/Toolbar";
import Select from 'react-select'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${LIME.background};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 93.4vh;
  width: 100%;
  background: ${LIME.background};
`
const linearGradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`


export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  max-width: 645px;
  width: 100%;
  max-height: 363px;
  height: 100%;
  background: linear-gradient(13deg,#17b94b,#39a59d,#e0ff00,#5d5d5a);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background-size: 240% 240%;
  animation: ${linearGradient} 10s ease infinite;
  border-radius: 13px;
`

export const TopText = styled.h3`
  font-family: 'Montserrat';
  font-size: ${(props) => props.fontSize || '18px'};
  font-weight: ${(props) => props.fontWeight || '700'};
  margin: ${(props) => props.margin || '0'};
  color: ${BLACK.main};
`

export const MiddleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  width: 100%;
`

export const ContinueButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  margin-top: 36px;
  border: none;
  width: 247px;
  height: 30px;
  color: ${WHITE.main};
  background: ${BLACK.main};
  border-radius: 9px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    transition: 0.3s ease-in-out;
  }
`

export const SelectField = styled(Select)`
  && {
    width: 60%;
    margin-top: 20px;
  }
`