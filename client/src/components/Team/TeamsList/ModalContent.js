import { Box } from '@mui/material'

import Close from '../../../assets/Shared/Close'
import ActionModal from '../Modal/ModalTypes/ActionModal'
import InfoModal from '../Modal/ModalTypes/InfoModal'
import TeamPreviewModal from '../Modal/TeamPreviewModal/TeamPreviewModal'
import { CloseContainerModal, style } from '../TeamForm/TeamForm.styles'

import { teamPreviewStyle } from './TeamsList.styles'

export const ModalContent = ({
  changeModal,
  user,
  handleClose,
  handleLeaveAndJoin,
  handleJoin,
  selectedTeam,
}) => {
  if (changeModal === 'alreadyOnTeam') {
    if (user?.team.leader === user._id) {
      const isOnlyMember =
        user?.team.members.length === 1 ? 'You must delete team' : 'You must transfer leadership'

      return (
        <Box sx={style}>
          <InfoModal
            firstText="You cannot join a team."
            secondText={`${isOnlyMember} to join a new team.`}
            firstButton="Okay"
            firstButtonHandler={handleClose}
          />
        </Box>
      )
    }

    return (
      <Box sx={style}>
        <ActionModal
          firstText="You're already on a team."
          secondText="Do you want to leave the current team and join a new one?"
          firstButton="Leave & Join"
          firstButtonHandler={handleLeaveAndJoin}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      </Box>
    )
  } else if (changeModal === 'joinTeam') {
    return (
      <Box sx={teamPreviewStyle}>
        <CloseContainerModal color={'#FFF'} onClick={handleClose}>
          <Close />
        </CloseContainerModal>
        <TeamPreviewModal
          user={user}
          handleJoin={handleJoin}
          team={selectedTeam}
          handleClose={handleClose}
        />
      </Box>
    )
  } else {
    return null // Return null if changeModal has no matching case
  }
}
