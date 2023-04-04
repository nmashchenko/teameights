// * Modules
import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components'

// * Constants
import { GREEN } from '../../../../../constants/colors'
import {Text} from "../../../../../shared/styles/Tpography.styles";

export const NavBar = styled(Toolbar)`
  background: #26292B;
  padding: 0 !important;
`


export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`

export const SectionName = styled(Text)`
  font-size: 2rem;
  color: ${GREEN.text};
  line-height: 120%;
`
