import IconButton from '@mui/material/IconButton'
import { Form } from 'formik'
import styled from 'styled-components'

import { BLACK, GREY, LIME, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  display: flex;
  min-height: calc(100dvh - 88px);
  width: 100%;
  padding: 48px 24px;

  justify-content: center;
  align-items: center;
`

export const NewPasswordBox = styled.div`
  max-width: 370px;
  width: 100%;
  min-height: 337px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`

export const PasswordContainer = styled.div`
  position: relative;
  width: 100%;
`
export const PasswordsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
`

export const ShowPass = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(5px, 20px);
  }
`
