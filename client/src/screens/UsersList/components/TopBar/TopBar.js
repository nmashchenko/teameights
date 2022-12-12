// * Modules
import React, { useState } from 'react'
import countryList from 'react-select-country-list'
import AppBar from '@mui/material/AppBar'

import Filters from '../../../../assets/Filters'
// * Assets
import PlatformLogo from '../../../../assets/PlatformLogo'
import Search from '../../../../assets/SearchIcon'
// * Components
import NavBarContainer from '../../../../components/NavBar/NavBar'
import FiltersMenu from '../FiltersMenu/FiltersMenu'

import Countries from './Filters/Countries'
import ProgrammingLanguages from './Filters/ProgrammingLanguages'
import Roles from './Filters/Roles'
// * Options
import { concentrationOptions } from './Contentration.options'
import { programmingLanguageOptions } from './ProgrammingLanguages.options'
import {
  AlternativeLogoContainer,
  BoxContainer,
  Button,
  FilterContainer,
  FilterText,
  LogoContainer,
  NavBar,
  SelectContainer,
} from './TopBar.styles'

function TopBar(props) {
  const countriesOptions = React.useMemo(() => countryList().getData(), [])

  const [filterBar, setFilterBar] = useState(false)
  const showFiltersBar = () => setFilterBar(!filterBar)

  return (
    <>
      <FiltersMenu
        filterBar={filterBar}
        showFiltersBar={showFiltersBar}
        countries={props.countries}
        roles={props.roles}
        programmingLanguages={props.programmingLanguages}
        setCountries={props.setCountries}
        setRoles={props.setRoles}
        setProgrammingLanguages={props.setProgrammingLanguages}
        handleSubmitFilter={props.handleSubmitFilter}
        countriesOptions={countriesOptions}
        concentrationOptions={concentrationOptions}
        programmingLanguageOptions={programmingLanguageOptions}
      />
      <BoxContainer sx={{ flexGrow: 1 }}>
        <AppBar position="relative" elevation={0} sx={{ background: 'transparent' }}>
          <AlternativeLogoContainer>
            <PlatformLogo />
          </AlternativeLogoContainer>
          <NavBar>
            <NavBarContainer handleUserLogout={props.handleUserLogout} user={props.user} />
            <LogoContainer>
              <PlatformLogo />
            </LogoContainer>
            <SelectContainer>
              <Countries
                options={countriesOptions}
                data={props.countries}
                setCountries={props.setCountries}
              />
              <Roles options={concentrationOptions} data={props.roles} setRoles={props.setRoles} />
              <ProgrammingLanguages
                options={programmingLanguageOptions}
                data={props.programmingLanguages}
                setProgrammingLanguages={props.setProgrammingLanguages}
              />
            </SelectContainer>
            <Button onClick={props.handleSubmitFilter}>
              <Search sx={{ width: '32px', height: '32px', color: 'white' }} />
            </Button>
            <FilterContainer onClick={showFiltersBar}>
              <Filters />
              <FilterText>Filters</FilterText>
            </FilterContainer>
          </NavBar>
        </AppBar>
      </BoxContainer>
    </>
  )
}

export default TopBar
