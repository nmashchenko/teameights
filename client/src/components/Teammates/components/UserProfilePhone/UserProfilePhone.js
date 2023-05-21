import React, { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'

// * Assets
import ComebackArrow from '../../../../assets/Arrows/ComebackArrow'
import LinkIcon from '../../../../assets/Shared/LinkIcon'
import AddIcon from '../../../../assets/UserProfile/AddIcon'
import MessageIcon from '../../../../assets/UserProfile/MessageIcon'
import { LOCAL_PATH } from '../../../../http'
import { calculateAge } from '../../../../utils/calculateAge'

// * Styles
import {
  Button,
  ButtonsContainer,
  ComebackContainer,
  DescriptionContainer,
  LinksContainer,
  ProjectLinkContainer,
  ProjectsContainer,
  Text,
  UserImage,
  UserInformationContainer,
  UserInfoTextContainer,
  UserLink,
  UserProfileContainer,
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
            <div>
              <UserImage src={LOCAL_PATH + '/' + user.image} alt="User's image" />
            </div>
            <UserInfoTextContainer>
              <Text fontSize="16px" textAlign="start">
                {user.fullName}, {calculateAge(user.dateOfBirth)}
              </Text>
              <Text fontSize="16px" fontWeight="600" textAlign="start">
                {user.concentration}
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
              {user?.description ? user.description : 'User has no description.'}
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
