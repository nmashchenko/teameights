import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import ProfileForm from '../../../components/ProfileForm/ProfileForm'
import { Cards } from '../../../components/ProfileForm/ProfileForm.styles'

function Profile() {
  return (
    <>
      <CssBaseline />
      <Cards>
        <ProfileForm />
      </Cards>
    </>
  )
}

export default Profile
