import styled from 'styled-components'
import Toolbar from "@mui/material/Toolbar";
import {LIME, WHITE, BLACK, GREY} from '../../../constants/colors'
import {device} from '../../../constants/breakpoints'
import IconButton from '@mui/material/IconButton';

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${LIME.background};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const NewPasswordContainer = styled.div`
  width: 100%;
  height: 91.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${LIME.background};
`

export const NewPasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 520px;
  width: 100%;
  box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.15);
  padding: 40px 23px;
  border-radius: 24px;
  background: ${WHITE.main};

  @media ${device.tablet} { 
    max-width: 515px;
  }

  @media ${device.mobileL} { 
    max-width: 325px;
    padding: 50px 20px;
  }

  @media ${device.mobileM} { 
    max-width: 290px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`

export const TitleText = styled.h3`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 30px;
  color: ${BLACK.main};
  margin: ${(props) => props.margin || '0'};

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

export const SubTitleText = styled.h4`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 22px;
  color: ${GREY.text};
  margin: 0;

  @media ${device.tablet} { 
    font-size: 21px;
  }

  @media ${device.mobileL} { 
    font-size: 19px;
  }

  @media ${device.mobileM} { 
    font-size: 17px;
  }
`

export const NewPasswordInput = styled.input`
  outline: none;
  width: 98.5%;
  height: 77px;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 3px;
  background: ${GREY.background};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 22px;
  color: ${BLACK.main};
  margin-bottom: 34px;

  &::placeholder {
    font-weight: 600;
    font-size: 23px;

    @media ${device.mobileL} { 
      font-size: 19px;
    }

    @media ${device.mobileM} { 
      font-size: 18px;
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

export const NewPasswordButton = styled.button`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 23px;
  border: none;
  width: 100%;
  height: 77px;
  background: ${BLACK.main};
  color: ${WHITE.main};
  text-align: center;
  border: 1px solid ${BLACK.main};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;

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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 44px 0 0 0px;
`

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ShowPass = styled(IconButton)`
  right: 15px;
  top: 22px;
  && {
    position: absolute;
  }

  @media ${device.mobileL} { 
    right: 0;
    top: 14px;
  }

  @media ${device.mobileM} { 
    right: 0;
    top: 13px;
  }
`