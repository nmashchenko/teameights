// * Modules
import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'

// * Constants
import { BLACK, WHITE } from '../../../../constants/colors'

export const NavBar = styled(Toolbar)`
  &.css-hyum1k-MuiToolbar-root {
    background: ${BLACK.background};
    padding: 30px 40px;
    border-bottom: 1px solid ${BLACK.line} !important;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

export const InfoText = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: ${WHITE.main};
`
