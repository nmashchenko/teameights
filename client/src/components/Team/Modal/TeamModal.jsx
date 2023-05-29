import React, { useState } from 'react'
import { Box, Modal } from '@mui/material'

import Close from '../../../assets/Shared/Close'
import { SelectedIcon } from '../../../assets/Team/SelectedIcon'
import UserPlus from '../../../assets/Team/UserPlus'
import { LOCAL_PATH } from '../../../http'
import AutocompleteInput from '../../../shared/components/AutocompleteInput/AutocompleteInput'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import {
  CloseContainerModal,
  CreateButton,
  style,
  UserAccordionCard,
  UserAccordionImg,
  UserAccordionUsername,
  UserPlusContainer,
} from '../TeamForm/TeamForm.styles'

import ActionModal from './ModalTypes/ActionModal'
import InfoModal from './ModalTypes/InfoModal'
import InteractiveModal from './ModalTypes/InteractiveModal'
import { Button, ListBackdrop, UsernameIconContainer } from './TeamModal.styles'

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
  changeChosenLeader,
}) => {
  const [value, setValue] = useState(null)

  const handleSetValue = (value) => {
    if (value) {
      setValue(value)
      setEmail(value.email)
    }
  }

  const handleActions = () => {
    if (modalActive === 'Leave') {
      leaveTeam({
        user_id: user?._id,
        teamid: team?._id,
      })
    } else if (modalActive === 'RemoveMember') {
      removeFromTeam({
        user_id: removeMemberActive,
        teamid: team?._id,
      })
    } else if (modalActive === 'Invite') {
      handleInvite()
    } else if (modalActive === 'Delete') {
      deleteTeam(team?._id)
    } else if (modalActive === 'TransferLeader') {
      transferLeader({
        leader_id: team.leader._id,
        new_leader_id: chosenLeader.id,
        teamid: team._id,
      })

      setIsEditing(false)
    } else if (modalActive === 'SetNewLeader') {
      if (chosenLeader.id) {
        setModalActive('TransferLeader')

        return
      } else {
        errorToaster('Select leader first!')

        return
      }
    }
    handleClose()
    setModalActive('')
  }

  const handleModal = () => {
    if (modalActive === 'Leave') {
      return (
        <ActionModal
          firstText="Leave Team"
          secondText="Are you sure you want to leave?"
          firstButton="Leave"
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'RemoveMember') {
      return (
        <ActionModal
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
        <InteractiveModal
          interactiveText={'Send invite'}
          interactiveComponent={
            <AutocompleteInput value={value} setValue={handleSetValue} width={'306px'} />
          }
          interactiveButtons={
            <CreateButton color={email !== '' ? '1' : '.4'} onClick={handleActions}>
              <UserPlusContainer>
                <UserPlus />
              </UserPlusContainer>
              Invite
            </CreateButton>
          }
        />
      )
    } else if (modalActive === 'Delete') {
      return team.members.length > 1 ? (
        <InfoModal
          firstText="You can't delete team"
          secondText="Before deleting team, you must delete all members"
          firstButton="Okay"
          firstButtonHandler={handleClose}
        />
      ) : (
        <ActionModal
          firstText="Delete Team"
          secondText="Are you sure you want to delete?"
          firstButton="Delete"
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'TransferLeader') {
      return (
        <ActionModal
          firstText="Transfer leadership"
          secondText={`Are you sure you want to transfer leadership to ${chosenLeader.username}? You will lose management rights.`}
          firstButton="Confirm"
          firstButtonHandler={handleActions}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'SetNewLeader') {
      return (
        <InteractiveModal
          interactiveText={'Select new leader'}
          interactiveComponent={
            <ListBackdrop>
              {team?.members.length > 1 ? (
                team?.members
                  .filter((member) => team.leader._id !== member._id)
                  .map((member, key) => {
                    return (
                      <UserAccordionCard
                        key={member._id}
                        id={member._id}
                        onClick={() => {
                          changeChosenLeader({ username: member.username, id: member._id })
                        }}
                      >
                        <UserAccordionImg
                          alt={member.username}
                          src={LOCAL_PATH + '/' + member.image}
                        />
                        <UsernameIconContainer>
                          <UserAccordionUsername>{member.username}</UserAccordionUsername>
                          {chosenLeader.username === member.username ? <SelectedIcon /> : <></>}
                        </UsernameIconContainer>
                      </UserAccordionCard>
                    )
                  })
              ) : (
                <UserAccordionCard>
                  <UserAccordionUsername>Invite more to transfer leader!</UserAccordionUsername>
                </UserAccordionCard>
              )}
            </ListBackdrop>
          }
          interactiveButtons={
            <div>
              <Button onClick={handleActions} background="#46A11B">
                Save
              </Button>
              <Button onClick={handleClose} border="2px solid #A5211F" marginTop="8px">
                Cancel
              </Button>
            </div>
          }
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
