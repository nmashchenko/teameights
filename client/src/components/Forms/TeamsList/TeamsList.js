// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
// import { useAddUserToTeam } from '../../../api/hooks/team/useAddUserToTeam'
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
import TeamCard from '../../../screens/Forms/TeamsScreen/TeamCard/TeamCard'
import Loader from '../../../shared/components/Loader/Loader'
import { userAuth } from '../../../store/reducers/UserAuth'
import TopTemplate from '../../TopTemplate/TopTemplate'

// * Styles
import {
  Card,
  CardContainer,
  ColumnNames,
  Container,
  style,
  TeamButton,
  TeamData,
  TeamImage,
  Text,
} from './TeamsList.styles'

function TeamsList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { data: user } = useCheckAuth()
  const { enqueueSnackbar } = useSnackbar()

  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState({})
  const { mutateAsync: joinUser } = useJoinTeam()
  const userId = user?._id

  const [open, setOpen] = useState(false)

  useEffect(() => {
    const makeRequest = async () => {
      const teams = await teamsAPI.getAllTeams()

      console.log(teams)
      setTeams(teams.data)
    }

    makeRequest()
  }, [])

  const handleClickOpen = (team) => {
    setSelectedTeam(team)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleJoin = async () => {
    console.log('1')
    const result = await joinUser({ user_id: userId, teamid: selectedTeam._id })

    if (result) {
      console.log('2')
      handleClose()
      navigate('/team')
    } else {
      console.log('3')
      enqueueSnackbar('You have joined the team already!', {
        preventDuplicate: true,
      })
    }
  }

  // lol we could move entire teams list to display her implementation
  // of checking out a team

  return (
    <>
      <Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <TeamCard
            user={user}
            handleJoin={handleJoin}
            team={selectedTeam}
            handleClose={handleClose}
          />
        </Modal>
        <CardContainer>
          <Card>
            <ColumnNames>
              <Text fontSize="16px" color="#5D9D0B">
                Photo
              </Text>
              <Text fontSize="16px" color="#5D9D0B">
                Name
              </Text>
              <Text fontSize="16px" color="#5D9D0B">
                People
              </Text>
            </ColumnNames>
            {teams.map((team, i) => (
              <TeamData margin="60px" key={i}>
                <TeamImage src="https://pbs.twimg.com/profile_images/1406293979323371528/TJ7BseVI_400x400.jpg" />
                <Text fontSize="18px" color="white">
                  {team.name}
                </Text>
                <Text fontSize="18px" color="white">
                  {team.members.length}/8
                </Text>
                <TeamButton onClick={() => handleClickOpen(team)}>
                  Show
                  <span>&nbsp;</span>
                </TeamButton>
              </TeamData>
            ))}
          </Card>
        </CardContainer>
      </Container>
    </>
  )
}

export default TeamsList
