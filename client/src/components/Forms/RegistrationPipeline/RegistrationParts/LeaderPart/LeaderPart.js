// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import React, { useState } from "react";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
import {options} from './Leader.options';
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
  SelectField,
  InfoContainer,
} from './LeaderPart.styles'

function LeaderPart() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const changeHandler = (value) => {
    setValue(value);
  };
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
            <InfoContainer>
              <TopText>Do you want to be a leader of the team?</TopText>
              <TopText fontSize='14px' fontWeight='500' margin='20px 0 10px 0'>Please note that leaders will be marked with special emoji 👑 and will be required to control their teams.</TopText>
              <TopText fontSize='14px' fontWeight='700' margin='0 0 10px 0'>Team leaders typically have more than 1 year of experience.</TopText>
            </InfoContainer>
            <MiddleTextContainer>
              <SelectField
                options={options}
                value={value}
                onChange={changeHandler}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#E0FF00",
                    primary: "black",
                  },
                })}
              />
            </MiddleTextContainer>
            <ContinueButton>Finish</ContinueButton>
          </CardContainer>
      </Container>
    </>
  )
}

export default LeaderPart;