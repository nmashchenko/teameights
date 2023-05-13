// * Modules
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

// * Assets
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'
import { startRegistration } from '../../../store/reducers/RegistrationAuth'

// * Styles
import { ButtonContainer, Card, CardContainer, Text, TextContainer } from './NoTeamForm.styles'

function NoTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: user } = useCheckAuth()

  const handleCreate = () => {
    if (!user?.isRegistered) {
      navigate(ROUTES.login)
    } else {
      dispatch(startRegistration())
      navigate('/teams/create', { replace: true })
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
    return <Navigate to={`/team/${user.team._id}`} />
  }

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
