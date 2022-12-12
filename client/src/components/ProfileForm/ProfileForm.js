// * Modules
import { useEffect, useState } from 'react'
// * Redux
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

// * API
import teamsAPI from '../../api/endpoints/team'
import C from '../../assets/LanguageLogo/C'
import Cplusplus from '../../assets/LanguageLogo/Cplusplus'
import JS from '../../assets/LanguageLogo/JS'
import Email from '../../assets/UserProfile/Email'
import Github from '../../assets/UserProfile/Github'
import Linkedin from '../../assets/UserProfile/Linkedin'
import Location from '../../assets/UserProfile/Location'
import Star from '../../assets/UserProfile/Star'
import TopTemplate from '../TopTemplate/TopTemplate'

// * Assets
import Photo from './Photo.jpg'
// * Styles
import {
  BannerLine,
  Cards,
  Container,
  EditBtnDiv,
  EditButton,
  Framework,
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
  Text,
  TextContainer,
} from './ProfileForm.styles'

export const ProfileForm = () => {
  const [team, setTeam] = useState('')

  const { user } = useSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    const getTeam = async () => {
      if (isEqual(user, {})) {
        navigate('/auth/login', { replace: true })
      } else {
        const team = await teamsAPI.getTeamById(user.userTeam)

        setTeam(team.data.name)
      }
    }

    getTeam()
  }, [])

  return (
    <Container>
      <TopTemplate />
      <Cards>
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
            <SocialRow>
              <IconTextContainer>
                <Github />
                <Text fontSize="15px" color="#5F7ADB">
                  Soon...
                </Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>
            <SocialRow marginTop="10px">
              <IconTextContainer>
                <Linkedin />
                <Text fontSize="15px" color="#5F7ADB">
                  Soon...
                </Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>
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
                <ProgrammingLanguage>
                  <C />
                </ProgrammingLanguage>
                <ProgrammingLanguage>
                  <JS />
                </ProgrammingLanguage>
                <ProgrammingLanguage>
                  <Cplusplus />
                </ProgrammingLanguage>
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
                <Framework>
                  <Text margin="0x" fontSize="12px" fontWeight="400" color="#7AC408">
                    Node
                  </Text>
                </Framework>
                <Framework background="#00A4D3">
                  <Text margin="0x" fontSize="12px" fontWeight="400" color="white">
                    React
                  </Text>
                </Framework>
                <Framework background="#E24B31">
                  <Text margin="0x" fontSize="12px" fontWeight="400" color="white">
                    Ember
                  </Text>
                </Framework>
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
                  {team}
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
              <RightCardData>
                <Text margin="10px 0 0 0" fontSize="15px" fontWeight="400" alignment="start">
                  {user.userDescription}
                </Text>
              </RightCardData>
            </RightCard>
          </RightContainer>
        </Information>
      </Cards>
    </Container>
  )
}

export default ProfileForm
