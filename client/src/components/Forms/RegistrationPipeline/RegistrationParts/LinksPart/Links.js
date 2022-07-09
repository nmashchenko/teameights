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
} from './Links.styles'

function Links() {
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
              <TopText>Do you have any social links?</TopText>
            </div>
            <MiddleTextContainer>
                <InputField maxlength="35" placeholder="Github"/>
                <InputField maxlength="35" placeholder="LinkedIn"/>
                <InputField maxlength="35" placeholder="Telegram"/>
                <InputField maxlength="35" placeholder="Instagram"/>
            </MiddleTextContainer>
            <ContinueButton onClick={() => {
              dispatch(setActiveState('Leader'))
              dispatch(setProgress('100'))
              }}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default Links;