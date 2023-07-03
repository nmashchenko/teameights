import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/Global.styles'

export const withTheme = (component) => () =>
  (
    <ThemeProvider theme={{ scrollbar: false }}>
      <GlobalStyle />
      {component()}
    </ThemeProvider>
  )
