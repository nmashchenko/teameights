// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { Link, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useFormikContext } from 'formik'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useLeave } from '../../../api/hooks/team/useLeave'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import Cake from '../../../assets/Cake'
import Close from '../../../assets/Close'
import Crown from '../../../assets/Crown'
import SearchIcon from '../../../assets/SearchIcon'
import Add from '../../../assets/TeamPage/Add'
import Delete from '../../../assets/TeamPage/Delete'
import UserPlus from '../../../assets/UserPlus'
import Users from '../../../assets/Users'
import { LOCAL_PATH } from '../../../http'
import Loader from '../../../shared/components/Loader/Loader'

import About from './About/About'
import Members from './Members/Members'
import TeamActionModal from './TeamActionModal'
import {
  ActionButton,
  ButtonCardContent,
  CakeBox,
  CancelButton,
  Card,
  CardContainer,
  Center,
  CircleContainer,
  CloseContainer,
  Container,
  CreateButton,
  CreateTeam,
  CrownContainer,
  CrownContainer2,
  EditTeam,
  Input,
  InputBox,
  InviteButton,
  LeaderActionsBox,
  LeaveTeam,
  LeftContainer,
  MainCardContent,
  RightContainer,
  SearchIconContainer,
  Statistic,
  StatisticsFlex,
  style,
  SVGAndText,
  Tab,
  TabContainer,
  TeamButton,
  TeamCardBody,
  TeamCardBodyPoint,
  TeamCardDesc,
  TeamCardFigure,
  TeamCardMembers,
  TeamCardPerson,
  TeamCardPicture,
  TeamCardTop,
  TeamCardTopIcon,
  TeamCardTopInfo,
  TeamImgBorder,
  Text,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
  UserPlusContainer,
} from './TeamForm.styles'
import tempImg from './zxc1.jpg'

