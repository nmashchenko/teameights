import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'

import { useCheckAuth } from '../../../../../api/hooks/auth/useCheckAuth'
import { useEditUserDetails } from '../../../../../api/hooks/auth/useEditUserDetails'
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

  function onSuccess() {
    dispatch(setIsFinishRegistrationStarted(false))
    navigate('/', { replace: true })
  }

  const submitFrom = (userData) => {
    const registrationData = {
      email: userPrimaryRegistrationData.email,
      userUsername: userData.username,
      userRealName: userData.fullName,
      userPhoto: userData.file,
      userAge: userData.age,
      userDescription: userData.description,
      userConcentration: userData.concentration,
      userCountry: userData.country,
      userExperience: userData.experience,
      userLeader: userData.leader,
      userLinks: {
        github: userData.github,
        telegram: userData.telegram,
        linkedIn: userData.linkedIn,
      },
      userProgrammingLanguages: userData.programmingLanguages,
      userFrameworks: userData.frameworks,
      userRole: 'Standard',
      userUniversity: userData.university,
      userMajor: userData.major,
      userGraduationDate: userData.graduationDate,
      isRegistered: false,
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
