import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEqual } from 'lodash'

import Crown from '../../../assets/Shared/Crowns/Crown'
import Chat from '../../../assets/Team/Chat'
import Person from '../../../assets/Team/Person'
import { useGetScreenWidth } from '../../../hooks/useGetScreenWidth'
import CardSkeleton from '../../../shared/components/CardSkeleton/CardSkeleton'
import { TeamCardTopIcon } from '../../../shared/components/Modal/TeamPreviewModal/TeamPreviewModal.styles'
import { infoToaster } from '../../../shared/components/Toasters/Info.toaster'
import { getCountryFlag } from '../../../utils/getCountryFlag'
import { HidableWrapper, Text } from '../TeamForm/TeamForm.styles'

import {
  ChatButton,
  CloseContainer,
  CrownContainer,
  FlagContainer,
  ProfileButton,
  SpaceBetween,
  ThinCloseIcon,
  UserCard,
  UserImg,
  UserInfo,
  UserLinks,
} from './Members.styles'

const UserCardBox = ({ team, member, isEditing, chosenLeader, handleRemoveMembers }) => {
  const handleMouseEnter = (cardId) => {
    setHoveredCardId(cardId)
  }

  const handleMouseLeave = () => {
    setHoveredCardId(null)
  }

  const [hoveredCardId, setHoveredCardId] = useState(null)
  const screenWidth = useGetScreenWidth()
  const navigate = useNavigate()
  const [imgLoading, setImgLoading] = useState(true)

  return (
    <UserCard
      isEditing={isEditing}
      onMouseEnter={() => screenWidth > 1024 && handleMouseEnter(member._id)}
      onMouseLeave={screenWidth > 1024 ? handleMouseLeave : undefined}
    >
      <HidableWrapper display={imgLoading ? 'block' : 'none'}>
        <CardSkeleton width="50px" height="50px" borderRadius="50%" />
      </HidableWrapper>
      <HidableWrapper display={imgLoading ? 'none' : 'block'}>
        <UserImg alt={team?.username} src={member.image} onLoad={() => setImgLoading(false)} />
      </HidableWrapper>

      {chosenLeader?.username === '' && isEqual(team?.leader?._id, member?._id) && (
        <CrownContainer>
          <Crown />
        </CrownContainer>
      )}
      {hoveredCardId === member?._id && !isEditing ? (
        <UserLinks>
          <ChatButton onClick={() => infoToaster('Coming in the next update!')}>
            Chat
            <Chat />
          </ChatButton>
          <ProfileButton onClick={() => navigate(`/profile/${member?._id}`)}>
            <Person />
          </ProfileButton>
        </UserLinks>
      ) : (
        <UserInfo>
          <SpaceBetween>
            <FlagContainer>
              <Text fontSize="16px" color="#FFF" lineHeight="22.4px" fontWeight="400">
                {member.username.length > 10 && screenWidth >= 1024
                  ? member.username.slice(0, 10) + '...'
                  : member.username}
              </Text>
              {getCountryFlag(member.country) && (
                <TeamCardTopIcon
                  src={getCountryFlag(member.country)}
                  w={'25px'}
                  h={'25px'}
                  borderRadius={'none'}
                />
              )}
            </FlagContainer>

            {team.leader._id === member._id ? (
              <></>
            ) : (
              <CloseContainer
                isEditing={isEditing}
                color="#46A11B"
                onClick={() => {
                  if (isEditing && team.leader._id !== member._id) {
                    handleRemoveMembers(member._id)
                  }
                }}
              >
                <ThinCloseIcon />
              </CloseContainer>
            )}
          </SpaceBetween>
          <Text fontSize="14px" color="#FFF" fontWeight="300" lineHeight="16.8px" alignment="start">
            {member?.concentration?.length > 19 && screenWidth >= 1024
              ? member.concentration.slice(0, 16) + '...'
              : member.concentration}
          </Text>
        </UserInfo>
      )}
    </UserCard>
  )
}

export default UserCardBox
