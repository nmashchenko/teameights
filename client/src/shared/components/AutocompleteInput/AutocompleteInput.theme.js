import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    // Name of the component
    MuiAutocomplete: {
      styleOverrides: {
        // Name of the slot
        noOptions: {
          color: 'white',
          fontSize: 16,
        },
        paper: {
          background: '#2F3239',
          marginTop: '10px',
        },
        clearIndicator: {
          color: 'white',
        },
      },
    },
  },
})
