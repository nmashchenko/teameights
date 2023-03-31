import React from 'react'
import { styled } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'

import TeamForm from '../../../components/Forms/TeamForm/TeamForm'
import { GlobalStyle } from '../TeamsScreen/TeamsScreen.styles'
import TeamsTopTemplate from '../TeamsScreen/TeamsTopTemplate/TeamsTopTemplate'

function TeamScreen() {
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
        <GlobalStyle />
        {/* <CssBaseline /> */}
        <TeamsTopTemplate myTeam={true} />
        <TeamForm />
      </SnackbarStyled>
    </>
  )
}

export default TeamScreen
