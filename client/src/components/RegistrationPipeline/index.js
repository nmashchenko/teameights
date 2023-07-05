import React from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cloneDeep } from 'lodash'

import {
  setIsFinishRegistrationStarted,
  setStep,
} from '../../app/providers/store/reducers/RegistrationAuth'
import { useUpdateAvatar } from '../../shared/api/hooks/shared/useUpdateAvatar'
import { useEditUserDetails } from '../../shared/api/hooks/user/useEditUserDetails'
import { finishRegistrationValidation } from '../../shared/config/yup'
import { formatDateString } from '../../shared/lib/utils/convertStringToDate'
import { convertYearToDate } from '../../shared/lib/utils/convertYearToDate'
import { removeEmptyFields } from '../../shared/lib/utils/removeEmptyFields'
import Links from '../../shared/ui/Links/Links'

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
    const initialObject = cloneDeep(formData)

    const jobAfterRemovedEmptyFields = removeEmptyFields(initialObject.jobData[0])

    if (jobAfterRemovedEmptyFields) {
      let jobDates = convertYearToDate(
        initialObject.jobData[0].startDate,
        initialObject.jobData[0].endDate,
      )

      initialObject.jobData[0].startDate = jobDates.dateOne
      initialObject.jobData[0].endDate = jobDates.dateTwo
    } else {
      initialObject.jobData = undefined
    }

    const universityAfterRemovedEmptyFields = removeEmptyFields(initialObject.universityData[0])

    if (universityAfterRemovedEmptyFields) {
      let universityDates = convertYearToDate(
        initialObject.universityData[0].addmissionDate,
        initialObject.universityData[0].graduationDate,
      )

      initialObject.universityData[0].addmissionDate = universityDates.dateOne
      initialObject.universityData[0].graduationDate = universityDates.dateTwo
    } else {
      initialObject.universityData = undefined
    }

    initialObject.links = {
      github: initialObject.github,
      telegram: initialObject.telegram,
      linkedIn: initialObject.linkedIn,
      behance: initialObject.behance,
    }

    initialObject.dateOfBirth = formatDateString(initialObject.dateOfBirth)
    initialObject.isRegistered = false
    initialObject.email = userCurrentData.email

    try {
      if (initialObject.file) {
        updateAvatar({ email: userCurrentData.email, image: initialObject.file.split(',')[1] })
      }

      finishRegistration(initialObject)
    } catch (e) {
      /* empty */
    }
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
