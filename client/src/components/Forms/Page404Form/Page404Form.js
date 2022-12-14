import React from 'react'
import {
  Container,
  H1,
  Text,
  TextSmall,
  InfoContainer,
  LeftContainer,
  RightContainer,
  Button,
} from './Page404Form.styles'

// * Assets
import Page404 from '../../../assets/Page404'

const Page404Form = () => {
  return (
    <Container>
      <InfoContainer>
        <LeftContainer>
          <H1>404</H1>
          <Text>Oops... it looks like you're lost.</Text>
          <TextSmall>Couldn't find the requested page.</TextSmall>
          <Button>Return Home</Button>
        </LeftContainer>
        <RightContainer>
          <Page404 width="100%" height="auto" />
        </RightContainer>
      </InfoContainer>
    </Container>
  )
}

export default Page404Form
