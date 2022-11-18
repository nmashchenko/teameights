import {
  Container,
  TextContainer,
  Text,
  ButtonGeneral,
  Container2,
  ToolbarContainer,
  NavContainer,
  NavContainer3,
  ButtonContainer,
  LogoText,
  CardContainer,
  Card,
} from './NoTeamForm.styles'

import TeameightsLogo from '../../../assets/Team/TeameightsLogo.js'
import NotificationLogo from '../../../assets/Sidebar/Notification'
import ExitLogo from '../../../assets/Sidebar/Exit'
import Sidebar from '../../../assets/NavBarIcon'

function NoTeamForm() {
  const handleClick = () => {
    console.log('hello')
  }

  return (
    <Container>
      <ToolbarContainer>
        <NavContainer>
          <Sidebar />
          <Text fontSize="18px" fontWeight="500">
            My Team
          </Text>
        </NavContainer>
        <TeameightsLogo />
      </ToolbarContainer>
      <CardContainer>
        <Card>
          <TextContainer>
            <Text>You don't have a team yet!</Text>
            <Text>Let's create it...</Text>
          </TextContainer>
          <ButtonContainer>
            <ButtonGeneral onClick={handleClick}>Create team</ButtonGeneral>
            <ButtonGeneral>Join existing</ButtonGeneral>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default NoTeamForm
