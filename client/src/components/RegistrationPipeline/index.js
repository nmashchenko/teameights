import React from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useEditUserDetails } from '../../api/hooks/auth/useEditUserDetails'
import { useUpdateAvatar } from '../../api/hooks/auth/useUpdateAvatar'
import { defaultUserAvatars } from '../../constants/finishRegistrationData'
import { finishRegistrationValidation } from '../../schemas'
import { setIsFinishRegistrationStarted } from '../../store/reducers/RegistrationAuth'

import InitialPart from './components/InitialPart/InitialPart'
import MultiStepRegistration from './components/MultiStepRegistration/MultiStepRegistration'
import AvatarForm from './components/RegistrationForms/AvatarForm/AvatarForm'
import InfoForm from './components/RegistrationForms/InfoForm'
import UserConcentrationForm from './components/RegistrationForms/UserConcentrationForm/UserConcentrationForm'
import UserEducationForm from './components/RegistrationForms/UserEducationForm/UserEducationForm'
import UserExperienceForm from './components/RegistrationForms/UserExperienceForm/UserExperienceForm'
import UserLinksForm from './components/RegistrationForms/UserLinksForm/UserLinksForm'

function FinishRegistration() {
  const { isFinishRegistrationStarted } = useSelector((state) => state.registrationReducer)
  const { mutate: finishRegistration, isLoading: isFinishingRegistration } =
    useEditUserDetails(onSuccess)
  const { mutate: updateAvatar } = useUpdateAvatar('users')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const steps = [
    { component: <InfoForm />, name: 'User Profile', isOptional: false },
    { component: <UserConcentrationForm />, name: 'Concentration', isOptional: false },
    { component: <UserExperienceForm />, name: 'Experience', isOptional: false },
    { component: <UserEducationForm />, name: 'Education', isOptional: true },
    { component: <UserLinksForm />, name: 'Links', isOptional: true },
    {
      component: (
        <AvatarForm
          text="You can upload an image to personalize your profile or select one of our default options. The avatar can be changed at any time."
          defaultAvatars={defaultUserAvatars}
        />
      ),
      name: 'Avatar',
      isOptional: true,
    },
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
    graduationDate: '',
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
