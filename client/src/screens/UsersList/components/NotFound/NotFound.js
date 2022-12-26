// * Assets
import NonFound from '../../../../assets/NonFound'

// * Styles
import {
  Container,
  NonFoundContainer,
  TopText,
  BotText,
  Button,
  InfoContainer,
  TextContainer,
} from './NotFound.styles'

const NotFound = ({ handleComeback }) => {
  return (
    <Container>
      <InfoContainer>
        <TopText margin="0 0 15px 0">No results found.</TopText>
        <TextContainer>
          <BotText fontSize="25px" fontWeight="300">
            We can’t find any item matching your search
          </BotText>
        </TextContainer>
        <Button onClick={handleComeback}>Comeback</Button>
      </InfoContainer>
      <NonFoundContainer>
        <NonFound />
      </NonFoundContainer>
    </Container>
  )
}

export default NotFound
