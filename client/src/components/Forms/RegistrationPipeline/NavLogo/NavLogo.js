// * Modules
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { render } from 'react-dom'

// * Assets
import SiteLogo from '../../../../assets/SiteLogo'

import { NavBar } from './NavLogo.styles'

function NavLogo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <NavBar>
          <SiteLogo />
        </NavBar>
      </AppBar>
    </Box>
  )
}

export default NavLogo
