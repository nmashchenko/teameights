import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import SideLogo from '../../assets/BigSideLogo'
import ROUTES from '../../constants/routes'

import { Container, Navbar } from './ResetPasswordPageLayout.styles'

const ResetPasswordPageLayout = () => {
  return (
    <Container>
      <Navbar>
        <NavLink to={ROUTES.default}>
          <SideLogo />
        </NavLink>
      </Navbar>
      <Outlet />
    </Container>
  )
}

export default ResetPasswordPageLayout
