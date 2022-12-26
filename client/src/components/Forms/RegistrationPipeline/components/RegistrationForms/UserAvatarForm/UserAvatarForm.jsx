import React, {useEffect, useState} from 'react';
import {
    CardContainer,
    SelectContainer, Text, UploadArea, UserImageContainer,
} from "../../RegistrationParts/UserAvatar/UserAvatar.styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ConsoleSimulator from "../../RegistrationParts/UserAvatar/ConsoleSimulator/ConsoleSimulator";
import {useFormikContext} from "formik";

import {AvatarWrapper} from "./UserAvatarForm.styles";
import Avatar from "@mikhail2404/react-avatar-edit";
import {ErrorMessage} from "../../../../../../shared/styles/Tpography.styles";
import ButtonWithDisabled from "../../../../../../shared/components/ButtonWithDisabled/ButtonWithDisabled";
import ModalWindow from "../../RegistrationParts/UserAvatar/ModalWindow/ModalWindow";
import {useDispatch} from "react-redux";
import {setIsModalOpen} from "../../../../../../store/reducers/Shared";
import {setIsFinishedAvatarLoading} from "../../../../../../store/reducers/RegistrationAuth";
import {ThreeDots} from "react-loader-spinner";
import {Button, ButtonContainer} from "../../../../../../shared/styles/Button.styles";

const UserAvatarForm = () => {

    const [userAvatar, setUserAvatar] = useState(null)
    const {setFieldValue, errors} = useFormikContext()
    const [startedUploading, setStartedUploading] = useState(false)
    const [returnedToPreviousSteps, setReturnedToPreviousSteps] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setReturnedToPreviousSteps(true)
    }, [])

    const onCloseModal = () => {
        setUserAvatar(null)
        setStartedUploading(false)
    }

    const handleSaveClose = () => {
        setFieldValue('file', userAvatar)
        dispatch(setIsModalOpen(false))
    }

    const onCrop = (preview) => {
        setUserAvatar(preview)
    }

    const onBeforeFileLoad = () => {
        dispatch(setIsFinishedAvatarLoading(false))
        setStartedUploading(false)
        setReturnedToPreviousSteps(false)
    }

    const onFileLoad = () => {
        setFieldValue('file', null)
        setStartedUploading(true)
    }

    const uploadImage = () => {
        dispatch(setIsModalOpen(true))
    }

    const onCloseCropper = () => {
        setStartedUploading(false)
    }

    return (
        <>
            <ModalWindow onClose={onCloseModal}>
                <AvatarWrapper>
                    <Avatar
                        imageHeight={200}
                        height={200}
                        width={200}
                        onCrop={onCrop}
                        onFileLoad={onFileLoad}
                        onBeforeFileLoad={onBeforeFileLoad}
                        cropRadius={40}
                        onClose={onCloseCropper}
                        minCropRadius={40}
                        labelStyle={{
                            cursor: 'pointer',
                            color: '#5D9D0B',
                            fontWeight: 'bold',
                            fontSize: '20px',
                        }}
                    />
                    <Button marginBottom="0" onClick={handleSaveClose}>save</Button>
                </AvatarWrapper>
            </ModalWindow>
            <CardContainer>
                <SelectContainer>
                        <UserImageContainer>
                            <UploadArea onClick={uploadImage}>
                                <FileUploadIcon sx={{ fontSize: '60px', color: 'white' }} />
                                {errors.file ?  <ErrorMessage>{errors.file}</ErrorMessage> : <Text>UPLOAD</Text>}
                            </UploadArea>
                        </UserImageContainer>
                </SelectContainer>
                <ConsoleSimulator setStartedUploading={setStartedUploading}  startedUploading={startedUploading} returnedToPreviousSteps={returnedToPreviousSteps} />
            </CardContainer>
            <ButtonContainer>
                {startedUploading ?
                    <Button  disabled={true}>
                        <ThreeDots
                            height="40"
                            width="40"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{justifyContent: 'center'}}
                            visible={true}
                        />
                    </Button>
                    :
                    <ButtonWithDisabled errors={errors}/>
                }

            </ButtonContainer>
        </>
    );
};

export default UserAvatarForm;
