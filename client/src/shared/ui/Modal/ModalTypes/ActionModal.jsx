import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

import FlexWrapper from '../../../../shared/ui/FlexWrapper/FlexWrapper'
import { Button, Container, Text } from '../Modal.styles'

const ActionModal = ({
  firstText,
  secondText,
  firstButton,
  firstButtonHandler,
  secondButton,
  secondButtonHandler,
  isLoading,
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
          {isLoading ? (
            <ThreeDots
              height="24"
              width="24"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            firstButton
          )}
        </Button>
        <Button border="2px solid #A5211F" marginTop="0" onClick={secondButtonHandler}>
          {secondButton}
        </Button>
      </FlexWrapper>
    </Container>
  )
}

export default ActionModal
