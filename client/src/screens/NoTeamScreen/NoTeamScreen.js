import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import NoTeam from '../../components/Team/NoTeam/NoTeam'
import TeamTypeSwitch from '../../components/Team/TeamTypeSwitch/TeamTypeSwitch'

function NoTeamScreen() {
  return (
    <>
      <CssBaseline />
      <TeamTypeSwitch myTeam={''} />
      <NoTeam />
    </>
  )
}

export default NoTeamScreen
