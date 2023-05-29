import { Box } from '@mui/material'

import ActionModal from '../Modal/ModalTypes/ActionModal'
import InfoModal from '../Modal/ModalTypes/InfoModal'
import TeamPreviewModal from '../Modal/TeamPreviewModal/TeamPreviewModal'
import { style } from '../TeamForm/TeamForm.styles'

export const getModalState = (
  changeModal,
  user,
  handleClose,
  handleLeaveAndJoin,
  handleJoin,
  selectedTeam,
) => {
  if (changeModal === 'alreadyOnTeam') {
    if (user?.team.leader === user._id) {
      const isOnlyMember =
        user?.team.members.length === 1 ? 'You must delete team' : 'You must transfer leadership'

      return (
        <Box sx={style}>
          <InfoModal
            firstText="You cannot join team."
            secondText={`${isOnlyMember} to join new team.`}
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
          secondText="Do you want to leave current team and join new?"
          firstButton="Leave & Join"
          firstButtonHandler={handleLeaveAndJoin}
          secondButton="Cancel"
          secondButtonHandler={handleClose}
        />
      </Box>
    )
  } else if (changeModal === 'joinTeam') {
    return (
      <TeamPreviewModal
        user={user}
        handleJoin={handleJoin}
        team={selectedTeam}
        handleClose={handleClose}
      />
    )
  } else {
    return <></>
  }
}
