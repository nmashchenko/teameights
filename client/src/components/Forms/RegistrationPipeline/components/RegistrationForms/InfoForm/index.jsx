import React from 'react'
import { useDispatch } from 'react-redux'
import { useFormikContext } from 'formik'

import { ButtonsContainer } from '../../../../../../shared/styles/Button.styles'
import { setIsFinishedAvatarLoading } from '../../../../../../store/reducers/RegistrationAuth'
import FormButton from '../../MultiStepRegistration/components/FormButton/FormButton'
import { ResetButton } from '../../MultiStepRegistration/MultiStepRegistration.styles'

import { ContentWrapper } from './InfoForm.styles'
import UserInfoForm from "./UserInfoForm/UserInfoForm";
import {useCheckAuth} from "../../../../../../api/hooks/auth/useCheckAuth";
import TeamInfoForm from "./TeamInfoForm/TeamInfoForm";

const InfoForm = () => {
  const dispatch = useDispatch()
  const { errors, handleReset } = useFormikContext()
    const {data: user} = useCheckAuth()
  const reset = () => {
    handleReset()
    dispatch(setIsFinishedAvatarLoading(false))
  }

  return (
    <ContentWrapper>
        {user.isRegistered ?  <TeamInfoForm /> : <UserInfoForm />}
      <ButtonsContainer width="100%">
        <ResetButton type="button" onClick={reset}>
          Reset all
        </ResetButton>
        <FormButton errors={errors} />
      </ButtonsContainer>
    </ContentWrapper>
  )
}

export default InfoForm
