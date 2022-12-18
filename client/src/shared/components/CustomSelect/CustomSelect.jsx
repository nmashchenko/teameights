import React from 'react';

import {SelectCustom, Line, MenuProps} from "./CustomSelect.styles";
import {useField} from "formik";
import {ErrorMessage, Text} from "../../styles/Tpography.styles";
import FormControl from "@mui/material/FormControl";

const CustomSelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    const isError = meta.touched && meta.error

    return (
        <FormControl sx={{ margin: '10px 0 0 0', width: '240px', padding: '0px' }}>
            <Text fontWeight="400">
                {label}
            </Text>
            <SelectCustom
                {...field}
                {...props}
                $isError={isError}
                MenuProps={MenuProps}
            />
            <Line background={isError && '#cf625e'} animation={!isError && 'none'}/>
            {isError && <ErrorMessage>{meta.error}</ErrorMessage>}
        </FormControl>
    );
};

export default CustomSelect;
