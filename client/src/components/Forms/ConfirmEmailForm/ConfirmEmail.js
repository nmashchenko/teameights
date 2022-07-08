import {
  Container,
  TextContainer,
  Text,
} from './ConfirmEmail.styles'

import EmailText from '../../../assets/EmailText'
import Email from '../../../assets/Email'

function ConfirmEmail() {
  return (
    <Container>
      <TextContainer>
        <Text color='black'>Check your</Text>
        <EmailText />
        <Text>🤙🏻</Text>
      </TextContainer>
      <Email />
    </Container>
  )
}

export default ConfirmEmail
