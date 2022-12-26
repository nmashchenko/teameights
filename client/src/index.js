// * Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

// * Redux
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

// * Components
import App from './App'

const GlobalStyle = createGlobalStyle`
 * {  
   font-family: "Montserrat" !important;
 }
`
const store = setupStore()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
)
