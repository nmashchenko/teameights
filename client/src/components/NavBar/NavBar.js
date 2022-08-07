// * Modules
import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'

// * Assets
import SiteLogo from '../../assets/SiteLogo'

// * Styles
import { NavBarContainer } from './NavBar.styles'

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <NavBarContainer>
          <SiteLogo />
        </NavBarContainer>
      </AppBar>
    </Box>
  )
}

export default NavBar
