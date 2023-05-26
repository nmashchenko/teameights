// * Modules
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// * API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../../api/hooks/auth/useUpdateAvatar'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useInviteUser } from '../../../api/hooks/team/useInviteUser'
import { useJoinTeam } from '../../../api/hooks/team/useJoinTeam'
import { useLeave } from '../../../api/hooks/team/useLeaveTeam'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import { useTransferLeader } from '../../../api/hooks/team/useTransferLeader'
import ROUTES from '../../../constants/routes'
import Screen404 from '../../../screens/404Screen/404Screen'
import Loader from '../../../shared/components/Loader/Loader'
import { determineUserRoleInTeam } from '../../../utils/determineUserRoleInTeam'
import { getServedProfilePic } from '../../../utils/getServedProfilepic'
import Page404Form from '../../Forms/Page404Form/Page404Form'
import { InsideCard } from '../InsideCard/InsideCard'
import TeamModal from '../Modal/TeamModal'
import TeamProfileMiniCard from '../TeamProfileMiniCard/TeamProfileMiniCard'

import ActionType from './ActionType'
import { Card, CardContainer, Container } from './TeamForm.styles'

function TeamForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  let role = null

  const [removeMemberActive, setRemoveMemberActive] = useState('')
  const [modalActive, setModalActive] = useState('')

  const [chosenLeader, changeChosenLeader] = useState({ username: '', id: '' })
  const [selectLeader, openSelectLeader] = useState(false)
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

  useEffect(() => {
    // maybe we need to turn off edits if we switch tabs
    if (!isEditing) {
      setEditImage(false)
    }
  }, [isEditing])

  useEffect(() => {
    if (chosenLeader.username !== '') {
      // new leader chosen

      setOpen((prevState) => !prevState)
      setModalActive('TransferLeader')
    }
  }, [chosenLeader])

  const [selectedImage, changeSelectedImage] = useState('')
  const [picture, setPicture] = useState(null)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    setPicture(null)
    setImgData(null)
    changeSelectedImage('')
  }, [isEditing])

  const servedProfilePic = getServedProfilePic(selectedImage, picture, imgData)

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

  if (
    isUserTeamLoading ||
    isDeleting ||
    isLeaving ||
    isRemoving ||
    isTransferring ||
    isUpdatingTeamsAvatar ||
    isUserDataLoading ||
    isInviting ||
    isJoining
  ) {
    return <Loader />
  }

  if ((!isUserTeamLoading && !team) || error) {
    return <Page404Form findText="Couldn't find the requested team." paddingLeft="88px" />
  }

  const actionType = (
    <ActionType
      team={team}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      isMembers={isMembers}
      editImage={editImage}
      handleOpenDelete={handleOpenDelete}
      handleOpenLeave={handleOpenLeave}
      updateTeamsAvatar={updateTeamsAvatar}
      servedProfilePic={servedProfilePic}
      picture={picture}
      selectedImage={selectedImage}
      role={role}
      handleJoin={handleJoin}
    />
  )

  return (
    <Container>
      <TeamModal
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
      />
      <CardContainer>
        <Card>
          <InsideCard
            isMembers={isMembers}
            editImage={editImage}
            chosenLeader={chosenLeader}
            changeChosenLeader={changeChosenLeader}
            handleRemoveMembers={handleRemoveMembers}
            isEditing={isEditing}
            team={team}
            selectLeader={selectLeader}
            openSelectLeader={openSelectLeader}
            setIsEditing={setIsEditing}
            handleOpenDelete={handleOpenDelete}
            switchIsMembers={switchIsMembers}
            handleOpenInvite={handleOpenInvite}
            selectedImage={selectedImage}
            setImgData={setImgData}
            setPicture={setPicture}
            changeSelectedImage={changeSelectedImage}
            imgData={imgData}
            picture={picture}
            role={role}
          />
        </Card>
        <TeamProfileMiniCard
          team={team}
          picture={picture}
          selectedImage={selectedImage}
          isEditing={isEditing}
          setEditImage={setEditImage}
          actionType={actionType}
          editImage={editImage}
          servedProfilePic={servedProfilePic}
        />
      </CardContainer>
    </Container>
  )
}

export default TeamForm
