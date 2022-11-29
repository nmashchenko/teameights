// * Modules
import { useNavigate } from 'react-router-dom'

// * Styles
import {
  Container,
  TextContainer,
  Text,
  ButtonGeneral,
  ButtonContainer,
  CardContainer,
  Card,
} from './NoTeamForm.styles'

// * Assets
import TopTemplate from '../../TopTemplate/TopTemplate'

function NoTeamForm() {
  const navigate = useNavigate()

  const handleCreate = () => {
    navigate('/create-team', { replace: true })
  }
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
            <ButtonGeneral onClick={handleCreate}>Create team</ButtonGeneral>
            <ButtonGeneral onClick={() => {}}>Join existing</ButtonGeneral>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default NoTeamForm
