// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

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
  InputField,
} from './Links.styles'

function Links() {
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
        <ProgressBar done="70" />
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
            <ContinueButton>Continue</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default Links;