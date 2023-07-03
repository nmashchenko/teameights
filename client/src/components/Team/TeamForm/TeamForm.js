// * Modules
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik } from 'formik'

// * API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../../api/hooks/shared/useUpdateAvatar'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useInviteUser } from '../../../api/hooks/team/useInviteUser'
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
import { useLeave } from '../../../api/hooks/team/useLeaveTeam'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import { useTransferLeader } from '../../../api/hooks/team/useTransferLeader'
import { useUpdateTeam } from '../../../api/hooks/team/useUpdateTeam'
import ROUTES from '../../../constants/routes'
import { editTeamValidation } from '../../../schemas'
import Loader from '../../../shared/components/Loader/Loader'
import Modal from '../../../shared/components/Modal/Modal'
import { determineUserRoleInTeam } from '../../../utils/determineUserRoleInTeam'
import Page404Form from '../../Forms/Page404Form/Page404Form'
import { TeamProfileLargeCard } from '../TeamProfileLargeCard/TeamProfileLargeCard'
import TeamProfileMiniCard from '../TeamProfileMiniCard/TeamProfileMiniCard'
import TeamTypeSwitch from '../TeamTypeSwitch/TeamTypeSwitch'

import ActionButtonsType from './ActionButtonsType'
import { Card, CardContainer, Container } from './TeamForm.styles'

function TeamForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  let role = null

  const [removeMemberActive, setRemoveMemberActive] = useState('')
  const [modalActive, setModalActive] = useState('')

  const [chosenLeader, changeChosenLeader] = useState({ username: '', id: '' })
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editImage, setEditImage] = useState(false)
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()

  const teamId = id
  const { data: team, isLoading: isUserTeamLoading, error } = useGetTeamData(teamId)

  if (team && user) {
    role = determineUserRoleInTeam(team, user)
  }

  const [isMembers, switchIsMembers] = useState(true)

  const { mutate: deleteTeam, isLoading: isDeleting } = useDelete()
  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()
  const { mutate: removeFromTeam, isLoading: isRemoving } = useRemoveMember()
  const { mutate: updateTeamsAvatar, isLoading: isUpdatingTeamsAvatar } = useUpdateAvatar('teams')
  const { mutate: transferLeader, isLoading: isTransferring } = useTransferLeader()
  const { mutate: inviteUser, isLoading: isInviting } = useInviteUser()
  const { mutate: joinUser, isLoading: isJoining } = useJoinTeam()
  const { mutate: updateTeam, isLoading: isUpdatingTeam } = useUpdateTeam()

  useEffect(() => {
    // maybe we need to turn off edits if we switch tabs
    if (!isEditing) {
      setEditImage(false)
    }
  }, [isEditing])

  // handleClose() function
  const handleClose = () => {
    setOpen(false)
    setRemoveMemberActive('')
    changeChosenLeader({ username: '', id: '' })
    setModalActive('')
  }

  // handleInvite() function
  const handleInvite = () => {
    const details = { email: email, teamid: teamId, from_user_id: user?._id }

    inviteUser(details)
    setEmail('')
  }

  // handleJoin() function
  const handleJoin = () => {
    if (!user?.isRegistered) {
      navigate(ROUTES.login)
    } else {
      joinUser({ user_id: user?._id, teamid: team?._id })
    }
  }

  // handleOpenInvite() function
  const handleOpenInvite = () => {
    setOpen(true)
    setModalActive('Invite')
  }

  const handleOpenTransferLeader = () => {
    setOpen(true)
    setModalActive('SetNewLeader')
  }

  // handleOpenDelete() function
  const handleOpenDelete = () => {
    setOpen(true)
    setModalActive('Delete')
  }

  // handleOpenLeave() function
  const handleOpenLeave = () => {
    setOpen(true)
    setModalActive('Leave')
  }

  // handleRemoveMembers() function
  const handleRemoveMembers = (member) => {
    setOpen(true)
    setRemoveMemberActive(member)
    setModalActive('RemoveMember')
  }

  // if (
  //   isUserTeamLoading ||
  //   isDeleting ||
  //   isLeaving ||
  //   isRemoving ||
  //   isTransferring ||
  //   isUpdatingTeamsAvatar ||
  //   isUpdatingTeam ||
  //   isUserDataLoading ||
  //   isInviting ||
  //   isJoining
  // ) {
  //   return <Loader />
  // }

  if ((!isUserTeamLoading && !team) || error) {
    return <Page404Form findText="Couldn't find the requested team." paddingLeft="88px" />
  }

  const actionType = (
    <ActionButtonsType
      team={team}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      isMembers={isMembers}
      editImage={editImage}
      handleOpenDelete={handleOpenDelete}
      handleOpenLeave={handleOpenLeave}
      updateTeamsAvatar={updateTeamsAvatar}
      role={role}
      handleJoin={handleJoin}
      updateTeam={updateTeam}
    />
  )

  return (
    <Formik
      initialValues={{
        name: team?.name,
        tag: team?.tag,
        country: team?.country,
        type: [team?.type?.slice(0, 1)?.toUpperCase(), team?.type.slice(1, team?.type.length)].join(
          '',
        ),
        description: team?.description,
        file: null,
      }}
      enableReinitialize={true}
      validationSchema={editTeamValidation}
    >
      {() => {
        return (
          <>
            <TeamTypeSwitch myTeam={role === 'leader' || role === 'member' ? 'team' : ''} />
            <Container>
              <Modal
                modalActive={modalActive}
                chosenLeader={chosenLeader}
                handleClose={handleClose}
                setEmail={setEmail}
                email={email}
                team={team}
                open={open}
                leaveTeam={leaveTeam}
                user={user}
                transferLeader={transferLeader}
                setIsEditing={setIsEditing}
                removeFromTeam={removeFromTeam}
                removeMemberActive={removeMemberActive}
                handleInvite={handleInvite}
                deleteTeam={deleteTeam}
                setModalActive={setModalActive}
                changeChosenLeader={changeChosenLeader}
              />
              <CardContainer>
                <Card>
                  <TeamProfileLargeCard
                    isMembers={isMembers}
                    editImage={editImage}
                    chosenLeader={chosenLeader}
                    changeChosenLeader={changeChosenLeader}
                    handleRemoveMembers={handleRemoveMembers}
                    isEditing={isEditing}
                    team={team}
                    setIsEditing={setIsEditing}
                    handleOpenDelete={handleOpenDelete}
                    switchIsMembers={switchIsMembers}
                    handleOpenInvite={handleOpenInvite}
                    role={role}
                    handleOpenTransferLeader={handleOpenTransferLeader}
                  />
                </Card>
                <TeamProfileMiniCard
                  team={team}
                  isEditing={isEditing}
                  setEditImage={setEditImage}
                  actionType={actionType}
                  editImage={editImage}
                />
              </CardContainer>
            </Container>
          </>
        )
      }}
    </Formik>
  )
}

export default TeamForm
