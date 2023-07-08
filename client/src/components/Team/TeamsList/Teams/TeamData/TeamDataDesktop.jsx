import { forwardRef, useState } from 'react'

import CardSkeleton from '../../../../../shared/components/CardSkeleton/CardSkeleton'
import { TeamButton, TeamDataDesktop, TeamImage, Text } from '../../TeamsList.styles'

const Desktop = forwardRef(({ team, i, handleClickOpen }, ref) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <TeamDataDesktop ref={ref}>
      <div style={{ display: imgLoading ? 'block' : 'none' }}>
        <CardSkeleton width="60px" height="60px" borderRadius="50%" />
      </div>
      <div style={{ display: imgLoading ? 'none' : 'block' }}>
        <TeamImage src={team?.image} alt="Team's image" onLoad={() => setImgLoading(false)} />
      </div>
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
