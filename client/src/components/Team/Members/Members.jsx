import UserPlus from '../../../assets/Team/UserPlus'
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
  return (
    <>
      <UserGrid>
        {team?.members.map((member, i) => (
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
