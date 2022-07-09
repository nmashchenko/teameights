// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { registrationAuth } from "../../../../../store/reducers/RegistrationAuth";

// * Redux
import { useSelector, useDispatch } from "react-redux";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";

import {
  CardContainer,
  Container,
  NavBar,
  TopText,
  MiddleTextContainer,
  ContinueButton,
} from './InitialPart.styles'

function InitialPart() {
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
              <TopText>Welcome to the squad, pRod1gy~ !</TopText>
            </div>
            <MiddleTextContainer>
              <TopText fontWeight='300px' fontSize='14px' margin='45px 0 0 0'>Please, fill the form to complete the registration.</TopText>
              <TopText fontWeight='300px' fontSize='14px' margin='33px 0 0 0'>It will take approximately 5 minutes but will help us better understand your skills and what are you looking for here.</TopText>
            </MiddleTextContainer>
            <ContinueButton onClick={() => {
              dispatch(setActiveState('NamePart'))
              dispatch(setProgress('10'))
              }}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default InitialPart;