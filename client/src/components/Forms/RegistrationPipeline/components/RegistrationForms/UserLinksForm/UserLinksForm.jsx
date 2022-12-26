import React from 'react';
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
    const {errors} = useFormikContext()

    return (
        <>
            <MiddleContainer>
                <InputWithIConWrapper>
                    <GitHubIcon />
                    <CustomInput
                        name="github"
                        width="17rem"
                        type="text"
                        placeholder="Provide your link (optional)"
                    />
                </InputWithIConWrapper>
                <InputWithIConWrapper>
                    <LinkedInIcon />
                    <CustomInput
                        name="linkedIn"
                        width="17rem"
                        type="text"
                        placeholder="Provide your link (optional)"
                    />
                </InputWithIConWrapper>
                <InputWithIConWrapper>
                    <TelegramIcon />
                    <CustomInput
                        name="telegram"
                        width="17rem"
                        type="text"
                        placeholder="Provide your link (optional)"
                    />
                </InputWithIConWrapper>
            </MiddleContainer>
            <ButtonsContainer  marginTop="0">
                <ButtonWithSkip resetFields={{github: '', linkedIn: '', telegram:  ''}} errors={errors}/>
            </ButtonsContainer>
        </>
    );
};

export default UserLinksForm;
