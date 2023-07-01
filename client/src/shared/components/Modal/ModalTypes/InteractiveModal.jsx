import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { Container, Text } from '../Modal.styles'

const InteractiveModal = ({ interactiveText, interactiveComponent, interactiveButtons }) => {
  return (
    <Container justify="space-between">
      <FlexWrapper direction="column" justify="center" align="center" gap="24px" width="100%">
        <Text fontSize="24px" margin="0">
          {interactiveText}
        </Text>
        <FlexWrapper width="100%" justify="center" align="center">
          {interactiveComponent}
        </FlexWrapper>
      </FlexWrapper>
      {interactiveButtons}
    </Container>
  )
}

export default InteractiveModal
