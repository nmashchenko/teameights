// * Modules
import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import countryList from 'react-select-country-list'

// * Assets
import PlatformLogo from '../../../../assets/PlatformLogo'
import Search from '../../../../assets/SearchIcon'
import Filters from '../../../../assets/Filters'

// * Components
import NavBarContainer from '../../../../components/NavBar/NavBar'
import FiltersMenu from '../FiltersMenu/FiltersMenu'

// * Options
import { concentrationOptions } from './Contentration.options'
import { programmingLanguageOptions } from './ProgrammingLanguages.options'

import {
  NavBar,
  BoxContainer,
  LogoContainer,
  AlternativeLogoContainer,
  Button,
  SelectContainer,
  FilterContainer,
  FilterText,
} from './TopBar.styles'

import Countries from './Filters/Countries'
import ProgrammingLanguages from './Filters/ProgrammingLanguages'
import Roles from './Filters/Roles'

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
