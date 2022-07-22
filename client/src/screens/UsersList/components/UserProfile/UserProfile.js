import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import AvatarImage from "../../img/tempImg.jpg";

import {
  Container,
  ProfileContainer,
  Text,
  MainSection,
  LeftSection,
  AboutMeContainer,
  ProjectLink,
  UserLinks,
  RightSection,
  ImgContainer,
  InfoContainer,
  ButtonsContainer,
  Button,
} from "./UserProfile.styles";

const UserProfile = ({ user }) => {
  return (
    <Container>
      <ProfileContainer>
        <Text>
          {user.userRealName}, {user.userAge}, {user.userCountry}
        </Text>
        <MainSection>
          <LeftSection>
            <Text fontSize="24px" margin="69px 0 24px 0">
              About me:
            </Text>
            <AboutMeContainer>
              <Text fontSize="20px" margin="0 0 31px 0" fontWeight="300">
                I love to develop things and work in team, I came here to find
                guys like me and make something cool together! Teameights rock!
              </Text>
            </AboutMeContainer>
            <Text fontSize="24px" margin="0 0 40px 0">
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
