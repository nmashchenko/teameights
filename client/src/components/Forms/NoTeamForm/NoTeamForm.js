import {
  Container,
  TextContainer,
  Text,
  ButtonGeneral,
  ButtonContainer,
  CardContainer,
  Card,
} from './NoTeamForm.styles'

import TopTemplate from '../../TopTemplate/TopTemplate'

function NoTeamForm() {
  return (
    <Container>
      <TopTemplate />
      <CardContainer>
        <Card>
          <TextContainer>
            <Text>You don't have a team yet!</Text>
            <Text>Let's create it...</Text>
          </TextContainer>
          <ButtonContainer>
            <ButtonGeneral onClick={() => {}}>Create team</ButtonGeneral>
            <ButtonGeneral onClick={() => {}}>Join existing</ButtonGeneral>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default NoTeamForm
