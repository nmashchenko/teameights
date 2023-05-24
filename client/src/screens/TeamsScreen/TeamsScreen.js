import CssBaseline from '@mui/material/CssBaseline'

import TeamsList from '../../components/Forms/TeamsList/TeamsList'
import TeamsTopTemplate from '../Forms/TeamsScreen/TeamsTopTemplate/TeamsTopTemplate'

function TeamsScreen() {
  return (
    <>
      <CssBaseline />
      <TeamsTopTemplate myTeam={false} />
      <TeamsList />
    </>
  )
}

export default TeamsScreen
