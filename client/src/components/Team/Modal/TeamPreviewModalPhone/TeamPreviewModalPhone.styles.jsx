import { Box, Drawer } from '@mui/material'
import styled from 'styled-components'

export const MobileProfile = styled(Drawer)`
  display: none;

  & .MuiDrawer-paper {
    background: #26292b;

    ::-webkit-scrollbar {
      /* WebKit */
      transition: all 0.2s;
      width: 0;
      height: 0;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #000000;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 600px) {
    display: block;
  }
`

export const MobileWrapper = styled(Box)`
  width: 100%;
  min-height: 100dvh;
  background: #26292b;
  padding: 24px 29px;
`
export const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: ${(props) => props.background || '#46a11b'};
  height: 40px;
  width: ${(props) => props.width || '100px'};
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border-radius: 10px;
  border: ${(props) => props.border || 'none'};
  cursor: pointer;
  transition: all 0.2s;
  opacity: ${(props) => (props.disabled ? '.5' : '1')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  user-select: ${(props) => (props.disabled ? 'none' : 'auto')};
`

export const TeamImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  color: ${(props) => props.color || '#fff'};
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const FlagIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const NumberSpan = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: #5bd424;
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const UserImgWrapper = styled.div`
  position: absolute;
  left: ${(props) => props.left * 40 + 60 + 'px' || '70px'};
  z-index: ${(props) => props.zindex || 1};

  @media screen and (max-width: 400px) {
    left: ${(props) => props.left * 30 + 50 + 'px' || '70px'};
  }
`

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  @media screen and (max-width: 400px) {
    width: 40px;
    height: 40px;
    border-radius: 40px;
  }
`

export const CrownContainer = styled.div`
  position: absolute;
  transform: rotate(25deg) translate(95%, -75%);
  svg {
    width: 22px;
    height: 22px;
  }

  @media screen and (max-width: 400px) {
    transform: rotate(25deg) translate(95%, -75%);
    svg {
      width: 18px;
      height: 18px;
    }
  }
`
