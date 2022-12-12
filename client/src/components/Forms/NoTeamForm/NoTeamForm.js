// * Modules
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// * Assets
import TopTemplate from '../../TopTemplate/TopTemplate'

// * Styles
import {
  ButtonContainer,
  ButtonGeneral,
  Card,
  CardContainer,
  Container,
  Text,
  TextContainer,
} from './NoTeamForm.styles'

function NoTeamForm() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.userReducer)

  useEffect(() => {
    if (user.userTeam) {
      navigate('/myteam', { replace: true })
    }
  }, [])

  const handleCreate = () => {
    navigate('/create-team', { replace: true })
  }

  const handleJoin = () => {
    navigate('/teams', { replace: true })
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
            <ButtonGeneral onClick={handleJoin}>Join existing</ButtonGeneral>
          </ButtonContainer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default NoTeamForm
