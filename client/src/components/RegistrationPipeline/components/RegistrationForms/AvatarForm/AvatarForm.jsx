import React from 'react'

import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import AvatarSelection from './components/AvatarSelection/AvatarSelection'
import { AvatarFormText } from './AvatarForm.styles'

const AvatarForm = ({ text, defaultAvatars }) => {
  return (
    <ContentContainer gap="0">
      <AvatarFormText>{text}</AvatarFormText>
      <AvatarSelection defaultAvatars={defaultAvatars} />
    </ContentContainer>
  )
}

export default AvatarForm
