// * Modules
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// * Styles
import {
  TextContainer,
  Text,
  ButtonGeneral,
  ButtonContainer,
  CardContainer,
  Card,
} from './NoTeamForm.styles'

// * Assets
import {useCheckAuth} from "../../../api/hooks/useCheckAuth";

function NoTeamForm() {
  const navigate = useNavigate()
  const {data: userData} = useCheckAuth()
  const user = userData?.data
  useEffect(() => {
    if (user?.userTeam) {
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
  )
}

export default NoTeamForm
