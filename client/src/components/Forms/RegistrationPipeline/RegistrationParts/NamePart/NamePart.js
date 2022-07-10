// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";

import {
  CardContainer,
  Container,
  NavBar,
  TopText,
  MiddleTextContainer,
  ContinueButton,
  InputField,
  AlertBox,
} from "./NamePart.styles";

function NamePart() {
  // * Asset setup
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  yup.setLocale({
    string: {
      max: "Name should be less than 30 characters",
    },
  });

  const nameSchema = yup.object().shape({
    name: yup.string().required("Please input your name").max(30),
  });

  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserName } = registrationAuth.actions;
  const { progress, userData } = useSelector(
    (state) => state.registrationReducer
  );

  // * useStates
  const [open, setOpen] = useState(false);
  let [name, setName] = useState("");
  const [errors, setErrors] = useState([]);

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const isValid = await nameSchema.validate({ name });
      dispatch(setUserName(name));
      dispatch(setActiveState("CountryPart"));
      dispatch(setProgress("24"));
    } catch (err) {
      setErrors(err.errors);
      setOpen(true);
    }
  };

  useEffect(() => {}, [errors]);

  return (
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
            <TopText>What is your name?</TopText>
          </div>
          <MiddleTextContainer>
            <InputField onChange={(e) => setName(e.target.value)} />
          </MiddleTextContainer>
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  );
}

export default NamePart;