function TeamForm({ switchPage }) {
  const navigate = useNavigate()
  const [inviteActive, setInviteActive] = useState(false)
  const [deleteActive, setDeleteActive] = useState(false)
  const [leaveActive, setLeaveActive] = useState(false)
  const [removeMemberActive, setRemoveMemberActive] = useState('')
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [hasUpdate, update] = useState(false)
  const [loading, setLoading] = useState(false)

  // const [members, setMembers] = useState([])
  const [isMembers, switchIsMembers] = useState(true)

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()
  const { mutate: deleteTeam, isLoading: isDeleting } = useDelete()
  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()
  const { mutate: removeFromTeam, isLoading: isRemoving } = useRemoveMember()

  const createDate = new Date(team?.createdAt)
    .toLocaleDateString({}, { timeZone: 'UTC', month: 'long', day: '2-digit', year: 'numeric' })
    .replace(',', '')

  const { data: user } = useCheckAuth()
  // We need: Leave team

  // useEffect(() => {  // maybe we need to turn off edits if we switch tabs
  //   setIsEditing(false)

  // }, [isMembers])

  useEffect(() => {
    const saveUpdates = async () => {
      setLoading(true)

      setTimeout(function () {
        // update(false)
        // setIsEditing(false)
      }, 2000)

      setLoading(false)
    }

    if (hasUpdate) {
      saveUpdates()
    }
  }, [hasUpdate])

  const handleClose = () => {
    setOpen(false)
    setInviteActive(false)
    setDeleteActive(false)
    setLeaveActive(false)
    setRemoveMemberActive('')
  }

  const { enqueueSnackbar } = useSnackbar()
  const handleDelete = () => deleteTeam(team?._id)

  const handleLeave = () => {
    leaveTeam({
      user_id: user?._id,
      teamid: team?._id,
    })
    handleClose()
  }

  const removeMember = () => {
    removeFromTeam({
      user_id: removeMemberActive,
      teamid: team?._id,
    })
    handleClose()
  }

  const handleOpenInvite = () => {
    setOpen(true)
    setInviteActive(true)
  }

  const handleOpenDelete = () => {
    setOpen(true)
    setDeleteActive(true)
  }

  const handleOpenLeave = () => {
    setOpen(true)
    setLeaveActive(true)
  }

  const handleRemoveMembers = (member) => {
    setOpen(true)
    setRemoveMemberActive(member)
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

  if (isUserTeamLoading || isDeleting || isLeaving || isRemoving) {
    return <Loader />
  }

  const noTeam = (
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
  )

  if (team === undefined) {
    return <Container>{noTeam}</Container>
  }

  const membersVar = (
    <Members handleRemoveMembers={handleRemoveMembers} isEditing={isEditing} team={team} />
  )
  const about = (
    <About
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      handleOpenDelete={handleOpenDelete}
      team={team}
    />
  )

  const removeMemberModal = (
    <TeamActionModal
      firstText="Remove Member"
      secondText="Are you sure you want to remove member from team?"
      firstButton="Remove"
      firstButtonHandler={removeMember}
      secondButton="Cancel"
      secondButtonHandler={handleClose}
    />
  )

  const leaderOrMemberAction = (
    <>
      {team.leader._id === user._id ? (
        <LeaderActionsBox opacity={!isEditing ? '1' : '0'}>
          {/* // <LeaderActionsBox> */}
          <EditTeam
            onClick={() => {
              if (!isEditing) {
                // only update state if you are not editing
                setIsEditing((prevState) => {
                  return !prevState
                })
              }
            }}
          >
            {isEditing ? 'Save' : 'Edit'}
          </EditTeam>
          {loading ? Loader : <></>}
          <LeaveTeam
            height="40px"
            onClick={() => {
              if (isEditing) {
                setIsEditing((prevState) => !prevState)
              } else {
                handleOpenDelete()
              }
            }}
            marginTop="0"
          >
            {isEditing ? 'Cancel' : 'Delete'}
          </LeaveTeam>
        </LeaderActionsBox>
      ) : (
        <LeaveTeam onClick={handleOpenLeave}>Leave Team</LeaveTeam>
      )}
    </>
  )

  const canDelete =
    team.members.length > 1 ? (
      <TeamActionModal
        firstText="You can't delete team"
        secondText="Before deleting team, you must delete all members"
        firstButton="Okay"
        firstButtonHandler={handleClose}
      />
    ) : (
      <TeamActionModal
        firstText="Delete Team"
        secondText="Are you sure you want to delete?"
        firstButton="Delete"
        firstButtonHandler={handleDelete}
        secondButton="Cancel"
        secondButtonHandler={handleClose}
      />
    )
  // by the modal logic, the default is the
  const aTeam = (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseContainer onClick={handleClose}>
            <Close />
          </CloseContainer>
          {inviteActive ? (
            <>
              <Text fontSize="24px" margin="0">
                Send invite
              </Text>

              <InputBox>
                <SearchIconContainer>
                  <SearchIcon />
                </SearchIconContainer>
                <Input
                  placeholder="Search username or email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></Input>
              </InputBox>
              <CreateButton onClick={handleInvite}>
                <UserPlusContainer>
                  <UserPlus />
                </UserPlusContainer>
                Invite
              </CreateButton>
            </>
          ) : (
            <></>
          )}
          {deleteActive ? canDelete : <></>}
          {leaveActive ? (
            <TeamActionModal
              firstText="Leave Team"
              secondText="Are you sure you want to leave?"
              firstButton="Leave"
              firstButtonHandler={handleLeave}
              secondButton="Cancel"
              secondButtonHandler={handleClose}
            />
          ) : (
            <></>
          )}
          {removeMemberActive ? removeMemberModal : <></>}
        </Box>
      </Modal>
      <CardContainer>
        <Card>
          <MainCardContent>
            <TabContainer about={about}>
              <Tab
                onClick={() => {
                  switchIsMembers(true)
                }}
                isMembers={isMembers}
              >
                Members
                <span></span>
              </Tab>
              <Tab
                onClick={() => {
                  switchIsMembers(false)
                }}
                isMembers={!isMembers}
              >
                About
                <span></span>
              </Tab>
              <InviteButton onClick={handleOpenInvite}>
                <UserPlusContainer>
                  <UserPlus />
                </UserPlusContainer>
                invite
              </InviteButton>
            </TabContainer>
            {!isMembers ? about : <></>}
            {isMembers ? membersVar : <></>}
            <LeftContainer>{/* TODO: find team members in useEffect. */}</LeftContainer>
          </MainCardContent>
        </Card>
        <RightContainer>
          <TeamImgBorder src={tempImg} />
          <CrownContainer2>
            <Crown />
          </CrownContainer2>
          <Text margin="16px 0 12px 0">{team.name}</Text>
          <SVGAndText>
            <CakeBox>
              <Cake />
            </CakeBox>
            <Text fontSize="16px" fontWeight="400">
              {team.createdAt.split('T')[0]}
            </Text>
          </SVGAndText>
          <SVGAndText>
            <CakeBox>
              <Users />
            </CakeBox>
            <Text fontSize="16px" fontWeight="400">
              {team.members.length}/8
            </Text>
          </SVGAndText>
          {leaderOrMemberAction}
        </RightContainer>
      </CardContainer>
    </>
  )

  return <Container>{aTeam}</Container>
}

export default TeamForm
