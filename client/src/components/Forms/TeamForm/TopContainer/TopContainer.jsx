import React from 'react'

import UserPlus from '../../../../assets/UserPlus'
import {
  InviteButton,
  Tab,
  TabContainer,
  TopContainer,
  UserPlusContainer,
} from '../TeamForm.styles'

const TopContainerComponent = ({ isMembers, about, switchIsMembers, handleOpenInvite }) => {
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
      {isMembers && (
        <InviteButton onClick={handleOpenInvite}>
          <UserPlusContainer>
            <UserPlus />
          </UserPlusContainer>
          Invite
        </InviteButton>
      )}
    </TopContainer>
  )
}

export default TopContainerComponent
