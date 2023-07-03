import React from 'react'

import FlexWrapper from '../../../../shared/ui/FlexWrapper/FlexWrapper'
import { B2fs, B2fw, H3fs, H3fw } from '../../../constants/fonts'
import { Button, Container, Text } from '../Modal.styles'

const InfoModal = ({ firstText, secondText, firstButton, firstButtonHandler }) => {
  return (
    <Container>
      <FlexWrapper width="100%" justify="center" align="center" direction="column" gap="8px">
        <Text fontSize={`${H3fs}`} fontWeight={`${H3fw}`} margin="0" textAlign="center">
          {firstText}
        </Text>
        <Text fontSize={`${B2fs}`} fontWeight={`${B2fw}`} margin="0" textAlign="center">
          {secondText}
        </Text>
      </FlexWrapper>
      <Button marginTop="0" width="100%" background="#46A11B" onClick={firstButtonHandler}>
        {firstButton}
      </Button>
    </Container>
  )
}

export default InfoModal
