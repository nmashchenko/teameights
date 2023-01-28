// * Modules
import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

// * Assets
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import ROUTES from '../../../constants/routes'
import Loader from '../../../shared/components/Loader/Loader'

// * Styles
import {
  ButtonContainer,
  ButtonGeneral,
  Card,
  CardContainer,
  Text,
  TextContainer,
} from './NoTeamForm.styles'

function NoTeamForm() {
  const navigate = useNavigate()
  const { data: user } = useCheckAuth()

  const handleCreate = () => {
    if (!user?.isRegistered) {
      navigate(ROUTES.login)
    } else {
      navigate('/create-team', { replace: true })
    }
  }

  const handleJoin = () => {
    if (!user?.isRegistered) {
      navigate(ROUTES.login)
    } else {
      navigate('/teams', { replace: true })
    }
  }

  if (user?.userTeam) {
    return <Navigate to="/myteam" />
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
