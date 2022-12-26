import React, {useEffect} from 'react';
import {MiddleContainer} from "../../MultiStepRegistration/MultiStepRegistration.styles";
import CustomInput from "../../../../../../shared/components/CustomInput/CustomInput";
import {InputWithIConWrapper} from "../../../../../../shared/components/CustomInput/CustomInput.styles";
import LinkedInIcon from "../../../../../../assets/Links/LinkedInIcon";
import TelegramIcon from "../../../../../../assets/Links/TelegramIcon";
import GitHubIcon from "../../../../../../assets/Links/GitHubIcon";
import ButtonWithSkip from "../../MultiStepRegistration/components/ButtonWithSkip/ButtonWithSkip";
import {useFormikContext} from "formik";
import {ButtonsContainer} from "../../../../../../shared/styles/Button.styles";

const UserLinksForm = () => {
    const {errors, setErrors} = useFormikContext()

    useEffect(() => setErrors({}))
    return (
        <>
            <MiddleContainer>
                <InputWithIConWrapper>
                    <GitHubIcon />
                    <CustomInput
                        name="github"
                        type="text"
                        placeholder="Provide your link (optional)"
                    />
                </InputWithIConWrapper>
                <InputWithIConWrapper>
                    <LinkedInIcon />
                    <CustomInput
                        name="linkedIn"
                        type="text"
                        placeholder="Provide your link (optional)"
                    />
                </InputWithIConWrapper>
                <InputWithIConWrapper>
                    <TelegramIcon />
                    <CustomInput
                        name="telegram"
                        type="text"
                        placeholder="Provide your link (optional)"
                    />
                </InputWithIConWrapper>
            </MiddleContainer>
            <ButtonsContainer justifyContent="space-evenly" marginTop="0">
                <ButtonWithSkip resetFields={{github: '', linkedIn: '', telegram:  ''}} errors={errors}/>
            </ButtonsContainer>
        </>
    );
};

export default UserLinksForm;
