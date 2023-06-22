import { useState } from 'react'

import SCrownRight from '../../../assets/Shared/Crowns/SCrownRight'
import Chat from '../../../assets/Team/Chat'
import Person from '../../../assets/Team/Person'
import UserPlus from '../../../assets/Team/UserPlus'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'
import { useGetScreenWidth } from '../../../hooks/useGetScreenWidth'
import { LOCAL_PATH } from '../../../http'
import { getCountryFlag } from '../../../utils/getCountryFlag'
import { TeamCardTopIcon } from '../Modal/TeamPreviewModal/TeamPreviewModal.styles'
import { Text, UserPlusContainer } from '../TeamForm/TeamForm.styles'

import {
  ChatButton,
  CloseContainer,
  CrownContainer,
  FlagContainer,
  InviteButton,
  MobileButtonWrapper,
  ProfileButton,
  SpaceBetween,
  ThinCloseIcon,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
  UserLinks,
} from './Members.styles'

const Members = ({
  chosenLeader,
  team,
  isEditing,
  handleRemoveMembers,
  handleOpenTransferLeader,
  isMembers,
  role,
  handleOpenInvite,
}) => {
  const [hoveredCardId, setHoveredCardId] = useState(null)
  const screenWidth = useGetScreenWidth()

  const handleMouseEnter = (cardId) => {
    setHoveredCardId(cardId)
  }

  const handleMouseLeave = () => {
    setHoveredCardId(null)
  }

  return (
    <>
      <UserGrid>
        {team?.members.map((member, i) => (
          <UserCard
            isTeamLeader={team.leader._id === member._id}
            isEditing={isEditing}
            key={i}
            onMouseEnter={() => screenWidth > 1024 && handleMouseEnter(member._id)}
            onMouseLeave={screenWidth > 1024 ? handleMouseLeave : undefined}
          >
            <UserImg src={member.image} />
            {(chosenLeader.username === '' && team.leader._id === member._id) ||
            chosenLeader.username === member.username ? (
              <CrownContainer>
                <SCrownRight />
              </CrownContainer>
            ) : (
              <> </>
            )}
            {hoveredCardId === member._id && !isEditing ? (
              <UserLinks>
                <ChatButton onClick={() => console.log('TODO: add transition to chat')}>
                  Chat
                  <Chat />
                </ChatButton>
                <ProfileButton onClick={() => console.log('TODO: add transition to profile')}>
                  <Person />
                </ProfileButton>
              </UserLinks>
            ) : (
              <UserInfo>
                <SpaceBetween>
                  <FlagContainer>
                    <Text
                      fontSize={`${B2fs}`}
                      color="#FFF"
                      lineHeight={`${B2lh}`}
                      fontWeight={`${B2fw}`}
                    >
                      {member.username}
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
                <Text
                  fontSize={`${B3fs}`}
                  color="#FFF"
                  fontWeight={`${B3fw}`}
                  lineHeight={`${B3lh}`}
                  alignment="start"
                >
                  {member?.concentration?.length > 19 && screenWidth >= 1024
                    ? member.concentration.slice(0, 16) + '...'
                    : member.concentration}
                </Text>
              </UserInfo>
            )}
          </UserCard>
        ))}
        {isMembers && !isEditing && (role === 'leader' || role === 'member') && (
          <MobileButtonWrapper>
            <InviteButton onClick={handleOpenInvite}>
              <UserPlusContainer>
                <UserPlus />
              </UserPlusContainer>
              Invite
            </InviteButton>
          </MobileButtonWrapper>
        )}
        {isMembers && isEditing && role === 'leader' && (
          <MobileButtonWrapper>
            <InviteButton onClick={handleOpenTransferLeader}>Change Leader</InviteButton>
          </MobileButtonWrapper>
        )}
      </UserGrid>
    </>
  )
}

export default Members
