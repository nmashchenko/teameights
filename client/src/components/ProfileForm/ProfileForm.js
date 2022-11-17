import React from 'react'
import {
  Container,
  LeftCard,
  RightContainer,
  RightCard,
  NameText,
  ImgContainer,
  TextContainer,
  TitleText,
  SubText,
  BannerLText,
  BannerRText,
  ProfileLine,
  BannerLine,
  saveBtn,
  Top,
  Bottom,
  Save,
} from './ProfileForm.styles'

export const ProfileForm = () => {
  return (
    <Container>

      <Top><TitleText>Logo</TitleText></Top>

      
      <LeftCard>
        <ImgContainer><img src=''/></ImgContainer>
        <TextContainer>
          <NameText>Name</NameText>
          <SubText>SubTitle</SubText>
          <TitleText>Title</TitleText>
        </TextContainer>

        <ProfileLine/>
        
        <TextContainer>
          <BannerLText>Icon: Location</BannerLText>
          <BannerLText>Icon: Experiences</BannerLText>
          <BannerLText>Icon: Email</BannerLText>
        </TextContainer>

        <TextContainer>
          <BannerLText>Icon: Github</BannerLText>
          <BannerLText>Icon: Linkedin</BannerLText>
        </TextContainer>

      </LeftCard>

      <RightContainer>
        <RightCard id='Languages'>
          <BannerRText>Languages</BannerRText>
          <BannerLine/>
        </RightCard>

        <RightCard id='Tools'>
          <BannerRText>Tools</BannerRText>
          <BannerLine/>
        </RightCard>

        <RightCard id='Team'>
          <BannerRText>Team</BannerRText>
          <BannerLine/>
        </RightCard>

        <RightCard id='AboutMe'>
          <BannerRText>About me</BannerRText>
          <BannerLine/>
        </RightCard>

      </RightContainer>

      <Bottom><saveBtn></saveBtn></Bottom>
    </Container>
  )
}

export default ProfileForm