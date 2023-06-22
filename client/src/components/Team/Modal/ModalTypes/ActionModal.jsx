import React from 'react'

import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { Text } from '../../TeamForm/TeamForm.styles'
import { Button, Container } from '../TeamModal.styles'

const ActionModal = ({
  firstText,
  secondText,
  firstButton,
  firstButtonHandler,
  secondButton,
  secondButtonHandler,
}) => {
  return (
    <Container>
      <FlexWrapper width="100%" justify="center" align="center" direction="column">
        <Text fontWeight="600" fontSize="24px" margin="0" textAlign="center">
          {firstText}
        </Text>
        <Text fontSize="16px" fontWeight="400" margin="0" textAlign="center">
          {secondText}
        </Text>
      </FlexWrapper>
      <FlexWrapper width="100%" justify="center" align="center" direction="column" gap="8px">
        <Button onClick={firstButtonHandler} background="#46A11B" marginTop="0">
          {firstButton}
        </Button>
        <Button border="2px solid #A5211F" marginTop="0" onClick={secondButtonHandler}>
          {secondButton}
        </Button>
      </FlexWrapper>
    </Container>
  )
}

export default ActionModal
