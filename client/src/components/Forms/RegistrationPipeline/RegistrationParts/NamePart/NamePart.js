// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

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
} from './NamePart.styles'

function NamePart() {
  const dispatch = useDispatch();

  const {setActiveState, setProgress} = registrationAuth.actions;
  const {progress} = useSelector(
    (state) => state.registrationReducer
  );

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
              <TopText>What is your name?</TopText>
            </div>
            <MiddleTextContainer>
              <InputField />
            </MiddleTextContainer>
            <ContinueButton onClick={() => {
              dispatch(setActiveState('CountryPart'))
              dispatch(setProgress('20'))
              }}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default NamePart;