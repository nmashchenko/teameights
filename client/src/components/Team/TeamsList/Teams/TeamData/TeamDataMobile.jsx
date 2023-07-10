import { forwardRef, useState } from 'react'

import CardSkeleton from '../../../../../shared/components/CardSkeleton/CardSkeleton'
import FlexWrapper from '../../../../../shared/components/FlexWrapper/FlexWrapper'
import { HidableWrapper } from '../../../TeamForm/TeamForm.styles'
import { TeamDataMobile, TeamImage, Text } from '../../TeamsList.styles'

const Mobile = forwardRef(({ team, handleClickOpen }, ref) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <TeamDataMobile onClick={() => handleClickOpen(team)} ref={ref}>
      <FlexWrapper gap="12px" justify="center" align="center">
        <HidableWrapper display={imgLoading ? 'block' : 'none'}>
          <CardSkeleton width="50px" height="50px" borderRadius="50%" />
        </HidableWrapper>
        <HidableWrapper display={imgLoading ? 'none' : 'block'}>
          <TeamImage
            src={team?.image}
            width="50px"
            height="50px"
            alt="Team's image"
            onLoad={() => setImgLoading(false)}
          />
        </HidableWrapper>

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
