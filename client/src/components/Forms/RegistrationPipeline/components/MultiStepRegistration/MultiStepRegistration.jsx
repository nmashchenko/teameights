import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form, Formik} from "formik";
import {setStep} from "../../../../../store/reducers/RegistrationAuth";
import CurrentStep from "../CurrentStep/CurrentStep";
import Stepper from "../Stepper/Stepper";
import NavLogo from "../NavLogo/NavLogo";
import {
    Container,
    RegistrationContainer,
    ContentContainer,
} from "./MultiStepRegistration.styles";
import finishRegistrationValidation from "../../../../../schemas";
import {useFinishRegistration} from "../../../../../api/hooks/useFinishRegistration";
import Loader from "../../../../Loader/Loader";
import {useCheckAuth} from "../../../../../api/hooks/useCheckAuth";

const MultiStepRegistration = () => {
    const { step, isLastStep } = useSelector((state) => state.registrationReducer)
    const dispatch = useDispatch()
    const {data: userPrimaryRegistrationData} = useCheckAuth()
    const {mutate: finishRegistration, isLoading} =  useFinishRegistration()
    const submitFrom = (userData) => {
        const registrationData = {
            email: userPrimaryRegistrationData.data.email,
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
                linkedIn: userData.linkedIn
            },
            userProgrammingLanguages: userData.programmingLanguages,
            userFrameworks: userData.frameworks,
            userRole: "Standard",
            userUniversity: userData.university,
            userMajor: userData.major,
            userGraduationDate: userData.graduationDate,
            isRegistered: false
        }
        finishRegistration(registrationData)
    }
    const handleSubmit = (values, actions) => {
        if(isLastStep){
            submitFrom(values)
        } else {
            dispatch(setStep(step + 1))
            actions.setTouched({});
        }
    }

    if(isLoading){
        return <Loader />
    }

    return (
        <Formik
            initialValues={{
                "fullName": "",
                "country": "",
                "username": "",
                "age": "",
                "description": "",
                "programmingLanguages": [],
                "frameworks": [],
                "concentration": "",
                "experience": "",
                "leader": "",
                "university": "",
                "major": "",
                "graduationDate": 0,
                "github": "",
                "linkedIn": "",
                "telegram": "",
                "file": null
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
                                    <CurrentStep step={step}/>
                                </ContentContainer>
                            </RegistrationContainer>
                        </Container>
                    </Form>
                )}
            }
        </Formik>
        )
};

export default MultiStepRegistration;
