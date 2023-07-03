import { CircularProgress } from '@mui/material'

import { LoaderContainer, LoaderText } from './SearchUsersAutocomplete.styles'

export const InputLoader = ({ areUsersLoading }) => {
  if (areUsersLoading) {
    return (
      <LoaderContainer>
        <CircularProgress size={20} color="inherit" />
        <LoaderText>Getting users...</LoaderText>
      </LoaderContainer>
    )
  } else {
    return 'No users found'
  }
}
