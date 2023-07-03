import React from 'react'

import { useCheckAuth } from '../../../../../shared/api/hooks/auth/useCheckAuth'
import Loader from '../../../../../shared/ui/Loader/Loader'
import { ContentContainer } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import TeamInfoForm from './TeamInfoForm/TeamInfoForm'
import UserInfoForm from './UserInfoForm/UserInfoForm'

const InfoForm = () => {
  const { data: user, isLoading: isUserLoading } = useCheckAuth()

  return (
    <>
      {isUserLoading && <Loader />}
      <ContentContainer>
        {user?.isRegistered ? <TeamInfoForm /> : <UserInfoForm />}
      </ContentContainer>
    </>
  )
}

export default InfoForm
