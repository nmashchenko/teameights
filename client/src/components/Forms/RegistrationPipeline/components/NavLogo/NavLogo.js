// * Modules
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'

import InfoIcon from '../../../../../assets/InfoIcon'
import { Text } from '../../../../../shared/styles/Tpography.styles'

// * Assets
import Hover from './Hover'
import { InfoContainer, InfoText, NavBar, SectionName } from './NavLogo.styles'

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
    <Box>
      <AppBar position="static" elevation={0}>
        <NavBar>
          {/* <SiteLogo /> */}
          <SectionName fontSize="20px">{sectionName}</SectionName>
          <div style={{ flexGrow: 1 }}></div>
          <InfoContainer onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
            <Text fontSize="18px">Need Help</Text>
            <InfoIcon />
          </InfoContainer>
          <Hover anchorEl={anchorEl} handlePopoverClose={handlePopoverClose} open={open} />
        </NavBar>
      </AppBar>
    </Box>
  )
}

export default NavLogo
