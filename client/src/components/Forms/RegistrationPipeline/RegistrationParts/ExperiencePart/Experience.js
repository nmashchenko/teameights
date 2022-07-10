// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
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
  InputField,
  AlertBox,
} from './Experience.styles'

function Experience() {
  // * Asset setup
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  const experienceSchema = yup.object().shape({
    experienceNumber: yup.number().required("Please input your experience").typeError('Experience must be a number').positive('Experience must be greater than zero'),
  });

  // * useStates
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [experience, setExperience] = useState("");

  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserExperience } =
    registrationAuth.actions;

  const { progress, userData } = useSelector(
    (state) => state.registrationReducer
  );

    // * Functions
    const handleSubmit = async () => {
      try {
        let experienceNumber = parseInt(experience)
        await experienceSchema.validate({ experienceNumber });
        dispatch(setUserExperience(experience));
        dispatch(setActiveState('Links'))
        dispatch(setProgress('84'))
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
            <div>
              <TopText>How many years of experience do you have?</TopText>
            </div>
            <MiddleTextContainer>
              <InputField onChange={(e) => setExperience(e.target.value)}/>
            </MiddleTextContainer>
            <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default Experience;