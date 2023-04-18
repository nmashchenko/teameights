// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { CssBaseline } from '@mui/material'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useSnackbar } from 'notistack'

// * API
import teamsAPI from '../../../api/endpoints/team'
import { useCheckAuth } from '../../../api/hooks/auth/useCheckAuth'
import { useUpdateAvatar } from '../../../api/hooks/auth/useUpdateAvatar'
import { useDelete } from '../../../api/hooks/team/useDelete'
import { useGetTeamData } from '../../../api/hooks/team/useGetTeamData'
import { useLeave } from '../../../api/hooks/team/useLeave'
import { useRemoveMember } from '../../../api/hooks/team/useRemoveMember'
import { useTransferLeader } from '../../../api/hooks/team/useTransferLeader'
import Close from '../../../assets/Close'
import { B2fs, B2fw, B2lh, H4fs, H4fw, H4lh } from '../../../assets/fonts'
import SearchIcon from '../../../assets/SearchIcon'
import { UploadSymbol } from '../../../assets/UploadSymbol'
import UserPlus from '../../../assets/UserPlus'
import Loader from '../../../shared/components/Loader/Loader'

import About from './About/About'
import EditImage from './EditImage/EditImage'
import Members from './Members/Members'
import NoTeam from './NoTeam/NoTeam'
import TopContainerComponent from './TopContainer/TopContainer'
import RightMain from './RightMain'
import TeamActionModal from './TeamActionModal'
import {
  Card,
  CardContainer,
  CloseContainerModal,
  Container,
  CreateButton,
  EditTeam,
  Input,
  InputBox,
  LeaderActionsBox,
  LeaveTeam,
  SearchIconContainer,
  style,
  Text,
  UserPlusContainer,
} from './TeamForm.styles'
import tempImg from './zxc1.jpg'

function TeamForm() {
  const [removeMemberActive, setRemoveMemberActive] = useState('')
  const [modalActive, setModalActive] = useState('')

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editImage, setEditImage] = useState(false)
  const [chosenLeader, changeChosenLeader] = useState({ username: '', id: '' })
  const [selectLeader, openSelectLeader] = useState(false)

  const [isMembers, switchIsMembers] = useState(true)

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()
  const { mutate: deleteTeam, isLoading: isDeleting } = useDelete()
  const { mutate: leaveTeam, isLoading: isLeaving } = useLeave()
  const { mutate: removeFromTeam, isLoading: isRemoving } = useRemoveMember()
  const { mutate: updateTeamsAvatar, isLoading: isUpdatingTeamsAvatar } = useUpdateAvatar('teams')
  const { mutate: transferLeader, isLoading: isTransferring } = useTransferLeader()

  const { data: user } = useCheckAuth()
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
  const defaultTeamImages = ['defaultGreen', 'defaultPink', 'defaultOrange', 'defaultBlue']
  const [picture, setPicture] = useState(null)
  const [imgData, setImgData] = useState(null)

  useEffect(() => {
    setPicture(null)
    setImgData(null)
    changeSelectedImage('')
  }, [isEditing])

  const selectedImgJSX =
    imgData === null ? (
      <>
        <UploadSymbol />
        <p style={{ margin: '0', marginTop: '12px' }}>Drop here or click to upload</p>
      </>
    ) : (
      <div>{picture === null ? '' : picture.name}</div>
    )

  const getServedProfilePic = () => {
    // if we have no picture chosen, choose team image.
    // if we dont have image, choose temp
    if (picture === null && selectedImage === '') {
      return tempImg
    }

    // if we have a default, choose default
    if (selectedImage !== '') {
      return require(`../../../assets/defaults/${defaultTeamImages[selectedImage]}.png`)
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

  const { enqueueSnackbar } = useSnackbar()
  const handleDelete = () => deleteTeam(team?._id)

  const handleActions = () => {
    console.log('Actions')

    if (modalActive === 'Leave') {
      console.log('Leave')
      leaveTeam({
        user_id: user?._id,
        teamid: team?._id,
      })
    } else if (modalActive === 'TransferLeader') {
      console.log('Transfer')
      transferLeader({
        leader_id: team.leader._id,
        new_leader_id: chosenLeader.id,
        teamid: team._id,
      })

      setIsEditing(false)
    } else if (modalActive === 'RemoveMember') {
      console.log('Remove')
      removeFromTeam({
        user_id: removeMemberActive,
        teamid: team?._id,
      })
    } else if (modalActive === 'Invite') {
      console.log('Invite')
      handleInvite()
    } else if (modalActive === 'Delete') {
      console.log('Delete')
      deleteTeam(team?._id)
    }
    handleClose()
    setModalActive('')
  }
  const handleModal = () => {
    console.log('Open modal')
    if (modalActive === 'Leave') {
      console.log('Leave')

      return (
        <TeamActionModal
          firstText="Leave Team"
          secondText="Are you sure you want to leave?"
          firstButton="Leave"
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'TransferLeader') {
      console.log('TransferLeader')

      return (
        <TeamActionModal
          firstText="Transfer leadership"
          secondText={`Are you sure you want to transfer leadership to ${chosenLeader.username}? You will lose management rights.`}
          firstButton="Confirm"
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'RemoveMember') {
      console.log('RemoveMember')

      return (
        <TeamActionModal
          firstText="Remove Member"
          secondText="Are you sure you want to remove member from team?"
          firstButton="Remove"
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'Invite') {
      console.log('Invite')

      return (
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
          <CreateButton onClick={handleActions}>
            <UserPlusContainer>
              <UserPlus />
            </UserPlusContainer>
            Invite
          </CreateButton>
        </>
      )
    } else if (modalActive === 'Delete') {
      console.log('Delete')

      return team.members.length > 1 ? (
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
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    }

    return <></>
  }

  const handleLeave = () => {
    leaveTeam({
      user_id: user?._id,
      teamid: team?._id,
    })
    handleClose()
  }

  const handleTransfer = () => {
    transferLeader({
      leader_id: team.leader._id,
      new_leader_id: chosenLeader.id,
      teamid: team._id,
    })

    setIsEditing(false)
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

  if (
    isUserTeamLoading ||
    isDeleting ||
    isLeaving ||
    isRemoving ||
    isTransferring ||
    isUpdatingTeamsAvatar
  ) {
    return <Loader />
  }

  if (team === undefined) {
    return <NoTeam />
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
        <LeaderActionsBox opacity={!isEditing || isMembers || editImage}>
          <EditTeam
            onClick={() => {
              if (!isEditing) {
                // only update state if you are not editing
              } else {
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

  const updateImageContainer2 = (
    <EditImage
      selectedImage={selectedImage}
      setImgData={setImgData}
      setPicture={setPicture}
      changeSelectedImage={changeSelectedImage}
      defaultTeamImages={defaultTeamImages}
      selectedImgJSX={selectedImgJSX}
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
          <CloseContainerModal onClick={handleClose}>
            <Close />
          </CloseContainerModal>
          {handleModal()}
        </Box>
      </Modal>
      <CardContainer>
        <Card>
          {editImage ? <></> : topContainer}
          <>{editImage ? updateImageContainer2 : input}</>
        </Card>
        <RightMain
          team={team}
          picture={picture}
          selectedImage={selectedImage}
          isEditing={isEditing}
          setEditImage={setEditImage}
          leaderOrMemberAction={leaderOrMemberAction}
          editImage={editImage}
        />
      </CardContainer>
    </>
  )

  return (
    <Container>
      {aTeam}

      <CssBaseline />
    </Container>
  )
}

export default TeamForm
