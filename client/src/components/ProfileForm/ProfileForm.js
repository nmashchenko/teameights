// * Modules
import { useNavigate } from 'react-router-dom'
import { Telegram } from '@mui/icons-material'

// * API
import { useCheckAuth } from '../../api/hooks/auth/useCheckAuth'
import { useGetTeamData } from '../../api/hooks/team/useGetTeamData'
import Email from '../../assets/UserProfile/Email'
import Github from '../../assets/UserProfile/Github'
import Linkedin from '../../assets/UserProfile/Linkedin'
import Location from '../../assets/UserProfile/Location'
import Star from '../../assets/UserProfile/Star'
import ROUTES from '../../constants/routes'
import {
  frameworkColors,
  frameworkTextColors,
} from '../../screens/UsersList/components/UserCard/FrameworkColors'
import languageOptions from '../../screens/UsersList/components/UserCard/ProgrammingLanguages'
import { Framework } from '../../screens/UsersList/components/UserCard/UserCard.styles'
import Loader from '../../shared/components/Loader/Loader'
import { Button } from '../../shared/styles/Button.styles'
import { CustomLink } from '../../shared/styles/Link.styles'

// * Assets
import Photo from './Photo.jpg'
// * Styles
import {
  BannerLine,
  EditBtnDiv,
  EditButton,
  IconTextContainer,
  ImgContainer,
  Information,
  InformationRow,
  LeftCard,
  ProfileLine,
  ProgrammingLanguage,
  RightCard,
  RightCardData,
  RightContainer,
  SocialRow,
  SocialWrapper,
  Text,
  TextContainer,
} from './ProfileForm.styles'

const ProfileForm = () => {
  const { data: user, isLoading: isUserDataLoading } = useCheckAuth()
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
        <div>
          <ImgContainer src={Photo} />
        </div>
        <TextContainer>
          <Text margin="15px 0 0 0">{user.userRealName}</Text>
          <Text margin="5px 0 0 0" color="rgba(255, 255, 255, 0.5)" fontSize="16px">
            {user.userUsername}
          </Text>
          <Text margin="5px 0 0 0">{user.userConcentration}</Text>
        </TextContainer>
        <ProfileLine />
        <InformationRow>
          <IconTextContainer>
            <Location />
            <Text fontSize="15px">{user.userCountry}</Text>
          </IconTextContainer>
          <EditButton>Edit</EditButton>
        </InformationRow>
        <InformationRow>
          <IconTextContainer>
            <Star />
            <Text fontSize="15px">{user.userExperience} years of experiences</Text>
          </IconTextContainer>
          <EditButton>Edit</EditButton>
        </InformationRow>
        <InformationRow>
          <IconTextContainer>
            <Email />
            <Text fontSize="15px">{user.email}</Text>
          </IconTextContainer>
          <EditButton>Edit</EditButton>
        </InformationRow>
        {/* TODO: Edit for real usernames */}
        <SocialWrapper>
          {user.userLinks.github && (
            <SocialRow>
              <IconTextContainer>
                <Github />
                <CustomLink href={user.userLinks.github} target="_blank">
                  Github
                </CustomLink>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>
          )}
          {user.userLinks.linkedIn && (
            <SocialRow marginTop="10px">
              <IconTextContainer>
                <Linkedin />
                <CustomLink href={user.userLinks.linkedIn} target="_blank">
                  Linkedin
                </CustomLink>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>
          )}
          {user.userLinks.telegram && (
            <SocialRow marginTop="10px">
              <IconTextContainer>
                <Telegram style={{ color: '#fff' }} />
                <CustomLink href={user.userLinks.telegram} target="_blank">
                  Telegram
                </CustomLink>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>
          )}
        </SocialWrapper>
      </LeftCard>

      {/* TODO: Edit for real lanuguages */}
      <RightContainer>
        <RightCard id="Languages">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Languages
          </Text>
          <EditBtnDiv>
            <EditButton>Edit</EditButton>
          </EditBtnDiv>
          <BannerLine />
          <RightCardData>
            {user.userProgrammingLanguages.map((language) => (
              <ProgrammingLanguage key={language}>{languageOptions[language]}</ProgrammingLanguage>
            ))}
          </RightCardData>
        </RightCard>

        {/* TODO: Edit for real lanuguages */}
        <RightCard id="Tools">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Tools
          </Text>
          <EditBtnDiv>
            <EditButton>Edit</EditButton>
          </EditBtnDiv>
          <BannerLine />
          <RightCardData>
            {user.userFrameworks.map((framework) => (
              <Framework
                key={framework}
                background={frameworkColors[framework]}
                color={frameworkTextColors[framework]}
                flexGrow="0"
              >
                <h3>{framework}</h3>
              </Framework>
            ))}
          </RightCardData>
        </RightCard>

        <RightCard id="Team">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Team
          </Text>
          <EditBtnDiv>
            <EditButton>Edit</EditButton>
          </EditBtnDiv>
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
          <EditBtnDiv>
            <EditButton>Edit</EditButton>
          </EditBtnDiv>
          <BannerLine />
          <RightCardData justify={user.userDescription ? 'start' : 'center'}>
            <Text margin="0" fontSize="16px" fontWeight="600" color="rgba(255, 255, 255, 0.7)">
              {user.userDescription ? user.userDescription : 'This user is humble'}
            </Text>
          </RightCardData>
        </RightCard>
      </RightContainer>
    </Information>
  )
}

export default ProfileForm
