import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import { Cards } from '../../components/Profile/Profile.styles'

function ProfileScreen({ children }) {
  return (
    <>
      <CssBaseline />
      <Cards>{children}</Cards>
    </>
  )
}

export default ProfileScreen
