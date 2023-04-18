import { Link, useNavigate } from 'react-router-dom'

import { Center, Container, CreateTeam, TeamButton, Text } from '../TeamForm.styles'

const NoTeam = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Center>
        <Text fontWeight="600" fontSize="24px" margin="0 0 8px 0">
          You don't have a team yet!
        </Text>
        <Text fontSize="16px" margin="0 0 8px 0">
          You can create a new team or join an existing team.
        </Text>
        <Link to={'/create-team'}>
          <CreateTeam>Create Team</CreateTeam>
        </Link>
        <TeamButton
          onClick={() => {
            navigate('/teams')
          }}
        >
          Join Team
        </TeamButton>
      </Center>
    </Container>
  )
}

export default NoTeam
