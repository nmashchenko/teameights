import React from 'react'
import Photo from './Photo.png'
import Location from '../../assets/UserProfile/Location'
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
  saveBtn,
  Top,
  Bottom,
  Save,
  SocialRow,
  EditBtnDiv,
} from './ProfileForm.styles'
import Star from '../../assets/UserProfile/Star'
import Email from '../../assets/UserProfile/Email'
import Github from '../../assets/UserProfile/Github'
import Linkedin from '../../assets/UserProfile/Linkedin'

export const ProfileForm = () => {
  return (
    <Container>
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
            <Text fontSize="15px">holodmitya2002@gmail.com</Text>
          </IconTextContainer>
          <EditButton>Edit</EditButton>
        </InformationRow>

        <SocialRow>
          <IconTextContainer>
              <Github />
              <Text fontSize="15px">Github Link</Text>
            </IconTextContainer>
            <EditButton>Edit</EditButton>
        </SocialRow>

        <SocialRow marginTop="10px">
          <IconTextContainer >
              <Linkedin />
              <Text fontSize="15px">Linkedin Link</Text>
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
          
        </RightCard>
        


        <RightCard id="Tools">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Tools
          </Text>

          <EditBtnDiv>
              <EditButton>Edit</EditButton>
          </EditBtnDiv>

          <BannerLine />
        </RightCard>

        <RightCard id="Team">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Team
          </Text>

          <EditBtnDiv>
              <EditButton>Edit</EditButton>
          </EditBtnDiv>

          <BannerLine />
        </RightCard>

        <RightCard id="AboutMe">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            About me
          </Text>
          <EditBtnDiv>
              <EditButton>Edit</EditButton>
          </EditBtnDiv>
          <BannerLine />
        </RightCard>
      </RightContainer>

      <Bottom>
        <saveBtn primary></saveBtn>
      </Bottom>
    </Container>
  )
}

export default ProfileForm
