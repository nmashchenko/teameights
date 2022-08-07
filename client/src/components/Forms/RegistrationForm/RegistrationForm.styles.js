// * Modules
import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import isEqual from 'lodash/isEqual'
import { Link } from 'react-router-dom'

// * Constants
import { WHITE, BLACK, GREEN } from '../../../constants/colors'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${BLACK.background};
    padding: 30px 40px;
  }
`

export const RegistrationContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 78px);
  display: flex;
  background: ${BLACK.background};
`

export const LeftScreenContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    height: inherit;
    width: 100%;
  }
`

export const LoginSignUpContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginSignUpLinks = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    width: 370px;
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    width: 320px;
  }
`

export const RegistrationLink = styled(Link)`
  text-decoration: none;
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '32px'};
  color: ${(props) => (isEqual(props.color, 'white') ? WHITE.main : GREEN.text)};
  border-bottom: ${(props) => props.border || '3px solid #72EB3A'};
  margin-bottom: ${(props) => props.marginbot || '1px'};
  margin-top: ${(props) => props.marginTop || '0px'};
  cursor: pointer;

  &:hover {
    transition: 0.15s;
    -webkit-transform: scale(1.02);
    -ms-transform: scale(1.02);
    transform: scale(1.02);
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    font-size: ${(props) => props.fontSize || '25px'};
  }
`

export const UsernameEmailPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`

export const RegistrationInput = styled.input`
  outline: none;
  width: 400px;
  height: 55px;
  border-radius: 5px;
  margin: ${(props) => props.margin || '0px'};
  background: ${WHITE.main};
  font-weight: 600;
  font-size: 18px;
  color: grey;
  padding-left: 10px;
  padding-right: ${(props) => props.paddingright || '15px'};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &::placeholder {
    font-weight: 600;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    width: 370px;
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    width: 320px;
  }
`

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegistrationButton = styled.button`
  font-weight: 600;
  font-size: 20px;
  border: none;
  width: 400px;
  height: 50px;
  background: ${GREEN.button};
  color: ${WHITE.main};
  text-align: center;
  border-radius: 5px;
  margin-top: 50px;

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.15s;
    -webkit-transform: scale(1.01);
    -ms-transform: scale(1.01);
    transform: scale(1.01);
  }

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    width: 370px;
  }

  @media screen and (min-width: 0px) and (max-width: 450px) {
    width: 320px;
  }
`

export const OrContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`

export const OrLine = styled.hr`
  width: 20px;
  border: 1px solid #ffffff;
`

export const AlternativeRegistration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 20px 0 20px 0;

  > div {
    cursor: pointer;
    &:hover {
      transition: 0.15s;
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
    }
  }
`

export const RightScreenContainer = styled.div`
  width: 50%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    display: none;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  text-align: center;
  width: 500px;
  height: 610px;

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    width: 400px;
    height: 510px;
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`

export const Text = styled.h3`
  font-weight: ${(props) => props.fontWeight || '700'};
  font-size: ${(props) => props.fontSize || '42px'};
  text-transform: ${(props) => props.textTransform || 'uppercase'};
  color: ${WHITE.main};
  margin: ${(props) => props.margin || '0'};

  @media screen and (min-width: 950px) and (max-width: 1200px) {
    font-size: ${(props) => props.fontSize || '32px'};
  }
`

export const SpannedLetter = styled.span`
  color: ${GREEN.text};
`

export const SeparateLine = styled.div`
  border: 1px solid rgba(54, 90, 8, 0.5);
  height: 75vh;
  position: absolute;
  left: 50%;
  top: 12%;

  @media screen and (min-width: 0px) and (max-width: 950px) {
    display: none;
  }
`

export const ShowPass = styled(IconButton)`
  top: 7px;
  right: 10px;
  && {
    position: absolute;
  }
`
