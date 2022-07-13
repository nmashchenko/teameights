// * Modules
import React, { useEffect } from "react";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";
import { useNavigate } from "react-router-dom";

// * Redux
import { useSelector, useDispatch } from "react-redux";

// * Assets
import ProgressBar from "../../ProgressBar/ProgressBar";
import NavLogo from "../../NavLogo/NavLogo";

import {
  CardContainer,
  Container,
  TopText,
  MiddleTextContainer,
  ContinueButton,
} from "./InitialPart.styles";

import ROUTES from "../../../../../constants/routes";
import registerAuthApi from "../../../../../api/endpoints/registration-auth";

function InitialPart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setActiveState, setProgress } = registrationAuth.actions;
  const { progress } = useSelector(
    (state) => state.registrationReducer
  );

  // check if local storage has token that was generated with registration 
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // get email of user
      dispatch(registerAuthApi.checkRegistration());
    } else {
      navigate(ROUTES.login, { replace: true });
    }
  }, []);

  return (
    <>
      <NavLogo />
      <Container>
        <ProgressBar done={progress} />
        <CardContainer>
          <div>
            <TopText>Welcome to the squad, pRod1gy~ !</TopText>
          </div>
          <MiddleTextContainer>
            <TopText fontWeight="300px" fontSize="14px" margin="45px 0 0 0">
              Please, fill the form to complete the registration.
            </TopText>
            <TopText fontWeight="300px" fontSize="14px" margin="33px 0 0 0">
              It will take approximately 5 minutes but will help us better
              understand your skills and what are you looking for here.
            </TopText>
          </MiddleTextContainer>
          <ContinueButton
            // change the global states
            onClick={() => {
              dispatch(setActiveState("NamePart"));
              dispatch(setProgress("12"));
            }}
          >
            Continue
          </ContinueButton>
        </CardContainer>
      </Container>
    </>
  );
}

export default InitialPart;
