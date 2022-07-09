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
} from './Experience.styles'

function Experience() {
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
              <TopText>How many years of experience do you have?</TopText>
            </div>
            <MiddleTextContainer>
              <InputField />
            </MiddleTextContainer>
            <ContinueButton onClick={() => {
              dispatch(setActiveState('Links'))
              dispatch(setProgress('84'))
              }}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default Experience;