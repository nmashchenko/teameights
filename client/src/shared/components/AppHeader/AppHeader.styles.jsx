// * Modules
import Box from '@mui/material/Box'
import { Form } from 'formik'
import styled from 'styled-components'

import IconWrapper from '../IconWrapper/IconWrapper'

export const FiltersWrapper = styled.div`
  width: 100%;
  padding-left: 88px;

  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`
export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 49px;
  margin-bottom: 48px;
`

export const SearchIconWrapper = styled(IconWrapper)`
  cursor: pointer;
  display: none;
  position: absolute;
  top: 53px;
  z-index: 999;
  right: 27px;
  @media (max-width: 768px) {
    display: flex;
  }
`
