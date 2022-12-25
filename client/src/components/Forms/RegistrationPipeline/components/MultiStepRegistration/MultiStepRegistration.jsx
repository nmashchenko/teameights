import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Form, Formik, useFormikContext} from "formik";
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
import {useNavigate} from "react-router-dom";

const MultiStepRegistration = () => {
    const { step, isLastStep } = useSelector((state) => state.registrationReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitFrom = () => {
        console.log('finish')
        // navigate('/', {replace: true})
    }

    const handleSubmit = (values, actions) => {
        if(isLastStep){
            submitFrom()
        } else {
            dispatch(setStep(step + 1))
            actions.setTouched({});

        }
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
