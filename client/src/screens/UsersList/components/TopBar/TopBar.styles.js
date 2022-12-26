// * Modules
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: transparent;
  }
`

export const BoxContainer = styled(Box)`
  padding: 27px 45px;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    padding: 20px 20px;
  }
`

export const LogoContainer = styled.div`
  margin-right: 7%;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    display: none;
  }
`

export const AlternativeLogoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    display: inherit;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  background: none;
  width: 46px;
  height: 45px;
  cursor: pointer;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    display: none;
  }
`

export const SelectContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    display: none;
  }
`

export const FilterContainer = styled.div`
  visibility: hidden;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 0px) and (max-width: 980px) {
    visibility: visible;
  }
`

export const FilterText = styled.h4`
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  margin-left: 10px;
  margin: 0 0 0 8px;
`
