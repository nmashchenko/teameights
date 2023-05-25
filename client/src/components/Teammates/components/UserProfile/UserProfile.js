// * Modules
import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TelegramIcon from '@mui/icons-material/Telegram'

// * Assets
import LinkIcon from '../../../../assets/Shared/LinkIcon'
import AddIcon from '../../../../assets/UserProfile/AddIcon'
import MessageIcon from '../../../../assets/UserProfile/MessageIcon'
import { LOCAL_PATH } from '../../../../http'
import { calculateAge } from '../../../../utils/calculateAge'

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

const UserProfile = ({ user, handleClose }) => {
  return (
    <Container>
      <ProfileContainer>
        <LinksAndAvatarContainer>
          <div>
            <UserAvatar src={LOCAL_PATH + '/' + user.image} alt="avatar"></UserAvatar>
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
              {user.fullName}, {calculateAge(user.dateOfBirth)}
            </Text>
            <CloseContainer onClick={handleClose}>
              <CloseIcon sx={{ color: '#6DB33F', width: '30px', height: '30px' }} />
            </CloseContainer>
          </NameAndCloseContainer>
          <Text fontSize="16px" margin="5px 0 0 0">
            {user.concentration}
          </Text>
          <Text fontSize="14px" margin="30px 0 0 0">
            About me
          </Text>
          <UserDescriptionContainer>
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
