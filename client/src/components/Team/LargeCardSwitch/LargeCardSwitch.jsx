import UserPlus from '../../../shared/assets/Team/UserPlus'
import { UserPlusContainer } from '../TeamForm/TeamForm.styles'

import {
  DesktopButtonWrapper,
  InviteButton,
  Tab,
  TabContainer,
  TopContainer,
} from './LargeCardSwitch.styles'

const LargeCardSwitch = ({
  isMembers,
  about,
  switchIsMembers,
  handleOpenInvite,
  role,
  isEditing,
  handleOpenTransferLeader,
}) => {
  return (
    <TopContainer isMembers={isMembers}>
      <TabContainer about={about}>
        <Tab
          onClick={() => {
            switchIsMembers(true)
          }}
          isMembers={isMembers}
        >
          Members
          <span></span>
        </Tab>
        <Tab
          onClick={() => {
            switchIsMembers(false)
          }}
          isMembers={!isMembers}
        >
          About
          <span></span>
        </Tab>
      </TabContainer>
      {isMembers && !isEditing && (role === 'leader' || role === 'member') && (
        <DesktopButtonWrapper>
          <InviteButton onClick={handleOpenInvite}>
            <UserPlusContainer>
              <UserPlus />
            </UserPlusContainer>
            Invite
          </InviteButton>
        </DesktopButtonWrapper>
      )}

      {isMembers && isEditing && role === 'leader' && (
        <DesktopButtonWrapper>
          <InviteButton onClick={handleOpenTransferLeader}>Change Leader</InviteButton>
        </DesktopButtonWrapper>
      )}
    </TopContainer>
  )
}

export default LargeCardSwitch
