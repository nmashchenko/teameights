import React, {useEffect} from 'react';
import NotFound from "../../../../../screens/UsersList/components/NotFound/NotFound";
import UserPersonalInfoForm from "../RegistrationForms/UserPersonalInfoForm/UserPersonalInfoForm";
import UserConcentrationForm from "../RegistrationForms/UserConcentrationForm/UserConcentrationForm";
import UserExperienceForm from "../RegistrationForms/UserExperienceForm/UserExperienceForm";
import UserEducationForm from "../RegistrationForms/UserEducationForm/UserEducationForm";
import UserLinksForm from "../RegistrationForms/UserLinksForm/UserLinksForm";
import {Navigate} from "react-router-dom";
import UserAvatarForm from "../RegistrationForms/UserAvatarForm/UserAvatarForm";
import finishRegistrationValidation from "../../../../../schemas";
import {useDispatch} from "react-redux";
import {setIsLastStep} from "../../../../../store/reducers/RegistrationAuth";
import {useFormikContext} from "formik";

const CurrentStep = ({step}) => {
    const dispatch = useDispatch()
    const {setTouched} = useFormikContext()
    useEffect(() => {
        dispatch(setIsLastStep(step === finishRegistrationValidation.length))
        setTouched({})
    }, [step])

    switch (step) {
        case 1:
            return <UserPersonalInfoForm />
        case 2:
            return <UserConcentrationForm />
        case 3:
            return (
                <UserExperienceForm />
            )
        case 4:
            return (
                <UserEducationForm />
            )
        case 5:
            return (
                <UserLinksForm />
            )
        case 6:
            return (
                <UserAvatarForm />
            )
        default:
            return <Navigate to="/not-found" />;
    }
};

export default CurrentStep;
