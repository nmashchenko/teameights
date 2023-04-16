import React from 'react'

import AvatarSelection from "./components/AvatarSelection/AvatarSelection";
import {ContentContainer} from "../../MultiStepRegistration/MultiStepRegistration.styles";
import {AvatarFormText} from "./AvatarForm.styles";

const AvatarForm = ({text, defaultAvatars}) => {


  return (
    <ContentContainer gap="0">
      <AvatarFormText>{text}</AvatarFormText>
      <AvatarSelection defaultAvatars={defaultAvatars}/>
    </ContentContainer>
  )
}

export default AvatarForm
