import UserBehindPC from '../../../assets/Shared/UserBehindPC'

import { Container, ImgContainer, Text, TextContainer } from './ConfirmEmail.styles'

function ConfirmEmail() {
  return (
    <Container>
      <ImgContainer>
        <UserBehindPC />
      </ImgContainer>
      <TextContainer>
        <Text>Check your email</Text>
        <Text fontSize="16px" fontWeight="400" margin="0">
          We send you link to reset your password
        </Text>
      </TextContainer>
    </Container>
  )
}

export default ConfirmEmail
