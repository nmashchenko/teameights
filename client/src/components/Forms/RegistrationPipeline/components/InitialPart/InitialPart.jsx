// * Modules
import React, { useEffect } from 'react'
// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// * Assets

import {
    CardContainer,
    Container,
    ContinueButton,
    MiddleTextContainer,
    TopText,
} from './InitialPart.styles'
import {registrationAuth, setIsFinishRegistrationStarted} from "../../../../../store/reducers/RegistrationAuth";
import {useCheckAuth} from "../../../../../api/hooks/useCheckAuth";
import Loader from "../../../../../shared/components/Loader/Loader";
import NavLogo from "../NavLogo/NavLogo";

function InitialPart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { setActiveState, setStep } = registrationAuth.actions
    const { curRegistration } = useSelector((state) => state.registrationReducer)
    const { data: userData, isFetching } = useCheckAuth()
    const user = userData?.data

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
            <NavLogo />
            <Container>
                <CardContainer>
                    <div>
                        <TopText>
                            Welcome to the family, {user.userUsername}
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
