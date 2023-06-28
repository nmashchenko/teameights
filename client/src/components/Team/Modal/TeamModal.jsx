import React, { useEffect, useMemo, useState } from 'react'
import { Box, Modal, Slide } from '@mui/material'

import Close from '../../../assets/Shared/Close'
import UserPlus from '../../../assets/Team/UserPlus'
import { useGetScreenWidth } from '../../../hooks/useGetScreenWidth'
import AutocompleteInput from '../../../shared/components/AutocompleteInput/AutocompleteInput'
import FlexWrapper from '../../../shared/components/FlexWrapper/FlexWrapper'
import { errorToaster } from '../../../shared/components/Toasters/Error.toaster'
import {
  CloseContainerModal,
  mobileFullScreenStyle,
  mobileSemiFullScreenStyle,
  style,
  teamPreviewStyle,
  Text,
  UserPlusContainer,
} from '../TeamForm/TeamForm.styles'

import LeaderOptions from './LeaderOptions/LeaderOptions'
import ActionModal from './ModalTypes/ActionModal'
import InfoModal from './ModalTypes/InfoModal'
import InteractiveModal from './ModalTypes/InteractiveModal'
import TeamPreviewModal from './TeamPreviewModal/TeamPreviewModal'
import TeamPreviewModalPhone from './TeamPreviewModalPhone/TeamPreviewModalPhone'
import { MobileProfile } from './TeamPreviewModalPhone/TeamPreviewModalPhone.styles'
import { Button, TeamDesktopModal } from './TeamModal.styles'

const TeamModal = ({
  modalActive,
  chosenLeader,
  handleClose,
  handleInvite,
  handleJoin,
  handleLeaveAndJoin,
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
  const width = useGetScreenWidth()
  const [boxStyle, setBoxStyle] = useState(style)
  const [mobileBoxStyle, setMobileBoxStyle] = useState(mobileSemiFullScreenStyle)

  useMemo(() => {
    if (modalActive === 'JoinTeam') {
      setBoxStyle(teamPreviewStyle)
      setMobileBoxStyle(mobileFullScreenStyle)
    } else {
      setBoxStyle(style)
      setMobileBoxStyle(mobileSemiFullScreenStyle)
    }
  }, [modalActive])

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
            <AutocompleteInput
              value={value}
              setValue={handleSetValue}
              width={width > 600 ? '306px' : '100%'}
            />
          }
          interactiveButtons={
            <Button color={email !== '' ? '1' : '.4'} onClick={handleActions} marginTop="0">
              <UserPlusContainer>
                <UserPlus />
              </UserPlusContainer>
              Invite
            </Button>
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
            <LeaderOptions
              team={team}
              chosenLeader={chosenLeader}
              changeChosenLeader={changeChosenLeader}
            />
          }
          interactiveButtons={
            <FlexWrapper width="100%" direction="column">
              {team?.members.length > 1 && (
                <Button onClick={handleActions} background="#46A11B" marginTop="0">
                  Save
                </Button>
              )}
              <Button onClick={handleClose} border="2px solid #A5211F" marginTop="8px">
                Cancel
              </Button>
            </FlexWrapper>
          }
        />
      )
    } else if (modalActive === 'AlreadyOnTeam') {
      if (user?.team.leader === user._id) {
        const isOnlyMember =
          user?.team.members.length === 1 ? 'You must delete team' : 'You must transfer leadership'

        return (
          <InfoModal
            firstText="You cannot join a team."
            secondText={`${isOnlyMember} to join a new team.`}
            firstButton="Okay"
            firstButtonHandler={handleClose}
          />
        )
      }

      return (
        <ActionModal
          firstText="You're already on a team."
          secondText="Do you want to leave the current team and join a new one?"
          firstButton="Leave & Join"
          firstButtonHandler={handleLeaveAndJoin}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      )
    } else if (modalActive === 'JoinTeam') {
      return (
        <>
          {width > 600 && (
            <>
              <CloseContainerModal color={'#FFF'} onClick={handleClose}>
                <Close />
              </CloseContainerModal>
              <TeamPreviewModal
                user={user}
                handleJoin={handleJoin}
                team={team}
                handleClose={handleClose}
              />
            </>
          )}

          {width <= 600 && (
            <>
              <TeamPreviewModalPhone
                user={user}
                handleClose={handleClose}
                handleJoin={handleJoin}
                team={team}
              />
            </>
          )}
        </>
      )
    }

    return <></>
  }

  return (
    <>
      {width > 600 && (
        <TeamDesktopModal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ zIndex: 100 }}
        >
          <Slide direction="up" in={open}>
            <Box sx={boxStyle}>
              <CloseContainerModal color={'#FFF'} onClick={handleClose}>
                <Close />
              </CloseContainerModal>
              {handleModal()}
            </Box>
          </Slide>
        </TeamDesktopModal>
      )}

      {width <= 600 && (
        <MobileProfile anchor="bottom" open={open} onClose={handleClose}>
          <Box sx={mobileBoxStyle}>{handleModal()}</Box>
        </MobileProfile>
      )}
    </>
  )
}

export default TeamModal
