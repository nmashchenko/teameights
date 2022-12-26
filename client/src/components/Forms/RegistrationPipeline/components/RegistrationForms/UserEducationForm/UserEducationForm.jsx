import React from 'react';
import CustomInput from "../../../../../../shared/components/CustomInput/CustomInput";
import {useFormikContext} from "formik";
import {MiddleContainer} from "../../MultiStepRegistration/MultiStepRegistration.styles";
import ButtonWithSkip from "../../MultiStepRegistration/components/ButtonWithSkip/ButtonWithSkip";
import {ButtonsContainer} from "../../../../../../shared/styles/Button.styles";

const UserEducationForm = () => {
    const {errors} = useFormikContext()

    return (
        <>
            <MiddleContainer alignItems="baseline">
                <CustomInput
                    label="University/School"
                    name="university"
                    type="text"
                />
                <CustomInput
                    label="Major"
                    name="major"
                    type="text"
                />
                <CustomInput
                    label="Expected Graduation"
                    name="graduationDate"
                    type="number"
                    min="0"
                />
            </MiddleContainer>
            <ButtonsContainer  marginTop="0">
                <ButtonWithSkip resetFields={{university: '', major: '', graduationDate:  0}} errors={errors}/>
            </ButtonsContainer>
        </>
    );
};

export default UserEducationForm;
