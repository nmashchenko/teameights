import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../../../api/hooks/auth/useCheckAuth'
import { useGetTeamData } from '../../../../api/hooks/team/useGetTeamData'
import EditIcon from '../../../../assets/EditIcon'
import Email from '../../../../assets/UserProfile/Email'
import Github from '../../../../assets/UserProfile/Github'
import Linkedin from '../../../../assets/UserProfile/Linkedin'
import Location from '../../../../assets/UserProfile/Location'
import Star from '../../../../assets/UserProfile/Star'
import ROUTES from '../../../../constants/routes'
import { LOCAL_PATH } from '../../../../http'
import {
  frameworkColors,
  frameworkTextColors,
} from '../../../../screens/UsersList/components/UserCard/FrameworkColors'
import languageOptions from '../../../../screens/UsersList/components/UserCard/ProgrammingLanguages'
import { Framework } from '../../../../screens/UsersList/components/UserCard/UserCard.styles'
import AvatarEditButton from '../../../../shared/components/Forms/UserAvatar/AvatarEditButton/AvatarEditButton'
import { UserAvatar } from '../../../../shared/components/Forms/UserAvatar/UserAvatar.styles'
import Loader from '../../../../shared/components/Loader/Loader'
import ModalWindow from '../../../../shared/components/ModalWindow/ModalWindow'
import { Button } from '../../../../shared/styles/Button.styles'
import { CustomLink } from '../../../../shared/styles/Link.styles'
import { AvatarWrapper } from '../../../Forms/RegistrationPipeline/components/RegistrationForms/AvatarForm/AvatarForm.styles'
import Photo from '../../Photo.jpg'
import {
  BannerLine,
  DetailsWrapper,
  IconTextContainer,
  Img,
  ImgContainer,
  Information,
  InformationRow,
  InformationWrapper,
  LeftCard,
  ProfileLine,
  ProgrammingLanguage,
  RightCard,
  RightCardData,
  RightContainer,
  SocialRow,
  SocialWrapper,
  TelegramIcon,
  Text,
  TextContainer,
} from '../../Profile.styles'

const ProfileDetails = () => {
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()
  const teamId = user?.team?._id

  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData(teamId)

  const navigate = useNavigate()

  if (isUserDataLoading || isUserTeamLoading) {
    return <Loader />
  }

  if (!user?.isRegistered) {
    return <Button onClick={() => navigate(ROUTES.login)}>Login</Button>
  }

  return (
    <Information>
      <LeftCard>
        <ImgContainer>
          <UserAvatar
            src={user?.image ? LOCAL_PATH + '/' + user?.image : Photo}
            width={'9.375rem'}
            height={'9.375rem'}
          />
          <AvatarEditButton onClick={() => navigate('/profile-edit')} />
        </ImgContainer>
        <TextContainer>
          <Text margin="15px 0 0 0">{user.fullName}</Text>
          <Text margin="5px 0 0 0" color="rgba(255, 255, 255, 0.5)" fontSize="16px">
            {user.username}
          </Text>
          <Text margin="5px 0 0 0">{user.concentration}</Text>
        </TextContainer>
        <ProfileLine />
        <DetailsWrapper>
          <InformationWrapper>
            <InformationRow>
              <IconTextContainer>
                <Location />
                <Text fontSize="15px">{user.country}</Text>
              </IconTextContainer>
            </InformationRow>
            <InformationRow>
              <IconTextContainer>
                <Star />
                <Text fontSize="15px">{user.experience} years of experiences</Text>
              </IconTextContainer>
            </InformationRow>
            <InformationRow>
              <IconTextContainer>
                <Email />
                <Text fontSize="15px">{user.email}</Text>
              </IconTextContainer>
            </InformationRow>
          </InformationWrapper>
          <SocialWrapper>
            {user.links?.github && (
              <SocialRow>
                <IconTextContainer>
                  <Github />
                  <CustomLink href={user.links.github} target="_blank">
                    Github
                  </CustomLink>
                </IconTextContainer>
              </SocialRow>
            )}
            {user.links?.linkedIn && (
              <SocialRow marginTop="10px">
                <IconTextContainer>
                  <Linkedin />
                  <CustomLink href={user.links.linkedIn} target="_blank">
                    Linkedin
                  </CustomLink>
                </IconTextContainer>
              </SocialRow>
            )}
            {user.links?.telegram && (
              <SocialRow marginTop="10px">
                <IconTextContainer>
                  <TelegramIcon />
                  <CustomLink href={user.links.telegram} target="_blank">
                    Telegram
                  </CustomLink>
                </IconTextContainer>
              </SocialRow>
            )}
          </SocialWrapper>
        </DetailsWrapper>
      </LeftCard>
      <RightContainer>
        <RightCard id="Languages">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Languages
          </Text>
          <BannerLine />
          <RightCardData>
            {user.programmingLanguages.map((language) => (
              <ProgrammingLanguage key={language}>{languageOptions[language]}</ProgrammingLanguage>
            ))}
          </RightCardData>
        </RightCard>
        <RightCard id="Tools">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Tools
          </Text>
          <BannerLine />
          <RightCardData>
            {user.frameworks.slice(0, 5).map((framework, index) => (
              <Framework
                key={framework}
                background={frameworkColors[framework]}
                color={frameworkTextColors[framework]}
                flexGrow="0"
              >
                <h3>{index < 4 ? framework : `+${user.frameworks.length - 4}`}</h3>
              </Framework>
            ))}
          </RightCardData>
        </RightCard>
        <RightCard id="Team">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Team
          </Text>
          <BannerLine />
          <RightCardData justify="center">
            <Text margin="0" fontSize="16px" fontWeight="600" color="rgba(255, 255, 255, 0.7)">
              {team ? team.name : "That's where your team will come in"}
            </Text>
          </RightCardData>
        </RightCard>
        <RightCard id="AboutMe">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            About me
          </Text>
          <BannerLine />
          <RightCardData justify={user.description ? 'start' : 'center'}>
            <Text margin="0" fontSize="16px" fontWeight="600" color="rgba(255, 255, 255, 0.7)">
              {user.description ? user.description : 'This user is humble'}
            </Text>
          </RightCardData>
        </RightCard>
      </RightContainer>
    </Information>
  )
}

export default ProfileDetails
