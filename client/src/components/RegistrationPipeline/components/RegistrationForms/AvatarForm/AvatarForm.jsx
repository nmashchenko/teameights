import React from 'react'

import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import AvatarSelection from './components/AvatarSelection/AvatarSelection'
import { AvatarFormText } from './AvatarForm.styles'

const AvatarForm = ({ text }) => {
  return (
    <ContentContainer gap="0" transformToFlex={true}>
      <AvatarFormText>{text}</AvatarFormText>
      <AvatarSelection />
    </ContentContainer>
  )
}

export default AvatarForm
