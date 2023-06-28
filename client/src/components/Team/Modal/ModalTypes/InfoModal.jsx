import React from 'react'

import { B2fs, B2fw, B2lh, H3fs, H3fw, H3lh } from '../../../../constants/fonts'
import FlexWrapper from '../../../../shared/components/FlexWrapper/FlexWrapper'
import { EditTeam, Text } from '../../TeamForm/TeamForm.styles'
import { Button, Container } from '../TeamModal.styles'

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
