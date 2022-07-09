// * Modules
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import { Link, useNavigate } from 'react-router-dom'

// * Assets
import SiteLogo from "../../../assets/SiteLogo";

// * Api
import authApi from "../../../api/endpoints/auth";

// * Redux
import { useSelector, useDispatch } from "react-redux";

// * Constants
import ROUTES from '../../../constants/routes';

import {
  NavBar,
  RegistrationContainer,
  RegistrationTextContainer,
  RegistrationInputContainer,
  RegistrationBox,
  RegistrationText,
  RegistrationInput,
  RegistrationButton,
  BottomBox,
  RegistrationLink,
  PasswordContainer,
  ShowPass,
  AlertBox,
} from "./RegistrationForm.styles";

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isAuth, error} = useSelector(
    (state) => state.userReducer
  );

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleRegistration = () => {
    dispatch(authApi.registerUser(username, email, password, confirmPassword));
    setOpen(true);
  };

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.confirmEmail, { replace: true })
    }
  }, [isAuth, navigate])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <NavBar>
            <SiteLogo />
          </NavBar>
        </AppBar>
      </Box>
      {error && (
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
            {error}
          </Alert>
        </Snackbar>
      )}
      <RegistrationContainer>
        <RegistrationBox>
          <RegistrationTextContainer>
            <RegistrationText fontSize="20px">Let's begin your journey 🔥</RegistrationText>
          </RegistrationTextContainer>
          <RegistrationInputContainer>
          <RegistrationInput
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <RegistrationInput
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordContainer>
              <RegistrationInput
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
              </PasswordContainer>
              <PasswordContainer>
              <RegistrationInput
                placeholder="Repeat password"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
              </PasswordContainer>
            <RegistrationButton onClick={handleRegistration}>Register</RegistrationButton>
          </RegistrationInputContainer>
          <BottomBox>
            <RegistrationLink href="/auth/login" fontSize="12px" fontWeight="700">
              Already registered?
            </RegistrationLink>
          </BottomBox>
        </RegistrationBox>
      </RegistrationContainer>
    </div>
  );
}

export default RegistrationForm;
