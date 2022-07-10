// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
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
} from './Links.styles'

function Links() {
  // * Asset setup
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  yup.setLocale({
    string: {
      max: "Name should be less than 30 characters",
    },
  });

  const regMatch = /^((http|https):\/\/)?(www.)?(?!.*(http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+(\/)?.([\w\?[a-zA-Z-_%\/@?]+)*([^\/\w\?[a-zA-Z0-9_-]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/;
  const urlsSchema = yup.object().shape({
    github: yup.string().matches(regMatch, {message:"Github link should be a valid URL",excludeEmptyString:true}),
    linkedIn: yup.string().matches(regMatch, {message:"LinkedIn link should be a valid URL",excludeEmptyString:true}),
    instagram: yup.string().matches(regMatch, {message:"Instagram link should be a valid URL",excludeEmptyString:true}),
    telegram: yup.string().matches(regMatch, {message:"Telegram link should be a valid URL",excludeEmptyString:true}),
  });

  // * Redux
  const dispatch = useDispatch();
  const { setActiveState, setProgress, setUserLinks } = registrationAuth.actions;
  const { progress, userData } = useSelector(
    (state) => state.registrationReducer
  );

  // * useStates
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  let [github, setGithub] = useState("");
  let [linkedIn, setLinkedIn] = useState("");
  let [instagram, setInstagram] = useState("");
  let [telegram, setTelegram] = useState("");

  // * Functions
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await urlsSchema.validate({ github, linkedIn, instagram, telegram });
      dispatch(setUserLinks({github, linkedIn, instagram, telegram}));
      dispatch(setActiveState('Leader'))
      dispatch(setProgress('100'))
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
              <TopText>Do you have any social links?</TopText>
            </div>
            <MiddleTextContainer>
                <InputField maxlength="35" placeholder="Github" onChange={(e) => setGithub(e.target.value)}/>
                <InputField maxlength="35" placeholder="LinkedIn" onChange={(e) => setLinkedIn(e.target.value)}/>
                <InputField maxlength="35" placeholder="Telegram" onChange={(e) => setTelegram(e.target.value)}/>
                <InputField maxlength="35" placeholder="Instagram" onChange={(e) => setInstagram(e.target.value)}/>
            </MiddleTextContainer>
            <ContinueButton onClick={handleSubmit}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default Links;