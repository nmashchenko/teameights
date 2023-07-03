import { GlobalStyle } from '../styles/Global.styles'

export const withStyle = (component) => () => <GlobalStyle>{component()}</GlobalStyle>
