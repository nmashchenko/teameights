import React, {useEffect} from 'react';
import SkipArrow from "../../../assets/Arrows/SkipArrow";
import ButtonWithDisabled from "../ButtonWithDisabled/ButtonWithDisabled";
import {useDispatch, useSelector} from "react-redux";
import {setIsOptionalStep, setStep} from "../../../store/reducers/RegistrationAuth";
import {Skip, SkipButton} from "./ButtonWithSkip.styles";
import {useFormikContext} from "formik";

const ButtonWithSkip = ({errors, resetFields}) => {
    const { step } = useSelector((state) => state.registrationReducer)
    const dispatch = useDispatch()
    const {values, setValues} = useFormikContext()

    const skipHandler = () => {
        dispatch(setStep(step + 1))
        setValues({...values, ...resetFields})
    }

    useEffect(() => {
        dispatch(setIsOptionalStep(true))

        return () => dispatch(setIsOptionalStep(false))
    }, [])
    return (
        <>
        <Skip>
            <SkipButton type="button" onClick={skipHandler}>
                Skip
            </SkipButton>
            <SkipArrow />
        </Skip>
        <ButtonWithDisabled width="6rem" errors={errors}/>
        </>
);
};

export default ButtonWithSkip;
