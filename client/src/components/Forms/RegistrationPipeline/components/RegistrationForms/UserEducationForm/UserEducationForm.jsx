import React from 'react';
import CustomInput from "../../../../../../shared/components/CustomInput/CustomInput";
import {useFormikContext} from "formik";
import {ButtonsContainer, MiddleContainer} from "../../MultiStepRegistration/MultiStepRegistration.styles";
import ButtonWithSkip from "../../../../../../shared/components/ButtonWithSkip/ButtonWithSkip";

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
            <ButtonsContainer justifyContent="space-evenly" marginTop="0">
                <ButtonWithSkip resetFields={{university: '', major: '', graduationDate:  0}} errors={errors}/>
            </ButtonsContainer>
        </>
    );
};

export default UserEducationForm;
