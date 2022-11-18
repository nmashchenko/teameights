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
} from './ProfileForm.styles'

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
        {/* 
        <TextContainer>
          <Text>Icon: Location</Text>
          <Text>Icon: Experiences</Text>
          <Text>Icon: Email</Text>
        </TextContainer>

        <TextContainer>
          <Text>Icon: Github</Text>
          <Text>Icon: Linkedin</Text>
        </TextContainer> */}
      </LeftCard>

      <RightContainer>
        <RightCard id="Languages">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Languages
          </Text>
          <BannerLine />
        </RightCard>

        <RightCard id="Tools">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Tools
          </Text>
          <BannerLine />
        </RightCard>

        <RightCard id="Team">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            Team
          </Text>
          <BannerLine />
        </RightCard>

        <RightCard id="AboutMe">
          <Text margin="0 0 0 2px" fontSize="16px" fontWeight="400">
            About me
          </Text>
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
