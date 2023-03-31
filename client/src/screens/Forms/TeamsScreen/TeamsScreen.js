import { useState } from 'react'
import { styled } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { SnackbarProvider } from 'notistack'

import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import TeamForm from '../../../components/Forms/TeamForm/TeamForm'
import TeamsList from '../../../components/Forms/TeamsList/TeamsList'
import { userAuth } from '../../../store/reducers/UserAuth'

import TeamCard from './TeamCard/TeamCard'
import TeamSearchBar from './TeamSearchBar/TeamSearchBar'
import TeamsTopTemplate from './TeamsTopTemplate/TeamsTopTemplate'
import { GlobalStyle } from './TeamsScreen.styles'

function TeamsScreen() {
  const SnackbarStyled = styled(SnackbarProvider)`
    &.SnackbarItem-contentRoot {
      background-color: #cf625e;
    }
  `
  const { data: user } = useCheckAuth()
  const { updateUser } = userAuth.actions

  console.log(user)
  // user !== undefined means we want to go to teams page

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
        <TeamsTopTemplate myTeam={false} />
        <TeamSearchBar />
        <TeamsList />
      </SnackbarStyled>
    </>
  )
}

export default TeamsScreen
