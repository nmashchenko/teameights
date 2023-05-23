import React, { useState } from 'react'
import { Box, Modal } from '@mui/material'

import Close from '../../../../assets/Shared/Close'
import SearchIcon from '../../../../assets/Shared/SearchIcon'
import UserPlus from '../../../../assets/UserPlus'
import TeamActionModal from '../TeamActionModal'
import {
  CloseContainerModal,
  CreateButton,
  Input,
  InputBox,
  SearchIconContainer,
  SpaceBetweenColumn,
  Text,
  UserPlusContainer,
} from '../TeamForm.styles'

const TeamModal = ({
  modalActive,
  chosenLeader,
  handleClose,
  handleInvite,
  setEmail,
  email,
  team,
  open,
  leaveTeam,
  user,
  transferLeader,
  setIsEditing,
  removeFromTeam,
  removeMemberActive,
  deleteTeam,
  setModalActive,
}) => {
  const [style, setStyle] = useState({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    height: 350,
    bgcolor: '#1A1C22',
    borderRadius: '15px',
    boxShadow: 14,
    p: 4,
    padding: '72.5px 32px',
  })

  const handleActions = () => {
    if (modalActive === 'Leave') {
      leaveTeam({
        user_id: user?._id,
        teamid: team?._id,
      })
    } else if (modalActive === 'TransferLeader') {
      transferLeader({
        leader_id: team.leader._id,
        new_leader_id: chosenLeader.id,
        teamid: team._id,
      })

      setIsEditing(false)
    } else if (modalActive === 'RemoveMember') {
      removeFromTeam({
        user_id: removeMemberActive,
        teamid: team?._id,
      })
    } else if (modalActive === 'Invite') {
      handleInvite()
    } else if (modalActive === 'Delete') {
      deleteTeam(team?._id)
    }
    handleClose()
    setModalActive('')
  }

  const handleModal = () => {
    if (
      modalActive === 'Leave' ||
      modalActive === 'TransferLeader' ||
      modalActive === 'RemoveMember' ||
      modalActive === 'Delete'
    ) {
      style.padding = '72.5px 32px'
    } else {
      style.padding = '32px 32px'
    }

    if (modalActive === 'Leave') {
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
      return (
        <SpaceBetweenColumn>
          <div>
            <Text fontSize="24px" margin="0">
              Send invite
            </Text>

            <InputBox>
              <SearchIconContainer color={email !== '' ? '#5BD424' : '#86878b'}>
                <SearchIcon />
              </SearchIconContainer>
              <Input
                placeholder="Search username or email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              ></Input>
            </InputBox>
          </div>
          <CreateButton color={email !== '' ? '1' : '.4'} onClick={handleActions}>
            <UserPlusContainer>
              <UserPlus />
            </UserPlusContainer>
            Invite
          </CreateButton>
        </SpaceBetweenColumn>
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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CloseContainerModal color={'#FFF'} onClick={handleClose}>
          <Close />
        </CloseContainerModal>
        {handleModal()}
      </Box>
    </Modal>
  )
}

export default TeamModal
