// * Modules
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import ProgressBar from "../../ProgressBar/ProgressBar";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";
import NavLogo from "../../NavLogo/NavLogo";
import yupValidation from "../../YupValidations/YupValidations";
import Alert from '../../Alert/Alert'

// * Redux
import { useSelector, useDispatch } from "react-redux";

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  InputField,
} from './AgePart.styles'

function AgePart() {
  // * Asset setup
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
    
  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserAge } =
    registrationAuth.actions;

  const { progress } = useSelector(
    (state) => state.registrationReducer
  );

  // * useStates
  const [age, setAge] = useState('')
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    try {
      let ageNumber = parseInt(age)
      await yupValidation.ageSchema.validate({ageNumber})
      dispatch(setUserAge(age));
      dispatch(setActiveState('Programming'))
      dispatch(setProgress('48'))
    } catch (err) {
      setErrors(err.errors);
      setOpen(true);
    }
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
              <TopText>What is your age?</TopText>
            </div>
            <MiddleTextContainer>
              <InputField onChange={(e) => setAge(e.target.value)}/>
            </MiddleTextContainer>
            <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default AgePart;