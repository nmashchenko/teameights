import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import Index from '../../../components/Profile'
import { Cards } from '../../../components/Profile/Profile.styles'

function ProfilePage() {
  return (
    <>
      <CssBaseline />
      <Cards>
        <Index />
      </Cards>
    </>
  )
}

export default ProfilePage
