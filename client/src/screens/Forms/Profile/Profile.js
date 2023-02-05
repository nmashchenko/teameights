import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import { Cards } from '../../../components/Profile/Profile.styles'

function ProfilePage({ children }) {
  return (
    <>
      <CssBaseline />
      <Cards>{children}</Cards>
    </>
  )
}

export default ProfilePage
