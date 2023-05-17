// * Modules
import React, { useEffect } from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useCheckAuth } from '../../../../api/hooks/auth/useCheckAuth'
import Loader from '../../../../shared/components/Loader/Loader'
import {
  registrationAuth,
  setIsFinishRegistrationStarted,
} from '../../../../store/reducers/RegistrationAuth'

// * Assets
import {
  CardContainer,
  Container,
  ContinueButton,
  MiddleTextContainer,
  TopText,
} from './InitialPart.styles'

function InitialPart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setActiveState } = registrationAuth.actions
  const { curRegistration } = useSelector((state) => state.registrationReducer)
  const { data: user, isFetching } = useCheckAuth()

  // render component one more time after getting data from global state to make sure
  useEffect(() => {
    // if user is already registered -> navigate him to the login page
    if (curRegistration) {
      navigate('/', { replace: true })
    }
  }, [curRegistration, navigate])

  if (isFetching) {
    return <Loader />
  }

  return (
    <>
      <Container>
        <CardContainer>
          <div>
            <TopText>Welcome to the family ❤️</TopText>
          </div>
          <MiddleTextContainer>
            <TopText fontWeight="400" fontSize="17px" margin="45px 0 0 0">
              Please, fill the form to complete the registration.
            </TopText>
            <TopText fontWeight="400" fontSize="17px" margin="33px 0 0 0">
              It will take approximately 5 minutes but will help us better understand your skills
              and what are you looking for here.
            </TopText>
          </MiddleTextContainer>
          <ContinueButton
            // change the global states
            onClick={() => {
              dispatch(setActiveState('UserPersonalInfo'))
              dispatch(setIsFinishRegistrationStarted(true))
            }}
          >
            Continue
          </ContinueButton>
        </CardContainer>
      </Container>
    </>
  )
}

export default InitialPart
