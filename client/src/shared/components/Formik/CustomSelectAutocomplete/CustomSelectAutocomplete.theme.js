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
          fontWeight: 400,
        },
        root: {
          width: '100%',
          cursor: 'pointer',
          ':hover': {
            // background: '#2F3239',
          },
        },
        listbox: {
          maxHeight: '250px',
          color: 'white',
          '.MuiAutocomplete-option': {
            '&.Mui-focused': {
              backgroundColor: '#27431F',
            },
            '&[aria-selected="true"]': {
              backgroundColor: '#27431F',
            },
            '&.Mui-focused[aria-selected="true"]': {
              backgroundColor: '#27431F',
            },
          },

          '::-webkit-scrollbar': {
            /* WebKit */
            transition: 'all 0.2s',
            width: '5px',
            height: 'auto',
          },

          '::-webkit-scrollbar-track': {
            background: 'transparent',
          },

          '::-webkit-scrollbar-thumb': {
            background: `#5D9D0B`,
            borderRadius: '10px',
          },
        },
        paper: {
          background: '#2F3239',
          padding: '8px 0',
          margin: '10px 0 0 0',
        },
        inputRoot: {
          padding: '0 !important',
        },
        input: {
          padding: '8px 4px',
          cursor: 'pointer',
          '::placeholder': {
            fontWeight: '400',
          },
        },
        clearIndicator: {
          color: 'white',
        },
        endAdornment: {
          right: '0 !important',
        },
        tag: {
          background: '#2F3239',
          borderRadius: '5px',
          padding: '4px 8px',
          color: '#C1C1C4',
          fontSize: '14px',
          fontWeight: 400,
          margin: '5px',

          '& .MuiChip-label': {
            paddingRight: '12px',
            paddingLeft: '0',
          },

          '& .MuiChip-deleteIcon': {
            path: {
              stroke: '#C1C1C4',
            },

            ':hover': {
              path: {
                stroke: '#D42422',
              },
            },
          },
        },
      },
    },
  },
})
