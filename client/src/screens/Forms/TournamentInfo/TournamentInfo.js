import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TournamentInfo from '../../../components/Forms/TournamentInfo/TournamentInfo'
import { SnackbarProvider } from 'notistack'
import { styled } from '@mui/material'

function TournamentScreen() {
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
        <TournamentInfo />
      </SnackbarStyled>
    </>
  )
}

export default TournamentScreen
