import React from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from '../../components/NavBar/NavBar'
import TeamsTopTemplate from '../../screens/Forms/TeamsScreen/TeamsTopTemplate/TeamsTopTemplate'

import { Container } from './NavbarItemPageLayout.styles'

const NavBarItemPageLayout = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  )
}

export default NavBarItemPageLayout
