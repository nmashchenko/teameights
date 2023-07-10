import UserPlus from '../../../assets/Team/UserPlus'
import { useGetScreenWidth } from '../../../hooks/useGetScreenWidth'
import CardSkeleton from '../../../shared/components/CardSkeleton/CardSkeleton'
import { UserPlusContainer } from '../TeamForm/TeamForm.styles'

import { InviteButton, MobileButtonWrapper, UserGrid, UserImg } from './Members.styles'
import UserCardBox from './UserCardBox'

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
  const width = useGetScreenWidth()

  return (
    <>
      <UserGrid>
        {!team
          ? Array(8)
              .fill(null)
              .map((_, index) => (
                <CardSkeleton
                  width={width > 1024 ? '235px' : '100%'}
                  height="58px"
                  borderRadius="5px"
                  key={index}
                  parentMaxWidth={width > 1024 ? '235px' : '100%'}
                />
              ))
          : team?.members.map((member, i) => (
              <UserCardBox
                team={team}
                member={member}
                isEditing={isEditing}
                chosenLeader={chosenLeader}
                handleRemoveMembers={handleRemoveMembers}
                key={i}
              />
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
