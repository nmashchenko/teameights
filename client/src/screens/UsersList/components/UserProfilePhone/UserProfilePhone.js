import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'

// * Assets
import ComebackArrow from '../../../../assets/ComebackArrow'
import TempImg from '../../img/tempImg.jpg'
import LinkIcon from '../../../../assets/LinkIcon'
import MessageIcon from '../../../../assets/MessageIcon'
import AddIcon from '../../../../assets/AddIcon'

// * Styles
import {
  UserProfileContainer,
  ComebackContainer,
  UserInformationContainer,
  UserImage,
  UserInfoTextContainer,
  Text,
  LinksContainer,
  UserLink,
  DescriptionContainer,
  ProjectsContainer,
  ProjectLinkContainer,
  ButtonsContainer,
  Button,
} from './UserProfilePhone.styles'

const UserProfilePhone = ({ user, mobileProfile, handleClose }) => {
  return (
    <>
      {mobileProfile ? (
        <UserProfileContainer bottom="0">
          <ComebackContainer onClick={handleClose}>
            <ComebackArrow />
          </ComebackContainer>
          <UserInformationContainer>
            {/* TODO: Change for the REAL photo! */}
            <div>
              <UserImage src={TempImg} alt="userImg" />
            </div>
            <UserInfoTextContainer>
              <Text fontSize="16px" textAlign="start">
                {user.userRealName}, {user.userAge}
              </Text>
              <Text fontSize="16px" fontWeight="600" textAlign="start">
                {user.userConcentration}
              </Text>
            </UserInfoTextContainer>
          </UserInformationContainer>
          {/* TODO: Change for real links! & rewrite for the .map() */}
          <LinksContainer>
            <UserLink>
              <GitHubIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
            </UserLink>
            <UserLink>
              <LinkedInIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
            </UserLink>
            <UserLink>
              <TelegramIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
            </UserLink>
          </LinksContainer>
          <Text margin="50px 0 0 0">About me</Text>
          {/* TODO: Change for the REAL description! */}
          <DescriptionContainer>
            <Text fontWeight="300" fontSize="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosq ad litora torquent
              per conubia nostra, per incept himenaeos.
            </Text>
          </DescriptionContainer>
          <Text margin="50px 0 0 0">My projects</Text>
          {/* TODO: Change for the REAL links! */}
          <ProjectsContainer>
            <ProjectLinkContainer>
              <LinkIcon />
              <Text fontSize="14px" margin="2.5px 30px 0 0" fontWeight="700">
                Project #1
              </Text>
            </ProjectLinkContainer>
            <ProjectLinkContainer>
              <LinkIcon />
              <Text fontSize="14px" margin="2.5px 30px 0 0" fontWeight="700">
                Project #2
              </Text>
            </ProjectLinkContainer>
            <ProjectLinkContainer>
              <LinkIcon />
              <Text fontSize="14px" margin="2.5px 30px 0 0" fontWeight="700">
                Project #3
              </Text>
            </ProjectLinkContainer>
          </ProjectsContainer>
          <ButtonsContainer>
            <Button>
              Message
              <MessageIcon />
            </Button>
            <Button>
              Invite
              <AddIcon />
            </Button>
          </ButtonsContainer>
        </UserProfileContainer>
      ) : (
        <UserProfileContainer></UserProfileContainer>
      )}
    </>
  )
}

export default UserProfilePhone
