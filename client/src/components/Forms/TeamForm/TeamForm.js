// * Modules
import { useEffect, useState } from 'react'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../../api/hooks/auth/useUpdateAvatar'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useLeave } from '../../../api/hooks/team/useLeaveTeam'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import { useTransferLeader } from '../../../api/hooks/team/useTransferLeader'
import Loader from '../../../shared/components/Loader/Loader'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'

import About from './About/About'
import EditImage from './EditImage/EditImage'
import Members from './Members/Members'
import TeamModal from './Modal/TeamModal'
import NoTeam from './NoTeam/NoTeam'
import TopContainerComponent from './TopContainer/TopContainer'
import {
  Card,
  CardContainer,
  Container,
  EditTeam,
  LeaderActionsBox,
  LeaveTeam,
} from './TeamForm.styles'
import TeamProfileMiniCard from './TeamProfileMiniCard'

function TeamForm() {
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
  // When we press the cancel button, we need to turn Off

  // START IMAGES
  const [selectedImage, changeSelectedImage] = useState('')
  const defaultTeamImages = [
    'default-green',
    'default-pink',
    'default-blue',
    'default-orange',
    'default-pink',
    'default-purple',
    'default-yellow',
  ]
  const [picture, setPicture] = useState(null)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    setPicture(null)
    setImgData(null)
    changeSelectedImage('')
  }, [isEditing])

  const getServedProfilePic = () => {
    // if we have a default, choose default
    if (selectedImage !== '') {
      return require(`../../../assets/Images/team/${defaultTeamImages[selectedImage]}.png`)
    }

    if (picture !== null) {
      return imgData
    }
  }

  const servedProfilePic = getServedProfilePic()

  // END IMAGES
  const handleClose = () => {
    setOpen(false)
    setRemoveMemberActive('')
    changeChosenLeader({ username: '', id: '' })
    setModalActive('')
  }

  const handleInvite = async () => {
    const result = await teamsAPI.inviteUserByEmail(email, team)

    if (result.data.error) {
      errorToaster(result.data.error)
    } else {
      handleClose()
    }
  }

  const handleOpenInvite = () => {
    setOpen(true)
    setModalActive('Invite')
  }

  const handleOpenDelete = () => {
    setOpen(true)
    setModalActive('Delete')
  }

  const handleOpenLeave = () => {
    setOpen(true)
    setModalActive('Leave')
  }

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
    isUserDataLoading
  ) {
    return <Loader />
  }

  const membersVar = (
    <Members
      chosenLeader={chosenLeader}
      changeChosenLeader={changeChosenLeader}
      handleRemoveMembers={handleRemoveMembers}
      isEditing={isEditing}
      team={team}
      selectLeader={selectLeader}
      openSelectLeader={openSelectLeader}
    />
  )
  const about = (
    <About
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      handleOpenDelete={handleOpenDelete}
      team={team}
    />
  )

  const leaderOrMemberAction = (
    <>
      {team?.leader._id === user?._id ? (
        <LeaderActionsBox opacity={!isEditing || isMembers || editImage}>
          <EditTeam
            onClick={() => {
              // the only time we trigger an update is for the teams avatar
              if (editImage && (picture || selectedImage !== '')) {
                updateTeamsAvatar({ teamID: team._id, image: servedProfilePic.split(',')[1] })
              }

              setIsEditing((prevState) => {
                return !prevState
              })
            }}
          >
            {isEditing ? 'Save' : 'Edit'}
          </EditTeam>
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

  const updateImageContainer = (
    <EditImage
      selectedImage={selectedImage}
      setImgData={setImgData}
      setPicture={setPicture}
      changeSelectedImage={changeSelectedImage}
      defaultTeamImages={defaultTeamImages}
      imgData={imgData}
      picture={picture}
    />
  )

  const input = isMembers ? membersVar : about

  const topContainer = (
    <TopContainerComponent
      isMembers={isMembers}
      about={about}
      switchIsMembers={switchIsMembers}
      handleOpenInvite={handleOpenInvite}
    />
  )

  const insideCard = (
    <>
      {editImage ? <></> : topContainer}
      <>{editImage ? updateImageContainer : input}</>
    </>
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
        <Card>{insideCard}</Card>
        <TeamProfileMiniCard
          team={team}
          picture={picture}
          selectedImage={selectedImage}
          isEditing={isEditing}
          setEditImage={setEditImage}
          leaderOrMemberAction={leaderOrMemberAction}
          editImage={editImage}
          servedProfilePic={servedProfilePic}
        />
      </CardContainer>
    </Container>
  )
}

export default TeamForm
