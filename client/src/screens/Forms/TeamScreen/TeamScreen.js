import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TeamForm from '../../../components/Forms/TeamForm/TeamForm'
import { SnackbarProvider } from 'notistack'
import { styled } from '@mui/material'

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
        <CssBaseline />
        <TeamForm />
      </SnackbarStyled>
    </>
  )
}

export default TeamScreen
