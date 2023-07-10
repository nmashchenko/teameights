import { useState } from 'react'

import { SelectedIcon } from '../../../../assets/Team/SelectedIcon'
import CardSkeleton from '../../CardSkeleton/CardSkeleton'
import {
  HidableWrapper,
  UserAccordionCard,
  UserAccordionImg,
  UsernameIconContainer,
} from '../Modal.styles'

const LeaderCard = ({ member, changeChosenLeader, chosenLeader }) => {
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <UserAccordionCard
      id={member._id}
      onClick={() => {
        changeChosenLeader({ username: member.username, id: member._id })
      }}
    >
      <HidableWrapper display={imgLoading ? 'block' : 'none'}>
        <CardSkeleton
          width="28px"
          parentMaxWidth="28px"
          height="28px"
          borderRadius="50%"
          justify="start"
        />
      </HidableWrapper>
      <HidableWrapper display={imgLoading ? 'none' : 'block'}>
        <UserAccordionImg
          alt={member.username}
          src={member.image}
          onLoad={() => setImgLoading(false)}
        />
      </HidableWrapper>

      <UsernameIconContainer>
        <p>{member.username}</p>
        {chosenLeader.username === member.username ? <SelectedIcon /> : <></>}
      </UsernameIconContainer>
    </UserAccordionCard>
  )
}

export default LeaderCard
