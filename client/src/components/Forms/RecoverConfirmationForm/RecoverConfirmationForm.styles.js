import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components'

import { device } from '../../../constants/breakpoints'
import { BLACK, GREEN, GREY, LIME, WHITE } from '../../../constants/colors'

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

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0 45px 0;
  width: 420px;
  height: 139px;
  padding: 1px 20px;
  background: rgba(123, 233, 128, 0.51);
  border: 3px solid ${GREEN.border};
  border-radius: 20px;

  @media ${device.tablet} {
    max-width: 380px;
  }

  @media ${device.mobileL} {
    max-width: 260px;
    padding: 1px 14px;
    margin: 15px 0 25px 0;
  }
`

export const MiddleText = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: start;
  color: ${GREEN.text};

  @media ${device.tablet} {
    font-size: 19px;
  }

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.mobileM} {
    font-size: 17px;
  }
`

export const BackButton = styled.button`
  font-weight: 700;
  font-size: 28px;
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
  margin-top: 20px;
`
