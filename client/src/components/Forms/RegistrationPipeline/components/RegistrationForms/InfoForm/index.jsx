import React from 'react'
import { useCheckAuth } from '../../../../../../api/hooks/auth/useCheckAuth'

import TeamInfoForm from './TeamInfoForm/TeamInfoForm'
import UserInfoForm from './UserInfoForm/UserInfoForm'
import {ContentContainer} from "../../MultiStepRegistration/MultiStepRegistration.styles";

const InfoForm = () => {

  const { data: user } = useCheckAuth()


  return (
    <ContentContainer>
      {user.isRegistered ? <TeamInfoForm /> : <UserInfoForm />}
    </ContentContainer>
  )
}

export default InfoForm
