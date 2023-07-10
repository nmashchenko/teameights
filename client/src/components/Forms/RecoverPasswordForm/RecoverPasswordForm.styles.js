import { NavLink } from 'react-router-dom'
import { Form } from 'formik'
import styled from 'styled-components'

import { BLACK, GREEN, GREY, LIME, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  width: 100%;
  min-height: calc(100dvh - 88px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
  padding: 48px 24px;
`
export const RecoverForm = styled(Form)`
  width: 100%;
`

export const AccountActions = styled.div`
  display: flex;
  column-gap: 16px;
`

export const NavBarText = styled.a`
  font-size: 20px;
  font-weight: 500;
  color: ${WHITE.main};
`

export const NavigationLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  color: ${WHITE.main};
  text-decoration: none;

  &.active {
    color: ${GREEN.text};
    border-bottom: 1px solid ${GREEN.border};
  }
`

export const RecoverBox = styled.div`
  max-width: 470px;
  width: 100%;
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RecoverTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${GREEN.text};
  text-align: center;
`
export const RecoverText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${WHITE.main};
  text-align: center;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 48px;
`

export const FormWrapper = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex-direction: column;
`
