import { memo, useState } from 'react'

import Crown from '../../../../assets/Shared/Crowns/Crown'
import CardSkeleton from '../../CardSkeleton/CardSkeleton'
import { HidableWrapper } from '../Modal.styles'

import { CrownContainer, TeamCardPerson, TeamCardPicture } from './TeamPreviewModal.styles'

const TeamCardPersonBox = ({ src, shouldLoadImage = false, shouldHaveCrown = false }) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <TeamCardPerson>
      {shouldLoadImage ? (
        <>
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
            <TeamCardPicture
              src={src}
              alt="Team's member image"
              onLoad={() => setImgLoading(false)}
            />
          </HidableWrapper>
        </>
      ) : (
        <TeamCardPicture src={src} alt="Team's member image" />
      )}
    </TeamCardPerson>
  )
}

export default memo(TeamCardPersonBox)
