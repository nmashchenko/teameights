import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'

import TeamForm from '../../components/Forms/TeamForm/TeamForm'
import TeamsTopTemplate from '../Forms/TeamsScreen/TeamsTopTemplate/TeamsTopTemplate'

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
