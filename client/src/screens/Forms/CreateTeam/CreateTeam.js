// * Modules
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'
import { styled } from '@mui/material'

import CreateTeamForm from '../../../components/Forms/CreateTeamForm/CreateTeamForm'

const SnackbarStyled = styled(SnackbarProvider)`
  &.SnackbarItem-contentRoot {
    background-color: #cf625e;
  }
`

function CreateTeam() {
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
        <CreateTeamForm />
      </SnackbarStyled>
    </>
  )
}

export default CreateTeam
