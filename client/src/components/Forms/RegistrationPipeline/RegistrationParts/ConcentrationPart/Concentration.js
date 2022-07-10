// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
import React, { useState, useMemo, useEffect } from "react";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import { options } from "./Concentration.options";
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
  AlertBox,
} from "./Concentration.styles";

function Concentration() {
  // * Asset setup
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  const concentrationSchema = yup.object().shape({
    label: yup.string().required("Please choose your concentration 🎓"),
    value: yup.string().required("Please choose your concentration 🎓"),
  });

  // * useStates
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState("");

  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserConcentration } =
    registrationAuth.actions;

  const { progress, userData } = useSelector(
    (state) => state.registrationReducer
  );

  // * Functions
  const handleSubmit = async () => {
    try {
      value
        ? await concentrationSchema.validate(value)
        : await concentrationSchema.validate({ value });
      dispatch(setUserConcentration(value.label));
      dispatch(setActiveState("Experience"));
      dispatch(setProgress("72"));
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
            <TopText>What is your concentration?</TopText>
          </div>
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
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  );
}

export default Concentration;
