import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'
import { LIME, WHITE, BLACK, GREY } from '../../../constants/colors'
import { device } from '../../../constants/breakpoints'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${LIME.background};
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const RecoverContainer = styled.div`
  width: 100%;
  height: 91.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${LIME.background};
`

export const RecoverBox = styled.div`
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

export const RecoverInput = styled.input`
  outline: none;
  width: 96%;
  height: 77px;
  text-align: center;
  border: 1px solid #000000;
  border-radius: 3px;
  margin: 44px 0 44px 0;
  background: ${GREY.background};
  font-weight: 600;
  font-size: 22px;
  color: ${BLACK.main};

  &::placeholder {
    font-weight: 600;
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

export const RecoverButton = styled.button`
  font-weight: 700;
  font-size: 23px;
  border: none;
  width: 97%;
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

export const BackButton = styled.button`
  font-weight: 700;
  font-size: 26px;
  color: ${BLACK.main};
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
    transition: 0.4s;
    color: ${LIME.main};
  }

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.mobileM} {
    font-size: 17px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 34px;
  align-items: center;
  margin-top: 50px;
`
