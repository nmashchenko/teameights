// * Modules
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

// * Assets
import SiteLogo from "../../../../../assets/SiteLogo";
import ProgressBar from "../../ProgressBar/ProgressBar";
import React, { useState } from "react";
import {options} from './Concentration.options';
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
} from "./Concentration.styles";

function Concentration() {
  const [value, setValue] = useState("");

  const changeHandler = (value) => {
    setValue(value);
  };

  const dispatch = useDispatch();

  const {setActiveState, setProgress} = registrationAuth.actions;
  const {progress} = useSelector(
    (state) => state.registrationReducer
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <NavBar>
            <SiteLogo />
          </NavBar>
        </AppBar>
      </Box>
      <Container>
        <ProgressBar done={progress}/>
        <CardContainer>
          <div>
            <TopText>What is your concentration?</TopText>
          </div>
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
          <ContinueButton onClick={() => {
              dispatch(setActiveState('Experience'))
              dispatch(setProgress('60'))
              }}>Continue</ContinueButton>
        </CardContainer>
      </Container>
    </>
  );
}

export default Concentration;
