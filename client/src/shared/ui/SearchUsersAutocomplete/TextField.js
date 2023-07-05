import React from 'react'
import { TextField } from '@mui/material'
import SearchIcon from 'shared/assets/Shared/SearchIcon'

export const InputTextField = ({ params }) => {
  return (
    <TextField
      sx={{
        border: '2px solid #86878B',
        borderRadius: '10px',
        '& fieldset': { border: 'none' },
        padding: '2px 7px',
      }}
      {...params}
      label="" // removing jumping placeholder
      placeholder="Search for users"
      InputProps={{
        ...params.InputProps,
        startAdornment: (
          <React.Fragment>
            <SearchIcon />
          </React.Fragment>
        ),
        sx: { color: 'white' },
      }}
    />
  )
}
