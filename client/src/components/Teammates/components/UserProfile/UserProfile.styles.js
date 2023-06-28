// * Modules
import { Box, Drawer } from '@mui/material'
import styled from 'styled-components'

export const Container = styled(Box)`
  position: absolute;
  /* top: 50%; */
  /* left: 0%; */
  margin: auto;
  /* transform: translate(-50%, -50%); */
  width: 470px;
  height: 530px;
  outline: none;
`

export const ProfileContainer = styled.div`
  background: #1a1c22;
  width: 100%;
  /* height: 100%; */
  border-radius: 15px;
  padding: 32px 38px;
  display: flex;

  position: relative;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '500'};
  font-size: ${(props) => props.fontSize || '24px'};
  color: ${(props) => props.color || '#fff'};
  margin: ${(props) => props.margin || '0px'};
  text-align: ${(props) => props.textAlign || 'none'};
`

export const CloseContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  :hover {
    svg {
      path {
        stroke: #d42422;
      }
    }
  }
`

export const FlexWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.gap || '0'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  width: ${(props) => props.width || '100%'};
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: ${(props) => props.alignItems || 'start'};
  max-height: ${(props) => props.maxHeight || 'none'};
  flex-wrap: ${(props) => props.flexWrap || 'nowrap'};
  margin-top: ${(props) => props.marginTop || '0'};
`

export const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;
`

export const FlagIcon = styled.img`
  width: 30px;
  height: 30px;
`

export const Framework = styled.div`
  width: ${(props) => props.width || '120px'};
  max-width: 120px;
  height: 32px;
  background: ${(props) => props.background || '#E0FF00'};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-basis: ${(props) => props.flexBasis || 'none'};

  > h3 {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.color || 'white'};
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const LanguageContainer = styled.div`
  flex-basis: ${(props) => props.flexBasis || 'none'};
  position: relative;
  background: #2f3239;
  border-radius: 5px;
  width: ${(props) => props.width || '40px'};
  max-width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
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
`

export const MobileProfile = styled(Drawer)`
  display: none;
  @media screen and (min-width: 0px) and (max-width: 520px) {
    display: block;
  }
`

export const MobileWrapper = styled(Box)`
  width: 100%;
  height: 100dvh;
  background: #26292b;
  padding: 24px 29px;
`
