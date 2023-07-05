// * Modules
import { useNavigate } from 'react-router-dom'

// * Assets
import Page404 from '../../../shared/assets/Shared/SearchingPeople'

// * Styles
import {
  Button,
  Container,
  InfoContainer,
  LeftContainer,
  RightContainer,
  Text,
} from './Page404Form.styles'

const Page404Form = ({ paddingLeft = '0', findText = `Couldn't find the requested page.` }) => {
  const navigate = useNavigate()

  return (
    <Container paddingLeft={paddingLeft}>
      <InfoContainer>
        <LeftContainer>
          <Text fontWeight="600" fontSize="7rem" textAlign="left">
            404
          </Text>
          <Text>Oops... it looks like you're lost.</Text>
          <Text fontWeight="400" fontSize="1rem">
            {findText}
          </Text>
          <Button onClick={() => navigate(-1, { replace: true })}>Return Home</Button>
        </LeftContainer>
        <RightContainer>
          <Page404 width="100%" height="auto" />
        </RightContainer>
      </InfoContainer>
    </Container>
  )
}

export default Page404Form
