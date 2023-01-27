// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { Navigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import Add from '../../../assets/TeamPage/Add'
import Delete from '../../../assets/TeamPage/Delete'
import Loader from '../../../shared/components/Loader/Loader'

// * Styles
import {
  ActionButton,
  ButtonCardContent,
  Card,
  CardContainer,
  CircleContainer,
  Container,
  CreateButton,
  Input,
  LeftContainer,
  MainCardContent,
  RightContainer,
  style,
  TeamImgBorder,
  Text,
  UserCard,
  UserImg,
  UserInfo,
} from './TeamForm.styles'
import tempImg from './zxc1.jpg'

function TeamForm() {
  const [open, setOpen] = useState(false)
  const [inviteActive, setInviteActive] = useState(false)
  const [email, setEmail] = useState('')
  const [members, setMembers] = useState([])

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()

  useEffect(() => {
    const getTeam = async () => {
      if (team) {
        const users = await teamsAPI.getTeamMembers(team.members)

        setMembers(users.data)
      }
    }

    getTeam()
  }, [team])

  const { enqueueSnackbar } = useSnackbar()

  const handleOpenInvite = () => {
    setOpen(true)
    setInviteActive(true)
  }

  const handleOpenDelete = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setInviteActive(false)
  }

  const handleInvite = async () => {
    const result = await teamsAPI.inviteUserByEmail(email, team)

    if (result.data.error) {
      enqueueSnackbar(result.data.error, {
        preventDuplicate: true,
      })
    } else {
      handleClose()
    }
  }

  if (isUserTeamLoading) {
    return <Loader />
  }
  if (!team) {
    return <Navigate to={'/team'} />
  }

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {inviteActive ? (
            <>
              <Text margin="0">Send invite to your team!</Text>
              <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></Input>
              <CreateButton onClick={handleInvite}>Send</CreateButton>
            </>
          ) : (
            <>
              <Text margin="0">Do you want to delete this team?</Text>
              <CreateButton>Yes</CreateButton>
            </>
          )}
        </Box>
      </Modal>
      <CardContainer>
        <Card>
          <MainCardContent>
            <LeftContainer>
              {/* TODO: find team members in useEffect. */}
              {members.map((member, i) => (
                <UserCard key={i}>
                  <UserImg src="https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg" />
                  <UserInfo>
                    <Text fontSize="14px" fontWeight="100">
                      {member.userUsername}
                    </Text>
                    <Text fontSize="14px" alignment="start">
                      {member.userConcentration}
                    </Text>
                  </UserInfo>
                </UserCard>
              ))}
            </LeftContainer>
            <RightContainer>
              <CircleContainer>
                <Text>{team.name}</Text>
              </CircleContainer>
              <TeamImgBorder src={tempImg} />
              <Text fontSize="16px" fontWeight="400">
                Creation date: {team.created_at}
              </Text>
              <CreateButton>Edit</CreateButton>
            </RightContainer>
          </MainCardContent>
          <ButtonCardContent>
            <ActionButton onClick={handleOpenInvite}>
              <Add />
            </ActionButton>
            <ActionButton onClick={handleOpenDelete}>
              <Delete />
            </ActionButton>
          </ButtonCardContent>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default TeamForm
