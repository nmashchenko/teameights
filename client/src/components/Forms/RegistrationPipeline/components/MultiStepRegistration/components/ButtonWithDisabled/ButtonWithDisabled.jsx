import React from 'react';
import WarningIcon from "@mui/icons-material/Warning";
import {Button, ButtonDisabled} from "./ButtonWithDisabled.styles";
import {useSelector} from "react-redux";
import {useFormikContext} from "formik";

const ButtonWithDisabled = ({errors, width}) => {
    const { isLastStep } = useSelector((state) => state.registrationReducer)

    const {touched} = useFormikContext()
    return (
        <>
            {Object.keys(errors).length && Object.keys(touched).length ? (
                <ButtonDisabled width={width}>
                    <WarningIcon />
                </ButtonDisabled>
            ) : (
                <Button width={width} type="submit">{isLastStep ? "Finish" : "Next"}</Button>
            )}
        </>
    );
};

export default ButtonWithDisabled;
