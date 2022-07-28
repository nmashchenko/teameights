import styled from 'styled-components'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'

import { LIME, WHITE, BLACK, GREY } from '../../../../constants/colors'
import { device } from '../../../../constants/breakpoints'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Text = styled.h2`
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  font-size: 36px;
  margin: 0 0 30px 0;
`
