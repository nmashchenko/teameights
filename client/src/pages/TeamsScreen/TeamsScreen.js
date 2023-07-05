import CssBaseline from '@mui/material/CssBaseline'

import TeamsList from '../../components/Team/TeamsList/TeamsList'
import TeamsTopTemplate from '../../components/Team/TeamTypeSwitch/TeamTypeSwitch'

function TeamsScreen() {
  return (
    <>
      <CssBaseline />
      <TeamsTopTemplate myTeam={'teams'} />
      <TeamsList />
    </>
  )
}

export default TeamsScreen