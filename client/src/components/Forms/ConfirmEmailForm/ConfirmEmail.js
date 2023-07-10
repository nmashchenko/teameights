import { useNavigate } from 'react-router-dom'

import ArrowNavigateBack from '../../../assets/Arrows/ArrowNavigateBack'
import UserBehindPC from '../../../assets/Shared/UserBehindPC'
import ROUTES from '../../../constants/routes'
import CustomButton from '../../../shared/components/CustomButton/CustomButton'

import { Container, ImgContainer, Text, TextContainer } from './ConfirmEmail.styles'

function ConfirmEmail() {
  const navigate = useNavigate()

  return (
    <Container>
      <ImgContainer>
        <UserBehindPC />
      </ImgContainer>
      <TextContainer>
        <Text>Check your email</Text>
        <Text fontSize="16px" fontWeight="400" color="#8F9094">
          We sent you a link to reset your password
        </Text>
        <CustomButton
          width="100%"
          iconPosition="left"
          background="transparent"
          fontSize="16px"
          onClick={() => navigate(ROUTES.login)}
        >
          <Text fontSize="16px" fontWeight="400" color="#5BD424">
            Back to Log in
          </Text>
        </CustomButton>
      </TextContainer>
    </Container>
  )
}

export default ConfirmEmail
