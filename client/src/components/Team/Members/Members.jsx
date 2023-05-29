import SCrownRight from '../../../assets/Shared/Crowns/SCrownRight'
import Chat from '../../../assets/Team/Chat'
import Person from '../../../assets/Team/Person'
import { ThinClose } from '../../../assets/Team/ThinClose'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'
import { LOCAL_PATH } from '../../../http'
import { Text } from '../TeamForm/TeamForm.styles'

import {
  ChatButton,
  CloseContainer,
  CrownContainer,
  ProfileButton,
  SpaceBetween,
  ThinCloseIcon,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
  UserLinks,
} from './Members.styles'

const Members = ({ chosenLeader, team, isEditing, handleRemoveMembers }) => {
  return (
    <>
      <UserGrid>
        {team?.members.map((member, i) => (
          <UserCard isTeamLeader={team.leader._id === member._id} isEditing={isEditing} key={i}>
            <UserImg src={LOCAL_PATH + '/' + member.image} />
            {(chosenLeader.username === '' && team.leader._id === member._id) ||
            chosenLeader.username === member.username ? (
              <CrownContainer>
                <SCrownRight />
              </CrownContainer>
            ) : (
              <> </>
            )}
            <UserInfo>
              <SpaceBetween>
                <Text
                  fontSize={`${B2fs}`}
                  color="#FFF"
                  lineHeight={`${B2lh}`}
                  fontWeight={`${B2fw}`}
                >
                  {member.username}
                </Text>
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
                {member?.concentration?.length > 16
                  ? member.concentration.slice(0, 10) + '...'
                  : member.concentration}
              </Text>
            </UserInfo>
            <UserLinks>
              <ChatButton onClick={() => console.log('TODO: add transition to chat')}>
                Chat
                <Chat />
              </ChatButton>
              <ProfileButton onClick={() => console.log('TODO: add transition to profile')}>
                <Person />
              </ProfileButton>
            </UserLinks>
          </UserCard>
        ))}
      </UserGrid>
    </>
  )
}

export default Members
