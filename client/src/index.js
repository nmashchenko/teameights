// * Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
// * Redux
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'

import { setupStore } from './store/store'
// * Components
import App from './App'

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: NoirPro-Regular;
    src: local('NoirPro-Regular'),  url(./fonts/FontsFree-Net-Noir_regular.woff) format('woff');
    font-display: swap;
  }
  
 *,
 *::before,
 *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Montserrat" !important;

 }
  
 ul{
   list-style-type: none;
 }
`
const store = setupStore()
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </Provider>,
)
