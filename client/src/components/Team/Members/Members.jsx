import SCrownRight from '../../../assets/Shared/Crowns/SCrownRight'
import { ThinClose } from '../../../assets/Team/ThinClose'
import { B2fs, B2fw, B2lh, B3fs, B3fw, B3lh } from '../../../constants/fonts'
import { LOCAL_PATH } from '../../../http'
import {
  CloseContainer,
  CrownContainer,
  SpaceBetween,
  Text,
  UserCard,
  UserGrid,
  UserImg,
  UserInfo,
} from '../TeamForm/TeamForm.styles'

const Members = ({ chosenLeader, team, isEditing, handleRemoveMembers }) => {
  return (
    <>
      <UserGrid>
        {team?.members.map((member, i) => (
          <UserCard
            onClick={() => {
              if (isEditing && team.leader._id !== member._id) {
                handleRemoveMembers(member._id)
              }
            }}
            isTeamLeader={team.leader._id === member._id}
            isEditing={isEditing}
            key={i}
          >
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
                  <CloseContainer isEditing={isEditing} color="#46A11B">
                    <ThinClose />
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
          </UserCard>
        ))}
      </UserGrid>
    </>
  )
}

export default Members
