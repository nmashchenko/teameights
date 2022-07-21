import styled from 'styled-components'
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

import {LIME, WHITE, BLACK, GREY} from '../../../../constants/colors'
import {device} from '../../../../constants/breakpoints'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: transparent;
  }
`

export const BoxContainer = styled(Box)`
  padding: 30px 100px;
`

export const NavIconContainer = styled.div`
  margin-right: 20px;
`

export const LogoContainer = styled.div`
  margin-right: 14%;
`

export const Button = styled.button`
  border: none;
  outline: none;
  width: 46px;
  height: 45px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.9);
  cursor: pointer;
`

export const SelectContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center
`