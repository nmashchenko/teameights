// * Modules
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'
import CloseIcon from '@mui/icons-material/Close'

// * Assets
import LinkIcon from '../../../../assets/LinkIcon'
import MessageIcon from '../../../../assets/MessageIcon'
import AddIcon from '../../../../assets/AddIcon'

// * Temporary image
import AvatarImage from '../../img/tempImg.jpg'

import {
  Container,
  ProfileContainer,
  LinksAndAvatarContainer,
  UserAvatar,
  UserLink,
  UserDetailedInfoContainer,
  NameAndCloseContainer,
  CloseContainer,
  Text,
  UserDescriptionContainer,
  LinksContainer,
  ProjectLinkContainer,
  ButtonsContainer,
  Button,
} from './UserProfile.styles'

const UserProfile = ({ user, handleClose }) => {
  return (
    <Container>
      <ProfileContainer>
        <LinksAndAvatarContainer>
          {/* TODO: Change for the REAL photo! */}
          <div>
            <UserAvatar src={AvatarImage} alt="avatar"></UserAvatar>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
              velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
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
