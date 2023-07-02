import React from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useUpdateAvatar } from '../../api/hooks/shared/useUpdateAvatar'
import { useEditUserDetails } from '../../api/hooks/user/useEditUserDetails'
import { finishRegistrationValidation } from '../../schemas'
import Links from '../../shared/components/Links/Links'
import { setIsFinishRegistrationStarted, setStep } from '../../store/reducers/RegistrationAuth'
import { formatDateString } from '../../utils/convertStringToDate'
import { convertYearToDate } from '../../utils/convertYearToDate'
import { removeEmptyFields } from '../../utils/removeEmptyFields'

import InitialPart from './components/InitialPart/InitialPart'
import MultiStepRegistration from './components/MultiStepRegistration/MultiStepRegistration'
import AvatarForm from './components/RegistrationForms/AvatarForm/AvatarForm'
import InfoForm from './components/RegistrationForms/InfoForm'
import UserConcentrationForm from './components/RegistrationForms/UserConcentrationForm/UserConcentrationForm'
import UserEducationForm from './components/RegistrationForms/UserEducationForm/UserEducationForm'
import UserExperienceForm from './components/RegistrationForms/UserExperienceForm/UserExperienceForm'
import UserJobForm from './components/RegistrationForms/UserJobForm/UserJobForm'

function FinishRegistration() {
  const { isFinishRegistrationStarted } = useSelector((state) => state.registrationReducer)
  const {
    mutate: finishRegistration,
    isLoading: isFinishingRegistration,
    isError,
    error,
  } = useEditUserDetails(onSuccess)
  const { mutate: updateAvatar } = useUpdateAvatar('users')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(error)
  console.log(isFinishingRegistration)

  const steps = [
    { component: <InfoForm />, name: 'User Profile', isOptional: false },
    { component: <UserConcentrationForm />, name: 'Concentration', isOptional: false },
    { component: <UserExperienceForm />, name: 'Experience', isOptional: false },
    { component: <UserEducationForm />, name: 'Education', isOptional: true },
    { component: <UserJobForm />, name: 'Work Experience', isOptional: true },
    { component: <Links />, name: 'Links', isOptional: true },
    {
      component: (
        <AvatarForm text="You can upload an image to personalize your profile or select one of our default options. The avatar can be changed at any time." />
      ),
      name: 'Avatar',
      isOptional: true,
    },
  ]

  const initialValues = {
    fullName: '',
    country: '',
    username: '',
    dateOfBirth: '',
    description: '',
    programmingLanguages: [],
    frameworks: [],
    concentration: '',
    experience: '',
    leader: '',
    jobData: [
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
      },
    ],
    universityData: [
      {
        university: '',
        degree: ``,
        major: '',
        addmissionDate: '',
        graduationDate: '',
      },
    ],
    github: '',
    linkedIn: '',
    telegram: '',
    behance: '',
    file: null,
  }

  function onSuccess() {
    dispatch(setIsFinishRegistrationStarted(false))
    dispatch(setStep(1))
    navigate('/', { replace: true })
  }

  const submitForm = (formData, userCurrentData) => {
    const jobAfterRemovedEmptyFields = removeEmptyFields(formData.jobData[0])

    if (jobAfterRemovedEmptyFields) {
      let jobDates = convertYearToDate(formData.jobData[0].startDate, formData.jobData[0].endDate)

      formData.jobData[0].startDate = jobDates.dateOne
      formData.jobData[0].endDate = jobDates.dateTwo
    } else {
      formData.jobData = undefined
    }

    const universityAfterRemovedEmptyFields = removeEmptyFields(formData.universityData[0])

    if (universityAfterRemovedEmptyFields) {
      let universityDates = convertYearToDate(
        formData.universityData[0].addmissionDate,
        formData.universityData[0].graduationDate,
      )

      formData.universityData[0].addmissionDate = universityDates.dateOne
      formData.universityData[0].graduationDate = universityDates.dateTwo
    } else {
      formData.universityData = undefined
    }

    formData.links = {
      github: formData.github,
      telegram: formData.telegram,
      linkedIn: formData.linkedIn,
      behance: formData.behance,
    }

    formData.dateOfBirth = formatDateString(formData.dateOfBirth)
    formData.isRegistered = false
    formData.email = userCurrentData.email

    if (formData.file) {
      updateAvatar({ email: userCurrentData.email, image: formData.file.split(',')[1] })
    }

    finishRegistration(formData)
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
