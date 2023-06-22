import { forwardRef } from 'react'

import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import { TeamDataMobile, TeamImage, Text } from '../../TeamsList.styles'

const Mobile = forwardRef(({ team, i, handleClickOpen }, ref) => {
  return (
    <TeamDataMobile onClick={() => handleClickOpen(team)} ref={ref}>
      <FlexWrapper gap="12px" justify="center" align="center">
        <TeamImage src={team?.image} width="50px" height="50px" />
        <FlexWrapper direction="column">
          <Text fontSize="16px" fontWeight="400" color="white">
            {team.name}
          </Text>
          <Text fontSize="14px" fontWeight="400" color="#5BD424">
            {team.tag}
          </Text>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper direction="column" align="end" justify="end">
        <Text fontSize="14px" fontWeight="400" color="white">
          {team.members.length}/8
        </Text>
      </FlexWrapper>
    </TeamDataMobile>
  )
})

export default Mobile
