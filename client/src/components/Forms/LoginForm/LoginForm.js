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
  const {isAuth, error} = useSelector(
    (state) => state.userReducer
  );

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
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

  const handleLogin = () => {
    dispatch(authApi.loginUser(email, password));
    setOpen(true);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authApi.checkAuth());
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTES.temporary, { replace: true })
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
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordContainer>
              <LoginInput
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <LoginButton onClick={handleLogin}>Login</LoginButton>
          </LoginInputContainer>
          <BottomBox>
            <LoginLink href="/" fontSize="12px" fontWeight="700">
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
