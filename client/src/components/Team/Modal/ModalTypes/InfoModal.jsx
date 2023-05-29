import React from 'react'

import { B2fs, B2fw, B2lh, H3fs, H3fw, H3lh } from '../../../../constants/fonts'
import { EditTeam, Text } from '../../TeamForm/TeamForm.styles'
import { Container } from '../TeamModal.styles'

const InfoModal = ({ firstText, secondText, firstButton, firstButtonHandler }) => {
  return (
    <Container>
      <Text fontSize={`${H3fs}`} lineHeight={`${H3lh}`} fontWeight={`${H3fw}`} margin={`0 0 0 0`}>
        {firstText}
      </Text>
      <Text fontSize={`${B2fs}`} lineHeight={`${B2lh}`} fontWeight={`${B2fw}`} margin="12px 0 0 0">
        {secondText}
      </Text>
      <EditTeam marginTop="24px" width="100%" onClick={firstButtonHandler}>
        {firstButton}
      </EditTeam>
    </Container>
  )
}

export default InfoModal
