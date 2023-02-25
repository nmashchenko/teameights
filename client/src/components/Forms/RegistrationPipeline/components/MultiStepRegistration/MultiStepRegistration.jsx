import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import { useCheckAuth } from '../../../../../api/hooks/auth/useCheckAuth'
import { useEditUserDetails } from '../../../../../api/hooks/auth/useEditUserDetails'
import { useUpdateAvatar } from '../../../../../api/hooks/auth/useUpdateAvatar'
import { finishRegistrationValidation } from '../../../../../schemas'
import Loader from '../../../../../shared/components/Loader/Loader'
import {
  setIsFinishRegistrationStarted,
  setStep,
} from '../../../../../store/reducers/RegistrationAuth'
import CurrentStep from '../CurrentStep/CurrentStep'
import NavLogo from '../NavLogo/NavLogo'
import Stepper from '../Stepper/Stepper'

import { Container, ContentContainer, RegistrationContainer } from './MultiStepRegistration.styles'

const MultiStepRegistration = () => {
  const { step, isLastStep } = useSelector((state) => state.registrationReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data: userPrimaryRegistrationData } = useCheckAuth()
  const { mutate: finishRegistration, isLoading } = useEditUserDetails(onSuccess)
  const { mutate: updateAvatar } = useUpdateAvatar('users')

  function onSuccess() {
    dispatch(setIsFinishRegistrationStarted(false))
    navigate('/', { replace: true })
  }

  const submitFrom = (userData) => {
    const registrationData = {
      email: userPrimaryRegistrationData.email,
      username: userData.username,
      fullName: userData.fullName,
      age: userData.age,
      description: userData.description,
      concentration: userData.concentration,
      country: userData.country,
      experience: userData.experience,
      isLeader: userData.leader === 'true',
      links: {
        github: userData.github,
        telegram: userData.telegram,
        linkedIn: userData.linkedIn,
      },
      programmingLanguages: userData.programmingLanguages,
      frameworks: userData.frameworks,
      university: userData.university,
      major: userData.major,
      graduationDate: userData.graduationDate.toString(),
      isRegistered: false,
    }

    if (userData.file) {
      updateAvatar({ email: userPrimaryRegistrationData.email, image: userData.file.split(',')[1] })
    }
    finishRegistration(registrationData)
  }
  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitFrom(values)
    } else {
      dispatch(setStep(step + 1))
      actions.setTouched({})
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Formik
      initialValues={{
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
      }}
      validationSchema={finishRegistrationValidation[step - 1]}
      onSubmit={handleSubmit}
    >
      {() => {
        return (
          <Form>
            <Container>
              <Stepper step={step} />
              <RegistrationContainer>
                <NavLogo sectionName={'User Profile'} />
                <ContentContainer>
                  <CurrentStep step={step} />
                </ContentContainer>
              </RegistrationContainer>
            </Container>
          </Form>
        )
      }}
    </Formik>
  )
}

export default MultiStepRegistration
