// * Modules
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import InfoIcon from '../../../../assets/InfoIcon'

// * Assets
import SiteLogo from '../../../../assets/SiteLogo'
import Hover from './Hover'

import { NavBar, InfoContainer, InfoText } from './NavLogo.styles'

function NavLogo({ sectionName }) {
  const [anchorEl, setAnchorEl] = useState(null)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <NavBar>
          {/* <SiteLogo /> */}
          <InfoText fontSize="20px">{sectionName}</InfoText>
          <div style={{ flexGrow: 1 }}></div>
          <InfoContainer onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <InfoText fontSize="18px">Need Help</InfoText>
            <InfoIcon />
          </InfoContainer>
          <Hover anchorEl={anchorEl} handlePopoverClose={handlePopoverClose} open={open} />
        </NavBar>
      </AppBar>
    </Box>
  )
}

export default NavLogo
