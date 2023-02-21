// * Modules
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'

import AddIcon from '../../../../assets/AddIcon'
// * Assets
import LinkIcon from '../../../../assets/LinkIcon'
import MessageIcon from '../../../../assets/MessageIcon'
// * Temporary image
import AvatarImage from '../../img/tempImg.jpg'

import {
  Button,
  ButtonsContainer,
  CloseContainer,
  Container,
  LinksAndAvatarContainer,
  LinksContainer,
  NameAndCloseContainer,
  ProfileContainer,
  ProjectLinkContainer,
  Text,
  UserAvatar,
  UserDescriptionContainer,
  UserDetailedInfoContainer,
  UserLink,
} from './UserProfile.styles'
import {LOCAL_PATH} from "../../../../http";

const UserProfile = ({ user, handleClose }) => {
  return (
    <Container>
      <ProfileContainer>
        <LinksAndAvatarContainer>
          {/* TODO: Change for the REAL photo! */}
          <div>
            <UserAvatar src={user?.image ? LOCAL_PATH + '/' +  user.image : AvatarImage} alt="avatar"></UserAvatar>
          </div>
          {/* TODO: Change for real links! & rewrite for the .map() */}
          <UserLink>
            <GitHubIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
          </UserLink>
          <UserLink>
            <LinkedInIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
          </UserLink>
          <UserLink>
            <TelegramIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
          </UserLink>
        </LinksAndAvatarContainer>
        <UserDetailedInfoContainer>
          <NameAndCloseContainer>
            <Text fontSize="16px" margin="15px 0 0 0">
              {user.userRealName}, {user.userAge}
            </Text>
            <CloseContainer onClick={handleClose}>
              <CloseIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
            </CloseContainer>
          </NameAndCloseContainer>
          <Text fontSize="16px" margin="5px 0 0 0">
            {user.userConcentration}
          </Text>
          <Text fontSize="14px" margin="30px 0 0 0">
            About me
          </Text>
          <UserDescriptionContainer>
            {/* TODO: Change for the REAL description! */}
            <Text fontSize="14px" margin="5px 0 0 0" fontWeight="300">
              {user?.description ? user.description : 'User has no description.'}
            </Text>
          </UserDescriptionContainer>
          <Text fontSize="14px" margin="35px 0 0 0">
            My projects
          </Text>
          <LinksContainer>
            {/* TODO: Change for real project links! & rewrite for the .map() */}
            <ProjectLinkContainer>
              <LinkIcon />
              <Text fontSize="14px" margin="2.5px 30px 0 0" fontWeight="700">
                Twitter bot
              </Text>
            </ProjectLinkContainer>
            <ProjectLinkContainer>
              <LinkIcon />
              <Text fontSize="14px" margin="2.5px 30px 0 0" fontWeight="700">
                Stocks AI
              </Text>
            </ProjectLinkContainer>
            <ProjectLinkContainer>
              <LinkIcon />
              <Text fontSize="14px" margin="2.5px 30px 0 0" fontWeight="700">
                ML Linear Regression
              </Text>
            </ProjectLinkContainer>
          </LinksContainer>
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
        </UserDetailedInfoContainer>
      </ProfileContainer>
    </Container>
  )
}

export default UserProfile
