import React from 'react';
import {useField} from "formik";
import Box from "@mui/material/Box";
import { Input} from "./CustomInput.styles";
import {ErrorMessage, Text} from "../../styles/Tpography.styles";


const CustomInput = ({ label, width="15rem", ...props }) => {
    const [field, meta] = useField(props);
    const isError = meta.touched && meta.error
    return (
        <Box>
            {label && <Text fontWeight="400">{label}</Text>}
            <Input {...field} {...props} width={width}  borderColor={isError &&  "#cf625e"} animation={!isError && "none"}/>
            {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
        </Box>
    )
};

export default CustomInput;
