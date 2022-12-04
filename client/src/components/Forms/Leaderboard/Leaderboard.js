import {
  Container,
  BaseContainer,
  InfoContainer,
  Text,
  TextCTA,
  Content,
} from './Leaderboard.styles'
import TopTemplate from '../../TopTemplate/TopTemplate'

function Leaderboard() {
  return (
    <Container>
      <TopTemplate />
      <Content>
        <BaseContainer>
          <TextCTA>
            <Text fontWeight="700" fontSize="25px" color="#5D9D0B" marginAll="0 0 30px 0">
              Leaderboard
            </Text>
          </TextCTA>

          <InfoContainer>
            <Text fontWeight="600" color="#5D9D0B">
              TOP
            </Text>
            <Text fontWeight="600" color="#5D9D0B">
              TEAM
            </Text>
            <Text fontWeight="600" color="#5D9D0B">
              SCORE
            </Text>
          </InfoContainer>

          <InfoContainer>
            <Text fontWeight="600" color="#FFE600">
              #1
            </Text>
            <Text fontWeight="600" color="#FFE600">
              GACHI
            </Text>
            <Text fontWeight="600" color="#FFE600">
              100
            </Text>
          </InfoContainer>

          <InfoContainer>
            <Text fontWeight="600" color="#BDBDBD">
              #2
            </Text>
            <Text fontWeight="600" color="#BDBDBD">
              MUCHI
            </Text>
            <Text fontWeight="600" color="#BDBDBD">
              98
            </Text>
          </InfoContainer>
        </BaseContainer>
      </Content>
    </Container>
  )
}

export default Leaderboard
