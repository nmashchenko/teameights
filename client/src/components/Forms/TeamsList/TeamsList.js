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
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
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
  const [open, setOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState({})
  const { mutateAsync: joinUser } = useJoinTeam()
  const userId = user?._id

  useEffect(() => {
    const makeRequest = async () => {
      const teams = await teamsAPI.getAllTeams()

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

  const handleJoin = async (teamId) => {
    const result = await joinUser({ user_id: userId, teamid: teamId })

    if (result) {
      handleClose()
      navigate('/myteam')
    } else {
      enqueueSnackbar('You have joined the team already!', {
        preventDuplicate: true,
      })
    }
  }

  return (
    <>
      <Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Text textAlign="center">Are you sure you want to join {selectedTeam.name}?</Text>
            <TeamButton
              width="140px"
              height="60px"
              fontSize="20px"
              fontWeight="600"
              onClick={() => handleJoin(selectedTeam._id)}
            >
              Join
            </TeamButton>
            <TeamButton
              onClick={handleClose}
              width="140px"
              height="60px"
              fontSize="20px"
              fontWeight="600"
            >
              Cancel
            </TeamButton>
          </Box>
        </Modal>
        <TopTemplate />
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
                <TeamButton onClick={() => handleClickOpen(team)}>Join</TeamButton>
              </TeamData>
            ))}
          </Card>
        </CardContainer>
      </Container>
    </>
  )
}

export default TeamsList
