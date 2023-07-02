import IconButton from '@mui/material/IconButton'
import styled from 'styled-components'

import { BLACK, GREY, LIME, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;

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

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`
export const PasswordsContainer = styled.div`
  height: 149px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
`

export const ShowPass = styled(IconButton)`
  right: -2px;
  top: -1px;
  && {
    position: absolute;
  }
`
