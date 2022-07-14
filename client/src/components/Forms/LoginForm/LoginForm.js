// * Modules
import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from 'react-router-dom'

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
  LoginContainer,
  LoginTextContainer,
  LoginInputContainer,
  LoginBox,
  LoginText,
  LoginInput,
  LoginButton,
  BottomBox,
  LoginLink,
  PasswordContainer,
  ShowPass,
  AlertBox,
} from "./LoginForm.styles";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {isAuth, error, isRegistered, user} = useSelector(
    (state) => state.userReducer
  );

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleLogin = () => {
    // check if user is registered in the system.
    dispatch(authApi.checkIsRegistered(inputEmail));
    dispatch(authApi.loginUser(inputEmail, password));
    setOpen(true);
  };

  // check if user is authenticated and update user(object) with data about him
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authApi.checkAuth());
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      // If user already registered we send him to the platform page, otherwise => complete registration
      if(user.user.isRegistered) {
        navigate(ROUTES.temporary, { replace: true })
      } else {
        navigate(ROUTES.finishRegistration, { replace: true })
      }
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
      <LoginContainer>
        <LoginBox>
          <LoginTextContainer>
            <LoginText fontSize="20px">Welcome back 💫</LoginText>
          </LoginTextContainer>
          <LoginInputContainer>
            <LoginInput
              placeholder="EMAIL"
              type="text"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            <PasswordContainer>
              <LoginInput
                placeholder="PASSWORD"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
          </LoginInputContainer>
          <BottomBox>
            <LoginLink href="/auth/password-recover" fontSize="12px" fontWeight="700">
              Forgot password?
            </LoginLink>
            <LoginLink href="/auth/registration" fontSize="12px" fontWeight="700">
              Sign up
            </LoginLink>
          </BottomBox>
        </LoginBox>
      </LoginContainer>
    </div>
  );
}

export default LoginForm;
