import styled from 'styled-components'
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import {LIME, WHITE, BLACK} from '../../../constants/colors'
import {device} from '../../../constants/breakpoints'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${LIME.background};
  }
`

export const LoginContainer = styled.div`
  width: 100%;
  height: 93.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${LIME.background};
`

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 435px;
  width: 100%;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.15);
  padding: 20px 0;
  border-radius: 24px;
  background: ${WHITE.main};

  @media ${device.tablet} { 
    max-width: 335px;
  }
`

export const LoginTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginText = styled.h3`
  font-family: 'Montserrat';
  font-weight: '600';
  font-size: 20px;
  color: ${BLACK.main};
  margin: 0;
`

export const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`

export const LoginInput = styled.input`
  border: none;
  outline: none;
  width: 369px;
  padding: 14px;
  text-align: center;
  font-size: 20px;
  border: 1px solid ${BLACK.main};
  border-radius: 13px;
  margin-bottom: 22px;

  @media ${device.tablet} { 
    max-width: 269px;
  }
`

export const LoginButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 600;
  border: none;
  width: 369px;
  padding: 14px;
  background: ${BLACK.main};
  color: ${WHITE.main};
  text-align: center;
  font-size: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13px;

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    color: ${BLACK.main};
    background: ${LIME.main};
  }

  @media ${device.tablet} { 
    max-width: 269px;
  }
`

export const LoginLink = styled.a`
  font-family: 'Montserrat';
  font-size: 15px;
  color: ${BLACK.main};
  margin: 0;
  text-decoration: none;
  

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: ${LIME.main};
  }
`

export const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 21px;
  max-width: 365px;
  width: 100%;
  text-decoration: none;
  font-weight: 600;

  @media ${device.tablet} { 
    max-width: 265px;
  }
`

export const PasswordContainer = styled.div`
  position: relative;
`

export const ShowPass = styled(IconButton)`
  right: 10px;
  top: 6px;
  && {
    position: absolute;
  }
`

export const AlertBox = styled(MuiAlert)`
  && {
    background: ${BLACK.main};
  }

  @media ${device.tablet} {
    max-width: 250px;
  }
`

