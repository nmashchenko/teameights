// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
import React, { useState, useMemo, useEffect } from "react";
import countryList from "react-select-country-list";
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
} from "./CountryPart.styles";

function CountryPart() {
  // * Asset setup
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  const countrySchema = yup.object().shape({
    label: yup.string().required("Please choose your country!"),
    value: yup.string().required("Please choose your country!"),
  });

  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserCountry } =
    registrationAuth.actions;
  const { progress, userData } = useSelector(
    (state) => state.registrationReducer
  );

  // * useStates
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  // * Functions
  const changeHandler = (value) => {
    setValue(value);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      value
        ? await countrySchema.validate(value)
        : await countrySchema.validate({ value });
      dispatch(setUserCountry(value.label));
      dispatch(setActiveState("AgePart"));
      dispatch(setProgress("36"));
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
            <TopText>Where are you from?</TopText>
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

export default CountryPart;
