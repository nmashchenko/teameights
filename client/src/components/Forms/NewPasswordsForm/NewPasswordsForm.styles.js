import MuiAlert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import styled from 'styled-components'

import { device } from '../../../constants/breakpoints'
import { BLACK, GREY, LIME, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`

export const NewPasswordBox = styled.div`
  max-width: 370px;
  width: 100%;
  min-height: 337px;
  display: flex;
  flex-direction: column;
`
export const InputsContainer = styled.div`
  height: 112px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
`

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ShowPass = styled(IconButton)`
  right: -2px;
  top: -1px;
  && {
    position: absolute;
  }

  /* @media ${device.mobileL} {
    right: 0;
    top: 14px;
  }

  @media ${device.mobileM} {
    right: 0;
    top: 13px;
  } */
`
