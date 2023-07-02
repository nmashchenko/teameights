import { NavLink } from 'react-router-dom'
import { Form } from 'formik'
import styled from 'styled-components'

import { BLACK, GREEN, GREY, LIME, WHITE } from '../../../constants/colors'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${BLACK.background};
  position: relative;
`
export const RecoverForm = styled(Form)`
  width: 100%;
`

export const Navbar = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  margin-top: 49px;
  padding: 0 55px;
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
  max-width: 370px;
  width: 100%;
  min-height: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RecoverTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  color: ${GREEN.text};
  margin-bottom: 8px;
  text-align: center;
`
export const RecoverText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${WHITE.main};
  text-align: center;
  margin-bottom: 48px;
`

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 48px;
`
