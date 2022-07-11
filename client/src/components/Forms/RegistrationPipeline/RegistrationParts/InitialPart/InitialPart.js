// * Modules
import React, {useEffect} from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";
import { Link, useNavigate } from 'react-router-dom'

// * Redux
import { useSelector, useDispatch } from "react-redux";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
import authApi from "../../../../../api/endpoints/auth";

import {
  CardContainer,
  Container,
  NavBar,
  TopText,
  MiddleTextContainer,
  ContinueButton,
} from './InitialPart.styles'

import ROUTES from '../../../../../constants/routes';

function InitialPart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {setActiveState, setProgress} = registrationAuth.actions;
  const {progress, userData, error} = useSelector(
    (state) => state.registrationReducer
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      // TODO: remove this check later
      dispatch(authApi.checkRegistration());
    } else {
      navigate(ROUTES.login, { replace: true })
    }
  }, []);

  return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <NavBar>
            <SiteLogo />
          </NavBar>
        </AppBar>
      </Box>
      <Container>
        <ProgressBar done={progress} />
          <CardContainer>
            <div>
              <TopText>Welcome to the squad, pRod1gy~ !</TopText>
            </div>
            <MiddleTextContainer>
              <TopText fontWeight='300px' fontSize='14px' margin='45px 0 0 0'>Please, fill the form to complete the registration.</TopText>
              <TopText fontWeight='300px' fontSize='14px' margin='33px 0 0 0'>It will take approximately 5 minutes but will help us better understand your skills and what are you looking for here.</TopText>
            </MiddleTextContainer>
            <ContinueButton onClick={() => {
              dispatch(setActiveState('NamePart'))
              dispatch(setProgress('12'))
              }}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default InitialPart;