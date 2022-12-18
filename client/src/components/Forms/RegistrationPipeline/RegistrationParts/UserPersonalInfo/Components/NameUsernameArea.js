// * Modules
import React from 'react'
import { includes } from 'lodash'

// * Styles
import { Input, Text } from '../UserPersonalInfo.styles'
import {useField} from "formik";
import Box from "@mui/material/Box";

const NameUsernameArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const isError = meta.touched && meta.error
    return (
      <Box>
        <Text fontSize="18px" fontWeight="400">
          {label}
        </Text>
        <Input {...field} {...props}  borderColor={isError && "#cf625e"} animate={!isError && "none"}/>
      </Box>
    )
}

export default NameUsernameArea