import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { GREEN, WHITE } from '../../constants/colors'

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
  z-index: 999;
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
