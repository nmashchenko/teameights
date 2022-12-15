// * Modules
import { useNavigate } from 'react-router-dom'

// * Styles
import {
  Container,
  Text,
  InfoContainer,
  LeftContainer,
  RightContainer,
  Button,
} from './Page404Form.styles'

// * Assets
import Page404 from '../../../assets/Page404'

const Page404Form = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <InfoContainer>
        <LeftContainer>
          <Text fontWeight="600" fontSize="7rem" textAlign="left">
            404
          </Text>
          <Text>Oops... it looks like you're lost.</Text>
          <Text fontWeight="400" fontSize="1rem">
            Couldn't find the requested page.
          </Text>
          <Button onClick={() => navigate('/platform')}>Return Home</Button>
        </LeftContainer>
        <RightContainer>
          <Page404 width="100%" height="auto" />
        </RightContainer>
      </InfoContainer>
    </Container>
  )
}

export default Page404Form
