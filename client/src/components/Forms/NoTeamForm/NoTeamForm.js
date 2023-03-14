// * Modules
import { Navigate, useNavigate } from 'react-router-dom'

// * Assets
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'

// * Styles
import { ButtonContainer, Card, CardContainer, Text, TextContainer } from './NoTeamForm.styles'

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
    navigate('/teams')
    // if (!user?.isRegistered) {
    //   navigate(ROUTES.login)
    //   console.log('LOL')
    // } else {
    //   console.log('ok')
    //   navigate('/teams')
    // }
  }

  // if (user?.userTeam) {
  //   return <Navigate to="/myteam" />
  // }

  return (
    <CardContainer>
      <Card>
        <TextContainer>
          <Text>You don't have a team yet!</Text>
          <Text>Let's create it...</Text>
        </TextContainer>
        <ButtonContainer>
          <CustomButton onClick={handleCreate}>Create team</CustomButton>
          <CustomButton onClick={handleJoin}>Join existing</CustomButton>
        </ButtonContainer>
      </Card>
    </CardContainer>
  )
}

export default NoTeamForm
