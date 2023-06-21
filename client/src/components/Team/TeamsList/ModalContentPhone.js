import { forwardRef } from 'react'
import { Box } from '@mui/material'

import ActionModal from '../Modal/ModalTypes/ActionModal'
import InfoModal from '../Modal/ModalTypes/InfoModal'
import TeamPreviewModalPhone from '../Modal/TeamPreviewModalPhone/TeamPreviewModalPhone'

export const ModalContentPhone = forwardRef(
  ({ changeModal, user, handleClose, handleLeaveAndJoin, handleJoin, selectedTeam }, ref) => {
    if (changeModal === 'alreadyOnTeam') {
      if (user?.team.leader === user._id) {
        const isOnlyMember =
          user?.team.members.length === 1 ? 'You must delete team' : 'You must transfer leadership'

        return (
          <Box sx={{ width: '100%', background: '#1A1C22', padding: '78px 27px' }}>
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
        <Box sx={{ width: '100%', background: '#1A1C22', padding: '78px 27px' }}>
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
        <TeamPreviewModalPhone
          user={user}
          handleJoin={handleJoin}
          team={selectedTeam}
          handleClose={handleClose}
        />
      )
    } else {
      return null // Return null if changeModal has no matching case
    }
  },
)
