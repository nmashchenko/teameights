// * Modules
import React, { useState, useEffect } from 'react'

// * Assets
import NavBarIcon from '../../../assets/NavBarIcon'
import NotificationIcon from '../../../assets/NotificationIcon'
import X from '../../../assets/X'
import PlatformLogoBig from '../../../assets/PlatformLogoBig'
import Exit from '../../../assets/Exit'
import ProfileEllipse from './img/ProfileEllipse.png'
import CrownImg from './img/Crown.svg'
import ProfileEditIcon from '../../../assets/ProfileEditIcon'
import DropDownIcon from './img/DropDownIcon.svg'

import {
  CreateTeamContainer,
  TopBar,
  ClickableText,
  TopBarContainer,
  MainContainer,
  XContainer,
  ProfileContainer,
  CrownContainer,
  ProfileEditContainer,
  TeamNameContainer,
  ChooseCountryContainer,
  Text,
  Line,
  DropDownIconContainer,
  CreateButtonContainer,
} from './CreateTeamForm.styles'

function CreateTeamForm() {
  return (
    <>
      <CreateTeamContainer>
        <TopBar>
          <TopBarContainer>
            <NavBarIcon />
          </TopBarContainer>
          <ClickableText>My Team</ClickableText>
          <TopBarContainer>
            <PlatformLogoBig />
          </TopBarContainer>
          <TopBarContainer>
            <Exit />
          </TopBarContainer>
          <TopBarContainer>
            <NotificationIcon />
          </TopBarContainer>
        </TopBar>

        <MainContainer>
          <XContainer>
            <X />
          </XContainer>
          <ProfileContainer>
            <CrownContainer>
              <img src={CrownImg} alt="crown"></img>
            </CrownContainer>
            <img src={ProfileEllipse} alt="crown"></img>
            <ProfileEditContainer>
              <ProfileEditIcon />
            </ProfileEditContainer>
          </ProfileContainer>
          <TeamNameContainer>
            <Text>Team Name</Text>
            <Line />
          </TeamNameContainer>
          <ChooseCountryContainer>
            <Text>Choose a country</Text>
            <DropDownIconContainer>
              <img src={DropDownIcon} alt="crown"></img>
            </DropDownIconContainer>
            <Line />
          </ChooseCountryContainer>
          <CreateButtonContainer>
            <p>Create</p>
          </CreateButtonContainer>
        </MainContainer>
      </CreateTeamContainer>
    </>
  )
}

export default CreateTeamForm
