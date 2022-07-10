// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { useState, useMemo, useEffect } from "react";
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
} from './AgePart.styles'

function AgePart() {
    // * Asset setup
    const Alert = React.forwardRef(function Alert(props, ref) {
      return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
    });
  
    const ageSchema = yup.object().shape({
      ageNumber: yup.number().required("Please input your age").typeError('Age must be a number').positive('Age must be greater than zero'),
    });

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

  const { progress, userData } = useSelector(
    (state) => state.registrationReducer
  );

  // * useStates
  const [age, setAge] = useState('')
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    try {
      let ageNumber = parseInt(age)
      await ageSchema.validate({ageNumber})
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