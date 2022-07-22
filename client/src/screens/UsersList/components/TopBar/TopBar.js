import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import countryList from "react-select-country-list";
import SearchIcon from "@mui/icons-material/Search";

// * Assets
import SiteLogo from "../../../../assets/SiteLogo";
import NavBarIcon from "../../../../assets/NavBarIcon";
import SelectField from "../SelectField/SelectField";
import { concentrationOptions } from "./Contentration.options";
import { programmingLanguageOptions } from "./ProgrammingLanguages.options";
// import SearchIcon from "../../../../assets/SearchIcon"

import {
  NavBar,
  BoxContainer,
  NavIconContainer,
  LogoContainer,
  Button,
  SelectContainer,
} from "./TopBar.styles";

function TopBar(props) {
  const countriesOptions = React.useMemo(() => countryList().getData(), []);
  return (
    <>
      <BoxContainer sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ background: "transparent" }}
        >
          <NavBar>
            <NavIconContainer>
              <NavBarIcon />
            </NavIconContainer>
            <LogoContainer>
              <SiteLogo />
            </LogoContainer>
            <SelectContainer>
              <SelectField
                inputName={"Country"}
                options={countriesOptions}
                data={props.countries}
                handleChange={props.handleCountries}
              />
              <SelectField
                inputName={"Role"}
                options={concentrationOptions}
                data={props.roles}
                handleChange={props.handleRoles}
              />
              <SelectField
                inputName={"Language"}
                options={programmingLanguageOptions}
                data={props.programmingLanguages}
                handleChange={props.handleProgrammingLanguages}
              />
            </SelectContainer>
            <Button onClick={props.handleSubmitFilter}>
              <SearchIcon
                sx={{ width: "32px", height: "32px", color: "white" }}
              />
            </Button>
          </NavBar>
        </AppBar>
      </BoxContainer>
    </>
  );
}

export default TopBar;
