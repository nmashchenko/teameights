// * Modules
import React, { useState, useEffect } from "react";
import Chip from "./Chip";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import ProgressBar from "../../ProgressBar/ProgressBar";
import NavLogo from "../../NavLogo/NavLogo";
import yupValidation from "../../YupValidations/YupValidations";
import Alert from '../../Alert/Alert'
import {languageOptions} from './Programming.options'

// * Redux
import { useSelector, useDispatch } from "react-redux";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
} from "./Programming.styles";

function Programming() {
  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserProgrammingLanguages } =
    registrationAuth.actions;

  const { progress } = useSelector((state) => state.registrationReducer);

  // * useStates
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  // * Functions
  const handleSubmit = async () => {
    try {
      await yupValidation.programmingLanguagesSchema.validate({ programmingLanguages });
      dispatch(setUserProgrammingLanguages(programmingLanguages));
      dispatch(setActiveState("ConcentrationPart"));
      dispatch(setProgress("60"));
    } catch (err) {
      setErrors(err.errors);
      setOpen(true);
    }
  };

  const handleAddRemove = (value) => {
    if (!programmingLanguages.includes(value)) {
      setProgrammingLanguages((labels) => [...labels, value]);
    } else {
      let filteredArray = programmingLanguages.filter((item) => item !== value);
      setProgrammingLanguages(filteredArray);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {}, [errors]);

  return (
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
            <TopText>What are your favorite programming languages?</TopText>
          </div>
          <MiddleTextContainer>
            {languageOptions.map(language => {
              return (
                <Chip key={language.id} label={language.label} handleAddRemove={handleAddRemove} />
              )
            })}
          </MiddleTextContainer>
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  );
}

export default Programming;
