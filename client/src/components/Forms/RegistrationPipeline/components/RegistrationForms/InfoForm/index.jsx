import React from 'react'
import { useCheckAuth } from '../../../../../../api/hooks/auth/useCheckAuth'

import TeamInfoForm from './TeamInfoForm/TeamInfoForm'
import UserInfoForm from './UserInfoForm/UserInfoForm'
import { ContentWrapper } from './InfoForm.styles'

const InfoForm = () => {

  const { data: user } = useCheckAuth()


  return (
    <ContentWrapper>
      {user.isRegistered ? <TeamInfoForm /> : <UserInfoForm />}
    </ContentWrapper>
  )
}

export default InfoForm
