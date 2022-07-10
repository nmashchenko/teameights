// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from "./Chip";
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
  AlertBox,
} from "./Programming.styles";

function Programming() {
  // * Asset setup
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  const programmingLanguagesSchema = yup.object().shape({
    programmingLanguages: yup.array().min(1, "Select at least one language 👅"),
  });

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
      await programmingLanguagesSchema.validate({ programmingLanguages });
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
            <TopText>What are your favorite programming languages?</TopText>
          </div>
          <MiddleTextContainer>
            <Chip label={"JS"} handleAddRemove={handleAddRemove} />
            <Chip label={"C++"} handleAddRemove={handleAddRemove} />
            <Chip label={"C"} handleAddRemove={handleAddRemove} />
            <Chip label={"Python"} handleAddRemove={handleAddRemove} />
            <Chip label={"Swift"} handleAddRemove={handleAddRemove} />
            <Chip label={"Ruby"} handleAddRemove={handleAddRemove} />
            <Chip label={"Scala"} handleAddRemove={handleAddRemove} />
            <Chip label={"PHP"} handleAddRemove={handleAddRemove} />
            <Chip label={"Go"} handleAddRemove={handleAddRemove} />
            <Chip label={"C#"} handleAddRemove={handleAddRemove} />
            <Chip label={"Java"} handleAddRemove={handleAddRemove} />
            <Chip label={"HTML/CSS"} handleAddRemove={handleAddRemove} />
            <Chip label={"Dart"} handleAddRemove={handleAddRemove} />
            <Chip label={"Perl"} handleAddRemove={handleAddRemove} />
            <Chip label={"SQL"} handleAddRemove={handleAddRemove} />
          </MiddleTextContainer>
          <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  );
}

export default Programming;
