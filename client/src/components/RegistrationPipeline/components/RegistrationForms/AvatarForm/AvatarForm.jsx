import React from 'react'

import ChooseAvatar from '../../../../../shared/components/ChooseAvatar/ChooseAvatar'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import AvatarSelection from './components/AvatarSelection/AvatarSelection'
import { AvatarFormText } from './AvatarForm.styles'

const AvatarForm = ({ text, type }) => {
  return (
    <ContentContainer gap="0" transformToFlex={true}>
      <AvatarFormText>{text}</AvatarFormText>
      <AvatarSelection type={type} />
    </ContentContainer>
  )
}

export default AvatarForm
