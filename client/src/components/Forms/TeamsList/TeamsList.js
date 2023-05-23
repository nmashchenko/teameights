// * Modules
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
// * Redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useGetAllTeams } from '../../../api/hooks/team/useGetAllTeams'
// import { useAddUserToTeam } from '../../../api/hooks/team/useAddUserToTeam'
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
import { useLeaveAndJoin } from '../../../api/hooks/team/useLeaveAndJoin'
import { useLeave } from '../../../api/hooks/team/useLeaveTeam'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../assets/fonts'
import { LOCAL_PATH } from '../../../http'
import TeamCard from '../../../screens/Forms/TeamsScreen/TeamCard/TeamCard'
import Loader from '../../../shared/components/Loader/Loader'
import TeamActionModal from '../TeamForm/TeamActionModal'
import { style } from '../TeamForm/TeamForm.styles'

// * Styles
import {
  Card,
  CardContainer,
  ColumnNames,
  Container,
  TeamButton,
  TeamData,
  TeamImage,
  Text,
} from './TeamsList.styles'

function TeamsList() {
  const navigate = useNavigate()

  const { data: user } = useCheckAuth()

  const [selectedTeam, setSelectedTeam] = useState({})
  const { mutateAsync: joinUser, isLoading: isUserTeamLoading } = useJoinTeam()
  const userId = user?._id

  const [open, setOpen] = useState(false)

  const [changeModal, setChangeModal] = useState('')

  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()

  const { mutate: leaveAndJoin, isLoading: isLeavingAndJoining } = useLeaveAndJoin()

  const { data: teams, isLoading: isLoadingTeams } = useGetAllTeams()

  const handleClickOpen = (team) => {
    setSelectedTeam(team)
    setOpen(true)
    setChangeModal('joinTeam')
  }

  const handleLeave = () => {
    leaveTeam({
      user_id: user?._id,
      teamid: user?.team._id,
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleJoin = async () => {
    if (user.team !== undefined) {
      // already on a team

      setChangeModal('alreadyOnTeam')
    } else {
      const result = await joinUser({ user_id: userId, teamid: selectedTeam._id })

      if (result) {
        handleClose()
        navigate(`/team/${selectedTeam._id}`)
      } else {
        console.log('here')
      }
    }
  }

  const handleLeaveAndJoin = () => {
    leaveAndJoin({ user_id: user?._id, teamid: user?.team._id })
  }

  if (isUserTeamLoading || isLoadingTeams || isLeaving) {
    return <Loader />
  }

  const getModalState = () => {
    if (changeModal === 'alreadyOnTeam') {
      if (user.team.leader === user._id) {
        const isOnlyMember =
          user.team.members.length === 1 ? 'You must delete team' : 'You must transfer leadership'

        return (
          <Box sx={style}>
            <TeamActionModal
              firstText="You cannot join team."
              secondText={`${isOnlyMember} to join new team.`}
              firstButton="Okay"
              firstButtonHandler={handleClose}
            />
          </Box>
        )
      }

      return (
        <Box sx={style}>
          <TeamActionModal
            firstText="You're already on a team."
            secondText="Do you want to leave current team and join new?"
            firstButton="Leave & Join"
            firstButtonHandler={handleLeave}
            secondButton="Cancel"
            secondButtonHandler={handleClose}
          />
        </Box>
      )
    } else if (changeModal === 'joinTeam') {
      return (
        <TeamCard
          user={user}
          handleJoin={handleJoin}
          team={selectedTeam}
          handleClose={handleClose}
        />
      )
    } else {
      return <></>
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
          {getModalState()}
        </Modal>
        <CardContainer>
          <Card>
            <ColumnNames>
              <Text fontSize={B3fs} fontWeight={B3fw} lineHeight={B3lh} color="#86878B">
                Photo
              </Text>
              <Text fontSize={B3fs} fontWeight={B3fw} lineHeight={B3lh} color="#86878B">
                Name
              </Text>
              <Text fontSize={B3fs} fontWeight={B3fw} lineHeight={B3lh} color="#86878B">
                People
              </Text>
            </ColumnNames>
            {teams?.map((team, i) => (
              <TeamData margin="60px" key={i}>
                <TeamImage
                  src={
                    team?.image
                      ? LOCAL_PATH + '/' + team?.image
                      : 'https://pbs.twimg.com/profile_images/1406293979323371528/TJ7BseVI_400x400.jpg'
                  }
                />
                <Text fontSize={B2fs} fontWeight={B2fw} lineHeight={B2lh} color="white">
                  {team.name}
                </Text>
                <Text fontSize={B2fs} fontWeight={B2fw} lineHeight={B2lh} color="white">
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
