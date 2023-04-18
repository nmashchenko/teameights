// * Modules
import React, { useState } from 'react'
// * Redux
import { Navigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import Add from '../../../assets/TeamPage/Add'
import Delete from '../../../assets/TeamPage/Delete'
import { LOCAL_PATH } from '../../../http'
import { Button } from '../../../shared/components/CustomButton/CustomButon.styles'
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
import {useTeamMembership} from "../../../api/hooks/team/useTeamMembership";

function TeamForm() {
  const [open, setOpen] = useState(false)
  const [inviteActive, setInviteActive] = useState(false)
  const [email, setEmail] = useState('')
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()
  const teamId = user?.team?._id
  const userId =  user?._id
  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData(teamId)
  const { mutate: deleteTeam, isLoading: isDeleting } = useDelete()
  const { mutateAsync: leaveTeam } = useTeamMembership('leave')

  const { enqueueSnackbar } = useSnackbar()
  const createDate = new Date(team?.createdAt)
    .toLocaleDateString({}, { timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric' })
    .replace(',', '')
  const handleOpenInvite = () => {
    setOpen(true)
    setInviteActive(true)
  }

  const handleOpenDelete = () => setOpen(true)
  const handleDelete = () => deleteTeam(team?._id)
  const handleClose = () => {
    setOpen(false)
    setInviteActive(false)
  }

  const handleInvite = async () => {
    const result = await teamsAPI.inviteUserByEmail(email, team?._id, user?._id)

    if (result.data.error) {
      enqueueSnackbar(result.data.error, {
        preventDuplicate: true,
      })
    } else {
      handleClose()
    }
  }

  const handleLeave =  () => leaveTeam({userId, teamId})

  if (isUserTeamLoading || isDeleting || isUserDataLoading) {
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
              <CreateButton onClick={handleDelete}>Yes</CreateButton>
            </>
          )}
        </Box>
      </Modal>
      <CardContainer>
        <Card>
          <MainCardContent>
            <LeftContainer>
              {/* TODO: find team members in useEffect. */}
              {team.members.map((member) => (
                <UserCard key={member._id}>
                  <UserImg
                    src={
                      member?.image
                        ? LOCAL_PATH + '/' + member.image
                        : 'https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg'
                    }
                  />
                  <UserInfo>
                    <Text fontSize="14px" fontWeight="100">
                      {member.username}
                    </Text>
                    <Text fontSize="14px" alignment="start">
                      {member.concentration}
                    </Text>
                  </UserInfo>
                </UserCard>
              ))}
            </LeftContainer>
            <RightContainer>
              <CircleContainer>
                <Text>{team.name}</Text>
              </CircleContainer>
              <TeamImgBorder src={team?.image ? LOCAL_PATH + '/' + team.image : tempImg} />
              <Text fontSize="16px" fontWeight="400">
                Creation date: {createDate}
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
            <ActionButton style={{color: 'red'}} onClick={handleLeave}>
              Leave
            </ActionButton>
          </ButtonCardContent>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default TeamForm
