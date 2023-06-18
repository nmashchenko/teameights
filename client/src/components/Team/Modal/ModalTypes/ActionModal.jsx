import React from 'react'

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
      <Text fontWeight="600" fontSize="24px" margin={`0 0 0 0`}>
        {firstText}
      </Text>
      <Text fontSize="16px" fontWeight="400" margin="8px 0 0 0">
        {secondText}
      </Text>
      <div>
        <Button onClick={firstButtonHandler} background="#46A11B">
          {firstButton}
        </Button>
        <Button border="2px solid #A5211F" marginTop="12px" onClick={secondButtonHandler}>
          {secondButton}
        </Button>
      </div>
    </Container>
  )
}

export default ActionModal
