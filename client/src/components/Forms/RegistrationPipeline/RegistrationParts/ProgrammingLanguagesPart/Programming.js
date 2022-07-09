// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Chip from './Chip'

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

} from './Programming.styles'

function Programming() {
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
              <TopText>What are your favorite programming languages?</TopText>
            </div>
            <MiddleTextContainer>
              <Chip label={'JS'}/>
              <Chip label={'C++'}/>
              <Chip label={'C'}/>
              <Chip label={'Python'}/>
              <Chip label={'Swift'}/>
              <Chip label={'Ruby'}/>
              <Chip label={'Scala'}/>
              <Chip label={'PHP'}/>
              <Chip label={'Go'}/>
              <Chip label={'C#'}/>
              <Chip label={'Java'}/>
              <Chip label={'HTML/CSS'}/>
              <Chip label={'Dart'}/>
              <Chip label={'Perl'}/>
              <Chip label={'SQL'}/>
            </MiddleTextContainer>
            <ContinueButton onClick={() => {
              dispatch(setActiveState('ConcentrationPart'))
              dispatch(setProgress('60'))
              }}>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default Programming;