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
import { useLeaveAndJoin } from '../../../api/hooks/team/useLeaveAndJoin'
import { useLeave } from '../../../api/hooks/team/useLeaveTeam'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../assets/fonts'
import { LOCAL_PATH } from '../../../http'
import TeamCard from '../../../screens/Forms/TeamsScreen/TeamCard/TeamCard'
import Loader from '../../../shared/components/Loader/Loader'
import { userAuth } from '../../../store/reducers/UserAuth'
import TopTemplate from '../../TopTemplate/TopTemplate'
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
  const dispatch = useDispatch()

  const { data: user } = useCheckAuth()
  const { enqueueSnackbar } = useSnackbar()

  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState({})
  const { mutateAsync: joinUser, isLoading: isUserTeamLoading } = useJoinTeam()
  const userId = user?._id

  const [open, setOpen] = useState(false)

  const [isTeamsLoading, setIsTeamsLoading] = useState(true)

  const [changeModal, setChangeModal] = useState('')

  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()

  const { mutate: leaveAndJoin, isLoading: isLeavingAndJoining } = useLeaveAndJoin()

  useEffect(() => {
    const makeRequest = async () => {
      const teams = await teamsAPI.getAllTeams()

      setTeams(teams.data.filter((team) => team.type === 'open'))
      setIsTeamsLoading(false)
    }

    makeRequest()
  }, [])

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
      await joinUser({ user_id: userId, teamid: selectedTeam._id })
      handleClose()
      navigate('/my-team')
    }

    // } else {
    //   enqueueSnackbar('You have joined the team already!', {
    //     preventDuplicate: true,
    //   })
    // }
  }

  const handleLeaveAndJoin = () => {
    leaveAndJoin({ user_id: user?._id, teamid: user?.team._id })
  }

  if (isUserTeamLoading || isTeamsLoading || isLeaving) {
    return <Loader />
  }

  console.log(user)
  // lol we could move entire teams list to display her implementation
  // of checking out a team

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
            {teams.map((team, i) => (
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
