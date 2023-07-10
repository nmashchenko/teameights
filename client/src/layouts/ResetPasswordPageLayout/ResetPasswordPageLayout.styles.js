import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { BLACK, GREEN, WHITE } from '../../constants/colors'

export const Navbar = styled.nav`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: end;
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
`

export const NavigationLinkActive = styled(NavigationLink)`
  color: ${GREEN.text};
  border-bottom: 1px solid ${GREEN.border};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100dvh;
  width: 100%;
  background: ${BLACK.background};
`
