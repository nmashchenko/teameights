// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import { Link, useNavigate } from 'react-router-dom'

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
import {options} from './Leader.options';
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";

// * Redux
import { useSelector, useDispatch } from "react-redux";

import {
  CardContainer,
  Container,
  NavBar,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  SelectField,
  InfoContainer,
  AlertBox
} from './LeaderPart.styles'

import authApi from "../../../../../api/endpoints/auth";
import ROUTES from "../../../../../constants/routes";

function LeaderPart() {
    // * Asset setup
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
    });
  
    const answerSchema = yup.object().shape({
      label: yup.string().required("You have to make a decision! 😁"),
      value: yup.string().required("You have to make a decision! 😁"),
    });

    const navigate = useNavigate();
  
    // * useStates
    const [open, setOpen] = useState(false);
    const [errors, setErrors] = useState([]);
    const [value, setValue] = useState("");
  
    // * Redux
    const dispatch = useDispatch();
    const { setUserLeader } =
      registrationAuth.actions;
  
    const { progress, userData } = useSelector(
      (state) => state.registrationReducer
    );
  
    // * Functions
    const handleSubmit = async () => {
      try {
        value
          ? await answerSchema.validate(value)
          : await answerSchema.validate({ value });
          value.value === 'true' ? dispatch(setUserLeader(true)) :  dispatch(setUserLeader(false))
          dispatch(authApi.finishRegistration(userData));
          navigate(ROUTES.temporary, { replace: true })
      } catch (err) {
        setErrors(err.errors);
        setOpen(true);
      }
    };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpen(false);
    };
  
    const changeHandler = (value) => {
      setValue(value);
    };
  
    useEffect(() => {}, [errors]);
  

  return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <NavBar>
            <SiteLogo />
          </NavBar>
        </AppBar>
      </Box>
      {errors.length > 0 && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            {errors[0]}
          </Alert>
        </Snackbar>
      )}
      <Container>
        <ProgressBar done={progress} />
          <CardContainer>
            <InfoContainer>
              <TopText>Do you want to be a leader of the team?</TopText>
              <TopText fontSize='14px' fontWeight='500' margin='20px 0 10px 0'>Please note that leaders will be marked with special emoji 👑 and will be required to control their teams.</TopText>
              <TopText fontSize='14px' fontWeight='700' margin='0 0 10px 0'>Team leaders typically have more than 1 year of experience.</TopText>
            </InfoContainer>
            <MiddleTextContainer>
              <SelectField
                options={options}
                value={value}
                onChange={changeHandler}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#E0FF00",
                    primary: "black",
                  },
                })}
              />
            </MiddleTextContainer>
            <ContinueButton onClick={handleSubmit}>Finish</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default LeaderPart;