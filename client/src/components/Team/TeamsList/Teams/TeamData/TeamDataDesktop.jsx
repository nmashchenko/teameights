import { forwardRef, memo, useState } from 'react'

import CardSkeleton from '../../../../../shared/components/CardSkeleton/CardSkeleton'
import { HidableWrapper } from '../../../TeamForm/TeamForm.styles'
import { TeamButton, TeamDataDesktop, TeamImage, Text } from '../../TeamsList.styles'

const Desktop = forwardRef(({ team, handleClickOpen }, ref) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <TeamDataDesktop ref={ref} padding="12px 0">
      <HidableWrapper display={imgLoading ? 'block' : 'none'}>
        <CardSkeleton width="50px" height="50px" borderRadius="50%" justify="start" />
      </HidableWrapper>
      <HidableWrapper display={imgLoading ? 'none' : 'block'}>
        <TeamImage
          src={team?.image}
          alt="Team's image"
          onLoad={() => setImgLoading(false)}
          width="50px"
          height="50px"
        />
      </HidableWrapper>
      <Text fontSize="16px" fontWeight="400" color="white">
        {team.name}
      </Text>
      <Text fontSize="16px" fontWeight="400" color="#5BD424" textAlign="end">
        {team.tag}
      </Text>
      <Text fontSize="16px" fontWeight="400" color="white" textAlign="end">
        {team.members.length}/8
      </Text>
      <TeamButton onClick={() => handleClickOpen(team)}>Show</TeamButton>
    </TeamDataDesktop>
  )
})

export default memo(Desktop)
