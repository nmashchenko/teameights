import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import NoTeam from '../../components/Team/NoTeam/NoTeam'
import TeamsTopTemplate from '../../components/Team/TeamsTopTemplate/TeamsTopTemplate'

function NoTeamScreen() {
  return (
    <>
      <CssBaseline />
      <TeamsTopTemplate myTeam={true} />
      <NoTeam />
    </>
  )
}

export default NoTeamScreen
