import React from 'react'
import { Outlet } from 'react-router-dom'

import TopTemplate from '../../components/TopTemplate/TopTemplate'

import { Container } from './NavbarItemPageLayout.styles'

const NavBarItemPageLayout = () => {
  return (
    <Container>
      <TopTemplate />
      <Outlet />
    </Container>
  )
}

export default NavBarItemPageLayout
