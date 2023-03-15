import React from 'react'

import Crown from '../../../../assets/Crown'
import { LOCAL_PATH } from '../../../../http'
import {
  CrownContainer,
  CrownContainer2,
  Text,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
} from '../TeamForm.styles'

const Members = ({ team }) => {
  return (
    <UserGrid>
      {team.members.map((member, i) => (
        <UserCard key={i}>
          <UserImg
            src={
              member?.image
                ? LOCAL_PATH + '/' + member.image
                : 'https://i.pinimg.com/474x/41/26/bd/4126bd6b08769ed2c52367fa813c721e.jpg'
            }
          />
          {team.leader._id === member._id && (
            <CrownContainer>
              <Crown />
            </CrownContainer>
          )}
          <UserInfo>
            <Text fontSize="16px" color="#FFF">
              {member.username}
            </Text>
            <Text fontSize="14px" color="#FFF" fontWeight="100" alignment="start">
              {member.concentration}
            </Text>
          </UserInfo>
        </UserCard>
      ))}
    </UserGrid>
  )
}

export default Members
