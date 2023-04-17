import React from 'react'

import { useCheckAuth } from '../../../../../../api/hooks/auth/useCheckAuth'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import TeamInfoForm from './TeamInfoForm/TeamInfoForm'
import UserInfoForm from './UserInfoForm/UserInfoForm'

const InfoForm = () => {
  const { data: user } = useCheckAuth()

  return (
    <ContentContainer>{user.isRegistered ? <TeamInfoForm /> : <UserInfoForm />}</ContentContainer>
  )
}

export default InfoForm
