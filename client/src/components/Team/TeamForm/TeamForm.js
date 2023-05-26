// * Modules
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// * API
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../../api/hooks/auth/useUpdateAvatar'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useInviteUser } from '../../../api/hooks/team/useInviteUser'
import { useLeave } from '../../../api/hooks/team/useLeaveTeam'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import { useTransferLeader } from '../../../api/hooks/team/useTransferLeader'
import Loader from '../../../shared/components/Loader/Loader'
import { getServedProfilePic } from '../../../utils/getServedProfilepic'
import { InsideCard } from '../InsideCard/InsideCard'
import TeamModal from '../Modal/TeamModal'
import TeamProfileMiniCard from '../TeamProfileMiniCard/TeamProfileMiniCard'

import { getLeaderOrMemberAction } from './getLeaderOrMemberAction'
import { Card, CardContainer, Container } from './TeamForm.styles'

function TeamForm() {
  const { id } = useParams()

  const [removeMemberActive, setRemoveMemberActive] = useState('')
  const [modalActive, setModalActive] = useState('')

  const [chosenLeader, changeChosenLeader] = useState({ username: '', id: '' })
  const [selectLeader, openSelectLeader] = useState(false)
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editImage, setEditImage] = useState(false)
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()
  const teamId = user?.team?._id
  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData(teamId)

  const [isMembers, switchIsMembers] = useState(true)

  const { mutate: deleteTeam, isLoading: isDeleting } = useDelete()
  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()
  const { mutate: removeFromTeam, isLoading: isRemoving } = useRemoveMember()
  const { mutate: updateTeamsAvatar, isLoading: isUpdatingTeamsAvatar } = useUpdateAvatar('teams')
  const { mutate: transferLeader, isLoading: isTransferring } = useTransferLeader()
  const { mutate: inviteUser, isLoading: isInviting } = useInviteUser()

  // We need: Leave team

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
    isInviting
  ) {
    return <Loader />
  }

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
          />
        </Card>
        <TeamProfileMiniCard
          team={team}
          picture={picture}
          selectedImage={selectedImage}
          isEditing={isEditing}
          setEditImage={setEditImage}
          leaderOrMemberAction={getLeaderOrMemberAction(
            team,
            user,
            isEditing,
            setIsEditing,
            isMembers,
            editImage,
            handleOpenDelete,
            handleOpenLeave,
            updateTeamsAvatar,
            servedProfilePic,
            picture,
            selectedImage,
          )}
          editImage={editImage}
          servedProfilePic={servedProfilePic}
        />
      </CardContainer>
    </Container>
  )
}

export default TeamForm
