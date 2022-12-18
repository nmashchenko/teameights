import React from 'react';
import {useField} from "formik";
import Box from "@mui/material/Box";
import { Input} from "./CustomInput.styles";
import {ErrorMessage, Text} from "../../styles/Tpography.styles";

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const isError = meta.touched && meta.error
    return (
        <Box>
            <Text  fontWeight="400">
                {label}
            </Text>
            <Input {...field} {...props}  borderColor={isError &&  "#cf625e"} animation={!isError && "none"}/>
            {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
        </Box>
    )
};

export default CustomInput;
