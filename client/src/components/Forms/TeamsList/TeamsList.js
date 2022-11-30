// * Modules
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import isEqual from 'lodash/isEqual'

// * Styles
import {
  Container,
  CardContainer,
  Card,
  ColumnNames,
  Text,
  TeamData,
  TeamImage,
  TeamButton,
  style,
} from './TeamsList.styles'
import TopTemplate from '../../TopTemplate/TopTemplate'

// * API
import teamsAPI from '../../../api/endpoints/team'

function TeamsList() {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.userReducer)
  const { enqueueSnackbar } = useSnackbar()

  const [teams, setTeams] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState({})
  const userId = user._id

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
    const result = await teamsAPI.addUserToTeam(userId, teamId)
    if (isEqual(result.data, {})) {
      enqueueSnackbar('You have joined the team already!', {
        preventDuplicate: true,
      })
    } else {
      handleClose()
      navigate('/myteam', { replace: true })
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
            {teams.map((team) => (
              <TeamData margin="60px">
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
