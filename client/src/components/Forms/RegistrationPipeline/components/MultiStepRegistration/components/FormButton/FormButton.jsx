import React from 'react';
import {useSelector} from "react-redux";
import {Button} from "../../../../../../../shared/styles/Button.styles";

const FormButton = () => {
    const { isLastStep } = useSelector((state) => state.registrationReducer)

    return (
        <Button type="submit">{isLastStep ? "Finish" : "Next"}</Button>
    );
};

export default FormButton;
