import { forwardRef } from 'react'

import { TeamButton, TeamDataDesktop, TeamImage, Text } from '../../TeamsList.styles'

const Desktop = forwardRef(({ team, i, handleClickOpen }, ref) => {
  return (
    <TeamDataDesktop ref={ref}>
      <TeamImage src={team?.image} />
      <Text fontSize="16px" fontWeight="400" color="white">
        {team.name}
      </Text>
      <Text fontSize="16px" fontWeight="400" color="white">
        {team.tag}
      </Text>
      <Text fontSize="16px" fontWeight="400" color="white">
        {team.members.length}/8
      </Text>
      <TeamButton onClick={() => handleClickOpen(team)}>Show</TeamButton>
    </TeamDataDesktop>
  )
})

export default Desktop
