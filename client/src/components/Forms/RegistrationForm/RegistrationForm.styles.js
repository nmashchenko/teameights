import styled from 'styled-components'
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import MuiAlert from '@mui/material/Alert';
import {LIME, WHITE, BLACK, GREY} from '../../../constants/colors'
import {device} from '../../../constants/breakpoints'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${LIME.background};
  }
`

export const RegistrationContainer = styled.div`
  width: 100%;
  height: 93.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${LIME.background};
`

export const RegistrationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 520px;
  width: 100%;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.15);
  padding: 30px 23px;
  border-radius: 24px;
  background: ${WHITE.main};

  @media ${device.tablet} { 
    max-width: 515px;
  }

  @media ${device.mobileL} { 
    max-width: 355px;
    padding: 30px 20px;
  }

  @media ${device.mobileM} { 
    max-width: 320px;
    padding: 15px 20px;
  }
`

export const RegistrationTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`

export const RegistrationText = styled.h3`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 30px;
  color: ${BLACK.main};
  margin: 0;

  @media ${device.tablet} { 
    font-size: 28px;
  }

  @media ${device.mobileL} { 
    font-size: 22px;
  }

  @media ${device.mobileM} { 
    font-size: 20px;
  }
`

export const RegistrationInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 90%;
`

export const RegistrationInput = styled.input`
  outline: none;
  width: 100%;
  height: 65px;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 3px;
  margin: 14px 0 14px 0;
  background: ${GREY.background};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 22px;
  color: ${BLACK.main};

  &::placeholder {
    font-weight: 400;
    font-size: 24px;

    @media ${device.mobileL} { 
      font-size: 21px;
    }

    @media ${device.mobileM} { 
      font-size: 20px;
    }
  }

  @media ${device.tablet} { 
    height: 70px;
  }

  @media ${device.mobileL} { 
    font-size: 18px;
    height: 67px;
  }

  @media ${device.mobileM} { 
    font-size: 16px;
    height: 64px;
  }
`

export const RegistrationButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 23px;
  border: none;
  width: 100%;
  height: 65px;
  background: ${BLACK.main};
  color: ${WHITE.main};
  text-align: center;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  margin-top: 12px;

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.4s;
    color: ${BLACK.main};
    background: ${LIME.main};
  }

  @media ${device.tablet} { 
    height: 70px;
  }

  @media ${device.mobileL} { 
    font-size: 18px;
    height: 67px;
  }

  @media ${device.mobileM} { 
    font-size: 16px;
    height: 64px;
  }
`

export const RegistrationLink = styled.a`
  font-family: 'Montserrat';
  font-size: 22px;
  font-weight: 600;
  color: ${BLACK.main};
  margin: 0;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    color: ${LIME.main};
  }

  @media ${device.mobileL} { 
    font-size: 14px;
  }

  @media ${device.mobileM} { 
    font-size: 13px;
  }
`

export const BottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
  max-width: 420px;
  width: 100%;
  text-decoration: none;
  font-weight: 600;

  @media ${device.mobileL} { 
    width: 89%;
  }
`

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ShowPass = styled(IconButton)`
  right: 10px;
  top: 26px;
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

