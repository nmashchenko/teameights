import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import countryList from "react-select-country-list";
import SearchIcon from "@mui/icons-material/Search";

// * Assets
import SiteLogo from "../../../../assets/SiteLogo";
import PlatformLogo from "../../../../assets/PlatformLogo";
import SelectField from "../SelectField/SelectField";
import Search from "../../../../assets/SearchIcon";
import NavBarContainer from "../NavBar/NavBar"
import { concentrationOptions } from "./Contentration.options";
import { programmingLanguageOptions } from "./ProgrammingLanguages.options";
import Filters from "../../../../assets/Filters"
import FiltersMenu from "../FiltersMenu/FiltersMenu"

import {
  NavBar,
  BoxContainer,
  LogoContainer,
  AlternativeLogoContainer,
  Button,
  SelectContainer,
  FilterContainer,
  FilterText
} from "./TopBar.styles";

function TopBar(props) {
  const countriesOptions = React.useMemo(() => countryList().getData(), []);

  const [filterBar, setFilterBar] = useState(false);
  const showFiltersBar = () => setFilterBar(!filterBar);
  return (
    <>
      <FiltersMenu 
        filterBar={filterBar} 
        showFiltersBar={showFiltersBar}
        countries={props.countries}
        roles={props.roles}
        programmingLanguages={props.programmingLanguages}
        handleCountries={props.handleCountries}
        handleRoles={props.handleRoles}
        handleProgrammingLanguages={props.handleProgrammingLanguages}
        handleSubmitFilter={props.handleSubmitFilter}
        countriesOptions={countriesOptions}
        concentrationOptions={concentrationOptions}
        programmingLanguageOptions={programmingLanguageOptions}
      />
      <BoxContainer sx={{ flexGrow: 1 }}>
        <AppBar
          position="relative"
          elevation={0}
          sx={{ background: "transparent" }}
        >
          <AlternativeLogoContainer>
              <PlatformLogo />
          </AlternativeLogoContainer>
          <NavBar>
            <NavBarContainer handleUserLogout={props.handleUserLogout}/>
            <LogoContainer>
              <PlatformLogo />
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
              <Search
                sx={{ width: "32px", height: "32px", color: "white" }}
              />
            </Button>
            <FilterContainer onClick={showFiltersBar}>
              <Filters />
              <FilterText>Filters</FilterText>
            </FilterContainer>
          </NavBar>
        </AppBar>
      </BoxContainer>
    </>
  );
}

export default TopBar;
