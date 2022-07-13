// * Modules
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import ProgressBar from "../../ProgressBar/ProgressBar";
import NavLogo from "../../NavLogo/NavLogo";
import yupValidation from "../../YupValidations/YupValidations";
import Alert from '../../Alert/Alert'


// * Redux
import { useSelector, useDispatch } from "react-redux";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  InputField,
} from './Experience.styles'

function Experience() {
  // * useStates
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [experience, setExperience] = useState("");

  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserExperience } = registrationAuth.actions;

  const { progress } = useSelector(
    (state) => state.registrationReducer
  );

    // * Functions
    const handleSubmit = async () => {
      try {
        let experienceNumber = parseInt(experience)
        await yupValidation.experienceSchema.validate({ experienceNumber });
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
      <NavLogo />
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
          <Alert onClose={handleClose} severity="error">
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