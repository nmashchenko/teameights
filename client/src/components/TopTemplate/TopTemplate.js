import { ToolbarContainer, NavContainer } from './TopTemplate.styles'

import TeameightsLogo from '../../assets/Team/TeameightsLogo.js'
import NavBar from '../NavBar/NavBar'

const TopTemplate = () => {

  return (
    <ToolbarContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>
      <TeameightsLogo />
    </ToolbarContainer>
  )
}

export default TopTemplate
