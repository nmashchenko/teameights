// * Styles
import {
  Container,
  CardContainer,
  Card,
  RightContainer,
  LeftContainer,
  Text,
  MiniProfile,
  ProfileImgBorder,
  CreateButton,
  TeamImgBorder,
  CircleContainer,
  ProfileTextDiv,
} from './TeamForm.styles'

// * Assets
import TopTemplate from '../../TopTemplate/TopTemplate'

function TeamForm() {
  return (
    <Container>
      <TopTemplate />
      <CardContainer>
        <Card>
          {/* <LeftContainer>
          <MiniProfile>
            <ProfileImgBorder></ProfileImgBorder>
            <ProfileTextDiv>
              <DevName>Nikita Maksimov</DevName>
              <DevTitle>Web Designer</DevTitle>
            </ProfileTextDiv>
          </MiniProfile>
        </LeftContainer> */}
          <RightContainer>
            <CircleContainer>
              <Text>Team Name</Text>
            </CircleContainer>

            <TeamImgBorder></TeamImgBorder>

            <Text fontSize="16px" fontWeight="400">
              Creation date: 23/01/22
            </Text>

            <CreateButton>Create</CreateButton>
          </RightContainer>
        </Card>
      </CardContainer>
    </Container>
  )
}

export default TeamForm
