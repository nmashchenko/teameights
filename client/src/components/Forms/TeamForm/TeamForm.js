// * Modules
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSnackbar } from 'notistack'
import { InfinitySpin } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

// * Redux
import { useSelector } from 'react-redux'

// * API
import teamsAPI from '../../../api/endpoints/team'

// * Styles
import {
  Container,
  CardContainer,
  Card,
  MainCardContent,
  ButtonCardContent,
  RightContainer,
  LeftContainer,
  Text,
  UserCard,
  UserImg,
  UserInfo,
  CreateButton,
  TeamImgBorder,
  CircleContainer,
  ActionButton,
  style,
  Input,
} from './TeamForm.styles'

// * Assets
import TopTemplate from '../../TopTemplate/TopTemplate'
import Add from '../../../assets/TeamPage/Add'
import Delete from '../../../assets/TeamPage/Delete'
import tempImg from './zxc1.jpg'

function TeamForm() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [inviteActive, setInviteActive] = useState(false)
  const [team, setTeam] = useState({})
  const [email, setEmail] = useState('')
  const [updating, setUpdating] = useState(true)
  const [members, setMembers] = useState([])

  const { user } = useSelector((state) => state.userReducer)

  useEffect(() => {
    const getTeam = async () => {
      if (isEqual(user, {})) {
        navigate('/auth/login', { replace: true })
      } else {
        const team = await teamsAPI.getTeamById(user.userTeam)
        const users = await teamsAPI.getTeamMembers(team.data.members)
        setTeam(team.data)
        setMembers(users.data)
        setUpdating(false)
      }
    }
    getTeam()
  }, [])

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
    const result = await teamsAPI.inviteUserByEmail(email, user.userTeam)
    if (result.data.error) {
      enqueueSnackbar(result.data.error, {
        preventDuplicate: true,
      })
    } else {
      handleClose()
    }
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
      <TopTemplate />
      <CardContainer>
        {updating ? (
          <div>
            <InfinitySpin width="150px" color="#4fa94d" />
          </div>
        ) : (
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
        )}
      </CardContainer>
    </Container>
  )
}

export default TeamForm
