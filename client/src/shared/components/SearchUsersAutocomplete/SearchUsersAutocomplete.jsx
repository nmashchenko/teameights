import { useEffect, useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { debounce } from '@mui/material/utils'

import { useGetUserByUsername } from '../../../api/hooks/temeights/useGetUserByUsername'

import { List } from './List'
import { InputLoader } from './Loader'
import { theme } from './SearchUsersAutocomplete.theme'
import { InputTextField } from './TextField'

export default function SearchUsersAutocomplete({ value, setValue, width = 412, ...props }) {
  const [inputValue, setInputValue] = useState('')
  const [user, setUser] = useState([])

  let { mutate: getUsers, isLoading: areUsersLoading } = useGetUserByUsername()

  const fetchUsers = useMemo(
    () =>
      debounce((username, callback) => {
        getUsers(username, {
          onSuccess: (data) => {
            if (data) {
              setUser(data)
            }
          },
        }) // Fetch user data from the React Query hook

        callback() // Call the callback immediately as the fetch is handled by React Query
      }, 400),
    [getUsers],
  )

  useEffect(() => {
    setUser([])
    if (inputValue) {
      fetchUsers(inputValue, () => {}) // Call the debounced fetch functio
    }
  }, [inputValue, fetchUsers])

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="user-search"
        sx={{
          width: width,
        }}
        size="small"
        getOptionLabel={(option) => (typeof option === 'string' ? option : option.username)}
        options={user}
        autoComplete
        includeInputInList
        filterSelectedOptions
        filterOptions={(x) => x}
        value={value}
        isOptionEqualToValue={(option, value) => option.username === value?.username}
        forcePopupIcon={false}
        noOptionsText={<InputLoader areUsersLoading={areUsersLoading} />}
        onChange={(event, newValue, reason) => {
          if (setValue && reason === 'selectOption') {
            setValue(newValue)
          } else if (setValue && reason === 'clear') {
            setValue(null)
          }
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        renderInput={(params) => <InputTextField params={params} />}
        renderOption={(props, option) => {
          return <List props={props} option={option} key={option.username} />
        }}
        {...props}
      />
    </ThemeProvider>
  )
}
