// * Modules
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import AvatarImage from "../../img/tempImg.jpg";
import CloseIcon from '@mui/icons-material/Close';

import {
  Container,
  ProfileContainer,
  TopContent,
  IconContainer,
  Text,
  MainSection,
  LeftSection,
  AboutMeContainer,
  AboutBox,
  ProjectLink,
  UserLinks,
  RightSection,
  ImgContainer,
  InfoContainer,
  ButtonsContainer,
  Button,
} from "./UserProfile.styles";

const UserProfile = ({ user, handleClose }) => {
  return (
    <Container>
      <ProfileContainer>
        <TopContent>
          <Text>
            {user.userRealName}, {user.userAge}, {user.userCountry}
          </Text>
          <IconContainer onClick={handleClose}>
            <CloseIcon sx={{width: '45px', height: '45px'}}/>
          </IconContainer>
        </TopContent>
        <MainSection>
          <LeftSection>
            <AboutBox> 
              <Text fontSize="24px">
                About me:
              </Text>
              <AboutMeContainer>
                <Text fontSize="20px" fontWeight="300">
                  I love to develop things and work in team, I came here to find
                  guys like me and make something cool together! Teameights rock!
                </Text>
              </AboutMeContainer>
            </AboutBox>
            <Text fontSize="24px" margin="0 0 20px 0">
              My projects:
            </Text>
            <ProjectLink>CPU Simulator v1.0</ProjectLink>
            <ProjectLink>Multithreading trading alghorithm</ProjectLink>
            <ProjectLink>AI assistent</ProjectLink>
            <UserLinks>
              <GitHubIcon
                sx={{
                  color: "black",
                  height: "52px",
                  width: "52px",
                  marginRight: "20px",
                }}
              />
              <InstagramIcon
                sx={{
                  color: "black",
                  height: "52px",
                  width: "52px",
                  marginRight: "20px",
                }}
              />
              <LinkedInIcon
                sx={{
                  color: "black",
                  height: "52px",
                  width: "52px",
                  marginRight: "20px",
                }}
              />
              <TelegramIcon
                sx={{
                  color: "black",
                  height: "52px",
                  width: "52px",
                  marginRight: "20px",
                }}
              />
            </UserLinks>
          </LeftSection>
          <RightSection>
            <ImgContainer src={AvatarImage} alt="userImg" />
            <InfoContainer>
              <Text fontSize="24px" margin="30px 0 30px 0" textAlign="center">
                Desktop Applications Developer
              </Text>
            </InfoContainer>
            <ButtonsContainer>
              <Button>Invite to the team</Button>
              <Button>Send message</Button>
            </ButtonsContainer>
          </RightSection>
        </MainSection>
      </ProfileContainer>
    </Container>
  );
};

export default UserProfile;
