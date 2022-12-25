import React from 'react';
import WarningIcon from "@mui/icons-material/Warning";
import {Button, ButtonDisabled} from "./ButtonWithDisabled.styles";
import {useSelector} from "react-redux";

const ButtonWithDisabled = ({errors, width}) => {
    const { isLastStep } = useSelector((state) => state.registrationReducer)
    return (
        <>
            {Object.keys(errors).length ? (
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
