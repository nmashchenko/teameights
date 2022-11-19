// * Modules
import React from 'react'

// * Assets
import Photo from './Photo.png'
import Location from '../../assets/UserProfile/Location'
import TopTemplate from '../TopTemplate/TopTemplate'
import C from '../../assets/LanguageLogo/C'
import JS from '../../assets/LanguageLogo/JS'
import Cplusplus from '../../assets/LanguageLogo/Cplusplus'
import Star from '../../assets/UserProfile/Star'
import Email from '../../assets/UserProfile/Email'
import Github from '../../assets/UserProfile/Github'
import Linkedin from '../../assets/UserProfile/Linkedin'

// * Styles
import {
  Container,
  LeftCard,
  RightContainer,
  RightCard,
  ImgContainer,
  TextContainer,
  Text,
  ProfileLine,
  BannerLine,
  InformationRow,
  IconTextContainer,
  EditButton,
  Cards,
  Information,
  SocialRow,
  EditBtnDiv,
  RightCardData,
  ProgrammingLanguage,
  Framework,
} from './ProfileForm.styles'

export const ProfileForm = () => {
  return (
    <Container>
      <TopTemplate />
      <Cards>
        <Information>
          <LeftCard>
            <ImgContainer>
              <img src={Photo} />
            </ImgContainer>
            <TextContainer>
              <Text margin="15px 0 0 0">Nikita Mashchenko</Text>
              <Text margin="5px 0 0 0" color="rgba(255, 255, 255, 0.5)" fontSize="16px">
                pRod1gy
              </Text>
              <Text margin="5px 0 0 0">Full-Stack Web dev.</Text>
            </TextContainer>

            <ProfileLine />
            <InformationRow>
              <IconTextContainer>
                <Location />
                <Text fontSize="15px">Kharkiv, Ukraine</Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </InformationRow>

            <InformationRow>
              <IconTextContainer>
                <Star />
                <Text fontSize="15px">3-5 years of experiences</Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </InformationRow>

            <InformationRow>
              <IconTextContainer>
                <Email />
                <Text fontSize="15px">mashchenko1@icloud.com</Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </InformationRow>

            <SocialRow>
              <IconTextContainer>
                <Github />
                <Text fontSize="15px" color="#5F7ADB">
                  exortme1ster
                </Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>

            <SocialRow marginTop="10px">
              <IconTextContainer>
                <Linkedin />
                <Text fontSize="15px" color="#5F7ADB">
                  mashchenko_1
                </Text>
              </IconTextContainer>
              <EditButton>Edit</EditButton>
            </SocialRow>
          </LeftCard>

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
                  That's where your team will come in
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                  velit interdum, ac aliquet odio mattis.
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
