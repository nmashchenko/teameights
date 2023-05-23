// * Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
// * Redux
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './shared/styles/Global.styles'
import { setupStore } from './store/store'
// * Components
import App from './App'

const store = setupStore()
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ThemeProvider theme={{ scrollbar: false }}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </Provider>
  </ThemeProvider>,
)
