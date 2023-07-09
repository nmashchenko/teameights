import { memo, useState } from 'react'

import Crown from '../../../../assets/Shared/Crowns/Crown'
import { getCountryFlag } from '../../../../utils/getCountryFlag'
import CardSkeleton from '../../CardSkeleton/CardSkeleton'
import FlexWrapper from '../../FlexWrapper/FlexWrapper'
import { HidableWrapper } from '../Modal.styles'

import { CrownContainer, FlagIcon, Text, UserImg } from './TeamPreviewModalPhone.styles'

const TeamMember = ({ src, username, country, concentration, shouldHaveCrown = false }) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <FlexWrapper position="relative" gap="12px">
      <HidableWrapper display={imgLoading ? 'block' : 'none'}>
        {shouldHaveCrown && (
          <CrownContainer>
            <Crown />
          </CrownContainer>
        )}
        <CardSkeleton width="50px" height="50px" borderRadius="50%" />
      </HidableWrapper>
      <HidableWrapper display={imgLoading ? 'none' : 'block'}>
        {shouldHaveCrown && (
          <CrownContainer>
            <Crown />
          </CrownContainer>
        )}
        <UserImg src={src} alt="Team's member image" onLoad={() => setImgLoading(false)} />
      </HidableWrapper>
      <FlexWrapper direction="column">
        <FlexWrapper gap="8px" alignItems="baseline">
          <Text fontSize="16px" color="#fff" fontWeight="400" margin="4px 0 0 0">
            {username}
          </Text>
          {getCountryFlag(country) && <FlagIcon src={getCountryFlag(country)} />}
        </FlexWrapper>
        <Text fontSize="14px" color="#8F9094" fontWeight="400">
          {concentration}
        </Text>
      </FlexWrapper>
    </FlexWrapper>
  )
}

export default memo(TeamMember)
