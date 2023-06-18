import { Text } from '../../TeamForm/TeamForm.styles'
import { Container } from '../TeamModal.styles'

const InteractiveModal = ({ interactiveText, interactiveComponent, interactiveButtons }) => {
  return (
    <Container>
      <div>
        <Text fontSize="24px" margin="0">
          {interactiveText}
        </Text>
        <div style={{ marginTop: '33px' }}>{interactiveComponent}</div>
      </div>
      {interactiveButtons}
    </Container>
  )
}

export default InteractiveModal
