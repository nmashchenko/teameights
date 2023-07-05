// * Modules
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  setActiveState,
  setIsFinishRegistrationStarted,
} from 'app/providers/store/reducers/RegistrationAuth'

// * Redux
import { useCheckAuth } from '../../../../shared/api/hooks/auth/useCheckAuth'
import Loader from '../../../../shared/ui/Loader/Loader'

// * Assets
import {
  CardContainer,
  Container,
  ContinueButton,
  MiddleTextContainer,
  TopText,
} from './InitialPart.styles'
import { ParticlesContainer } from './ParticlesContainer'

function InitialPart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
          <MiddleTextContainer>
            <TopText margin="0 0 8px 0">Welcome to our family ❤️</TopText>
            <TopText fontWeight="400" fontSize="17px">
              Please fill out the registration form so we can learn more about your skills and what
              you're looking for here. It'll only take about 5 minutes.
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
      <ParticlesContainer />
    </>
  )
}

export default InitialPart
