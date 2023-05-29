import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import TeamForm from '../../components/Team/TeamForm/TeamForm'
import TeamsTopTemplate from '../../components/Team/TeamTypeSwitch/TeamTypeSwitch'

function TeamScreen() {
  return (
    <>
      <CssBaseline />
      <TeamsTopTemplate myTeam={true} />
      <TeamForm />
    </>
  )
}

export default TeamScreen
