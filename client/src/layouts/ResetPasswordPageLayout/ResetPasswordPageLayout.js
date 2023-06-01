import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import SideLogo from '../../assets/BigSideLogo'
import ROUTES from '../../constants/routes'

import {
  AccountActions,
  Navbar,
  NavigationLink,
  NavigationLinkActive,
} from './ResetPasswordPageLayout.styles'

const ResetPasswordPageLayout = () => {
  return (
    <>
      <Navbar>
        <NavLink to={ROUTES.default}>
          <SideLogo />
        </NavLink>
        <AccountActions>
          <NavigationLinkActive to={ROUTES.passwordRecover}>Log in</NavigationLinkActive>
          <NavigationLink to={ROUTES.registration}>Sign up</NavigationLink>
        </AccountActions>
      </Navbar>
      <Outlet />
    </>
  )
}

export default ResetPasswordPageLayout
