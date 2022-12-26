import { Container, TextContainer, Text, ImgContainer } from './ConfirmEmail.styles'

import Email from '../../../assets/Email'

function ConfirmEmail() {
  return (
    <Container>
      <TextContainer>
        <Text>A verification link has been sent to you</Text>
        <Text fontSize="30px" fontWeight="400" margin="0">
          Please check your email
        </Text>
      </TextContainer>
      <ImgContainer>
        <Email />
      </ImgContainer>
    </Container>
  )
}

export default ConfirmEmail
