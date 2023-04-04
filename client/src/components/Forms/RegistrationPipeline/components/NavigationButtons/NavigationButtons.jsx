import CustomButton from "../../../../../shared/components/CustomButton/CustomButton";
import ArrowNavigateBack from "../../../../../assets/Arrows/ArrowNavigateBack";
import ArrowNavigateFurther from "../../../../../assets/Arrows/ArrowNavigateFurther";
import {GREEN} from "../../../../../constants/colors";
import React from "react";
import {ButtonsContainer} from "./NavigationButtons.styles";
import {useDispatch} from "react-redux";
import {setStep} from "../../../../../store/reducers/RegistrationAuth";
import {useNavigate} from "react-router-dom";
import {useFormikContext} from "formik";
const NavigationButtons = ({step, steps, isOptionalStep, isLastStep}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isValid } = useFormikContext()
    const navigateBack = () => {
        if(step === 1){
            navigate('/')
        } else {
            dispatch(setStep(step - 1))
        }
    }

    console.log({step})
    const navigateFurther = () => {
        if(!isLastStep){
            dispatch(setStep(step + 1))
        }
    }
    return (
        <ButtonsContainer>
            <CustomButton onClick={navigateBack} icon={<ArrowNavigateBack />} iconPosition="left" border="2px solid #A5211F" background="transparent">{step === 1 ? "Cancel" : "Back"}</CustomButton>
            <CustomButton type={isLastStep ? 'submit' : 'button'} disabled={!isValid || !(isValid || isOptionalStep)} onClick={navigateFurther} icon={<ArrowNavigateFurther />} iconPosition="right" background={GREEN.button}>{step === steps.length ? "Finish" : "Next Step"}</CustomButton>
        </ButtonsContainer>
    );
};

export default NavigationButtons;
