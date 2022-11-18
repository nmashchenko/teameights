// * Modules
import React, { useEffect } from 'react'
import { registrationAuth } from '../../../../../store/reducers/RegistrationAuth'
import { useNavigate } from 'react-router-dom'
import { isEqual } from 'lodash'

// * Redux
import { useSelector, useDispatch } from 'react-redux'

// * Assets
import NavLogo from '../../NavLogo/NavLogo'

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
} from './InitialPart.styles'

import ROUTES from '../../../../../constants/routes'
import registerAuthApi from '../../../../../api/endpoints/registration-auth'

function InitialPart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setActiveState, setStep } = registrationAuth.actions
  const { userData, curRegistration } = useSelector((state) => state.registrationReducer)

  // check if local storage has token that was generated with registration
  useEffect(() => {
    if (localStorage.getItem('token')) {
      // get email of user
      dispatch(registerAuthApi.checkRegistration())
    } else {
      navigate(ROUTES.login, { replace: true })
    }
  }, [])

  // render component one more time after getting data from global state to make sure
  useEffect(() => {
    // if user is already registered -> navigate him to the login page
    if (curRegistration) {
      navigate(ROUTES.temporary, { replace: true })
    }
  }, [curRegistration, navigate])

  return (
    <>
      <NavLogo />
      <Container>
        <CardContainer>
          <div>
            <TopText>
              Welcome to the family, {userData.userUsername}
              ❤️
            </TopText>
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
              dispatch(setStep(1))
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
