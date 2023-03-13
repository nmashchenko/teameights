import React from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'

import InitialPart from './components/InitialPart/InitialPart'
import MultiStepRegistration from './components/MultiStepRegistration/MultiStepRegistration'
import InfoForm from './components/RegistrationForms/InfoForm'
import UserConcentrationForm from './components/RegistrationForms/UserConcentrationForm/UserConcentrationForm'
import UserExperienceForm from './components/RegistrationForms/UserExperienceForm/UserExperienceForm'
import UserEducationForm from './components/RegistrationForms/UserEducationForm/UserEducationForm'
import UserLinksForm from './components/RegistrationForms/UserLinksForm/UserLinksForm'
import UserAvatarForm from './components/RegistrationForms/UserAvatarForm/UserAvatarForm'
import { finishRegistrationValidation } from '../../../schemas'
import { useEditUserDetails } from '../../../api/hooks/auth/useEditUserDetails'
import { setIsFinishRegistrationStarted } from '../../../store/reducers/RegistrationAuth'
import { useNavigate } from 'react-router-dom'
import { useUpdateAvatar } from '../../../api/hooks/auth/useUpdateAvatar'

function FinishRegistration() {
  const { isFinishRegistrationStarted } = useSelector((state) => state.registrationReducer)
  const { mutate: finishRegistration, isLoading: isFinishingRegistration } =
    useEditUserDetails(onSuccess)
  const { mutate: updateAvatar } = useUpdateAvatar('users')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const steps = [
    { index: 1, component: <InfoForm /> },
    { index: 2, component: <UserConcentrationForm /> },
    { index: 3, component: <UserExperienceForm /> },
    { index: 4, component: <UserEducationForm /> },
    { index: 5, component: <UserLinksForm /> },
    { index: 6, component: <UserAvatarForm /> },
  ]

  const initialValues = {
    fullName: '',
    country: '',
    username: '',
    age: '',
    description: '',
    programmingLanguages: [],
    frameworks: [],
    concentration: '',
    experience: '',
    leader: '',
    university: '',
    major: '',
    graduationDate: 0,
    github: '',
    linkedIn: '',
    telegram: '',
    file: null,
  }

  function onSuccess() {
    dispatch(setIsFinishRegistrationStarted(false))
    navigate('/', { replace: true })
  }

  const submitForm = (formData, userCurrentData) => {
    const registrationData = {
      email: userCurrentData.email,
      username: formData.username,
      fullName: formData.fullName,
      age: formData.age,
      description: formData.description,
      concentration: formData.concentration,
      country: formData.country,
      experience: formData.experience,
      isLeader: formData.leader === 'true',
      links: {
        github: formData.github,
        telegram: formData.telegram,
        linkedIn: formData.linkedIn,
      },
      programmingLanguages: formData.programmingLanguages,
      frameworks: formData.frameworks,
      university: formData.university,
      major: formData.major,
      graduationDate: formData.graduationDate.toString(),
      isRegistered: false,
    }

    if (formData.file) {
      updateAvatar({ email: userCurrentData.email, image: formData.file.split(',')[1] })
    }
    finishRegistration(registrationData)
  }
  return (
    <>
      {isFinishRegistrationStarted ? (
        <MultiStepRegistration
          validationSchema={finishRegistrationValidation}
          steps={steps}
          initialValues={initialValues}
          isFinishingRegistration={isFinishingRegistration}
          submitForm={submitForm}
        />
      ) : (
        <InitialPart />
      )}
    </>
  )
}

export default FinishRegistration
