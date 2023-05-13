import { styled } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'

import TeamsList from '../../components/Forms/TeamsList/TeamsList'

function TeamsScreen() {
  const SnackbarStyled = styled(SnackbarProvider)`
    &.SnackbarItem-contentRoot {
      background-color: #cf625e;
    }
  `

  return (
    <>
      <SnackbarStyled
        maxSnack={4}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="error"
      >
        <CssBaseline />
        <TeamsList />
      </SnackbarStyled>
    </>
  )
}

export default TeamsScreen
