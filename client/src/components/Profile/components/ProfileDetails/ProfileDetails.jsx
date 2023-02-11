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
import {
  frameworkColors,
  frameworkTextColors,
} from '../../../../screens/UsersList/components/UserCard/FrameworkColors'
import languageOptions from '../../../../screens/UsersList/components/UserCard/ProgrammingLanguages'
import { Framework } from '../../../../screens/UsersList/components/UserCard/UserCard.styles'
import Loader from '../../../../shared/components/Loader/Loader'
import { Button } from '../../../../shared/styles/Button.styles'
import { CustomLink } from '../../../../shared/styles/Link.styles'
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
import { EditUserDetails } from '../ProfileForm/ProfileForm.styles'

const ProfileDetails = () => {
  const { data: user, isFetching: isUserDataLoading } = useCheckAuth()
  const { data: team, isLoading: isUserTeamLoading } = useGetTeamData()

  const navigate = useNavigate()

  if (isUserDataLoading || isUserTeamLoading) {
    return <Loader />
  }

  if (!user) {
    return <Button onClick={() => navigate(ROUTES.login)}>Login</Button>
  }

  return (
    <Information>
      <LeftCard>
        <ImgContainer>
          <Img src={Photo} />
          <EditUserDetails onClick={() => navigate('/profile-edit')}>
            <EditIcon />
          </EditUserDetails>
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
            {user.links.github && (
              <SocialRow>
                <IconTextContainer>
                  <Github />
                  <CustomLink href={user.links.github} target="_blank">
                    Github
                  </CustomLink>
                </IconTextContainer>
              </SocialRow>
            )}
            {user.links.linkedIn && (
              <SocialRow marginTop="10px">
                <IconTextContainer>
                  <Linkedin />
                  <CustomLink href={user.links.linkedIn} target="_blank">
                    Linkedin
                  </CustomLink>
                </IconTextContainer>
              </SocialRow>
            )}
            {user.links.telegram && (
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
