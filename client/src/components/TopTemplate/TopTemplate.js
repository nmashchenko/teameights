import TeameightsLogo from '../../assets/Team/TeameightsLogo.js'
import NavBar from '../NavBar/NavBar'

import { NavContainer, ToolbarContainer } from './TopTemplate.styles'

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
