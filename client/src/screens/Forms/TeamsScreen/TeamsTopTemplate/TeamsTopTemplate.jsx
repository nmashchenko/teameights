import TeameightsLogo from '../../../../assets/Team/TeameightsLogo.js'
import { Text } from '../../../../components/Forms/TeamsList/TeamsList.styles.js'
import NavBar from '../../../../components/NavBar/NavBar.jsx'
import {
  NavContainer,
  ToolbarContainer,
} from '../../../../components/TopTemplate/TopTemplate.styles.js'

import { CurrentTeam, Textbox } from './TeamsTopTemplate.styles.js'

const TeamsTopTemplate = ({ myTeam, switchMyTeam }) => {
  const switchPage = (isMyTeam) => {
    switchMyTeam(isMyTeam)
  }

  return (
    <ToolbarContainer>
      <NavContainer>
        <NavBar />
      </NavContainer>
      <TeameightsLogo />
      <CurrentTeam>
        <Textbox isMyTeam={myTeam}>
          <Text
            onClick={switchPage.bind(null, true)}
            fontSize="20px"
            color={`${myTeam ? '#5BD424' : 'white'}`}
          >
            My Team
          </Text>
          <span></span>
        </Textbox>
        <Textbox isMyTeam={!myTeam}>
          <Text
            onClick={switchPage.bind(null, false)}
            fontSize="20px"
            color={`${!myTeam ? '#5BD424' : 'white'}`}
          >
            All Teams
          </Text>
          <span></span>
        </Textbox>
      </CurrentTeam>
    </ToolbarContainer>
  )
}

export default TeamsTopTemplate
