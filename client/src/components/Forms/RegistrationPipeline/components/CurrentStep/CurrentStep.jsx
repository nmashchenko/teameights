import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormikContext } from 'formik'

import { setIsLastStep } from '../../../../../store/reducers/RegistrationAuth'
import UserAvatarForm from '../RegistrationForms/UserAvatarForm/UserAvatarForm'
import UserConcentrationForm from '../RegistrationForms/UserConcentrationForm/UserConcentrationForm'
import UserEducationForm from '../RegistrationForms/UserEducationForm/UserEducationForm'
import UserExperienceForm from '../RegistrationForms/UserExperienceForm/UserExperienceForm'
import UserLinksForm from '../RegistrationForms/UserLinksForm/UserLinksForm'
import UserPersonalInfoForm from '../RegistrationForms/UserPersonalInfoForm/UserPersonalInfoForm'
import {finishRegistrationValidation} from "../../../../../schemas";

const CurrentStep = ({ step }) => {
  const dispatch = useDispatch()
  const { setTouched } = useFormikContext()

  useEffect(() => {
    dispatch(setIsLastStep(step === finishRegistrationValidation.length))
    setTouched({})
  }, [step])

  switch (step) {
    case 1:
      return <UserPersonalInfoForm />
    case 2:
      return <UserConcentrationForm />
    case 3:
      return <UserExperienceForm />
    case 4:
      return <UserEducationForm />
    case 5:
      return <UserLinksForm />
    case 6:
      return <UserAvatarForm />
    default:
      return <Navigate to="/not-found" />
  }
}

export default CurrentStep
