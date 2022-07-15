// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Snackbar from "@mui/material/Snackbar";

// * Assets
import SiteLogo from "../../../assets/SiteLogo";

// * Redux
import { useDispatch, useSelector } from "react-redux";

// * Api
import resetPassword from "../../../api/endpoints/reset";

import {
  NavBar,
  Container,
  NewPasswordContainer,
  NewPasswordBox,
  TextContainer,
  TitleText,
  SubTitleText,
  NewPasswordInput,
  NewPasswordButton,
  InputContainer,
  PasswordContainer,
  ShowPass,
  AlertBox,
} from './NewPasswords.styles'

import ROUTES from "../../../constants/routes";

function NewPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <AlertBox elevation={7} ref={ref} variant="filled" {...props} />;
  });

  let { id, token } = useParams();
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);

  const {error, statusDone} = useSelector(
    (state) => state.resetPasswordReducer
  );

  const handleReset = () => {
    setOpen(true);
    dispatch(resetPassword.updatePassword(id, token, password, repeatPassword));
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {}, [error]);

  useEffect(() => {
    if(statusDone) {
      navigate(ROUTES.login, { replace: true })
    }
  }, [statusDone, navigate]);

  return (
    <Container>
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
    <NewPasswordContainer>
      <NewPasswordBox>
        <TextContainer>
          <TitleText margin='0 0 24px 0'>Recover Password</TitleText>
        </TextContainer>
        <TextContainer>
          <SubTitleText>Create new, <strong> strong </strong> password that you don't use for the other websites</SubTitleText>
        </TextContainer>
        <InputContainer>
          <PasswordContainer>
              <NewPasswordInput
                placeholder="PASSWORD"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <PasswordContainer>
              <NewPasswordInput
                placeholder="REPEAT PASSWORD"
                type={showPassword ? "text" : "password"}
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
              <ShowPass onClick={(e) => setShowPassword(!showPassword)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </ShowPass>
            </PasswordContainer>
            <NewPasswordButton onClick={handleReset}>RESET PASSWORD</NewPasswordButton>
        </InputContainer>
      </NewPasswordBox>
    </NewPasswordContainer>
  </Container>
  )
}

export default NewPassword