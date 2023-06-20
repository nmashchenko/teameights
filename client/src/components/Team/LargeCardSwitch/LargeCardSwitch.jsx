import React from 'react'

import UserPlus from '../../../assets/Team/UserPlus'
import { UserPlusContainer } from '../TeamForm/TeamForm.styles'

import {
  InviteButton,
  InviteButtonContainer,
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
        <InviteButtonContainer>
          <InviteButton onClick={handleOpenInvite}>
            <UserPlusContainer>
              <UserPlus />
            </UserPlusContainer>
            Invite
          </InviteButton>
        </InviteButtonContainer>
      )}

      {isMembers && isEditing && role === 'leader' && (
        <InviteButton onClick={handleOpenTransferLeader}>Change Leader</InviteButton>
      )}
    </TopContainer>
  )
}

export default LargeCardSwitch
