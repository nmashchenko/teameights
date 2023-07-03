// * Modules
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// * Assets
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import ROUTES from '../../../constants/routes'
import Loader from '../../../shared/components/Loader/Loader'
import { startRegistration } from '../../../store/reducers/RegistrationAuth'
// * Styles
import { Container, Text } from '../TeamForm/TeamForm.styles'

import { Center, TeamButton } from './NoTeam.styles'

function NoTeamForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data: user, isLoading: isUserDataLoading } = useCheckAuth()

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

  useEffect(() => {
    if (user?.team) {
      navigate(`/team/${user?.team._id}`)
    }
  }, [user])

  return (
    <Container>
      {isUserDataLoading && <Loader />}
      {!user?.team && (
        <>
          <Text fontWeight="500" fontSize="24px" margin="0 0 8px 0" textAlign="center">
            You don't have a team yet!
          </Text>
          <Text fontSize="16px" margin="0 0 8px 0" fontWeight="400" textAlign="center">
            You can create a new team or join an existing team.
          </Text>
          <TeamButton background="#46a11b" onClick={handleCreate}>
            Create Team
          </TeamButton>
          <TeamButton onClick={handleJoin}>Join Team</TeamButton>
        </>
      )}
    </Container>
  )
}

export default NoTeamForm
