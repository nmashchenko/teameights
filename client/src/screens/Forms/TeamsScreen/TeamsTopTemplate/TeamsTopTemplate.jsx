import { useNavigate } from 'react-router-dom'

import TeameightsLogo from '../../../../assets/Team/TeameightsLogo.js'
import NavBar from '../../../../components/NavBar/NavBar.jsx'
import {
  NavContainer,
  ToolbarContainer,
} from '../../../../components/TopTemplate/TopTemplate.styles.js'

import { CurrentTeam, Text, Textbox } from './TeamsTopTemplate.styles.js'

const TeamsTopTemplate = ({ myTeam }) => {
  const navigate = useNavigate()

  return (
    //  <ToolbarContainer>
    //   <NavContainer>
    //     <NavBar />
    //   </NavContainer>
    //   <TeameightsLogo />
    <CurrentTeam>
      <Textbox>
        <Text
          isMyTeam={myTeam}
          onClick={() => {
            navigate('/my-team')
          }}
          fontSize="20px"
        >
          My Team
          <span></span>
        </Text>
      </Textbox>
      <Textbox>
        <Text
          onClick={() => {
            navigate('/teams')
          }}
          fontSize="20px"
          isMyTeam={!myTeam}
        >
          All Teams
          <span></span>
        </Text>
      </Textbox>
    </CurrentTeam>
    // </ToolbarContainer>
  )
}

export default TeamsTopTemplate
