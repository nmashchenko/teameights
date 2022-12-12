// * Modules
import React from 'react'

import Close from '../../../../assets/Close'
// * Assets
import Filters from '../../../../assets/Filters'

// * Components
import Countries from './Filters/Countries'
import ProgrammingLanguages from './Filters/ProgrammingLanguages'
import Roles from './Filters/Roles'
// * Styles
import {
  ButtonsContainer,
  CloseContainer,
  CustomButton,
  FiltersAmount,
  FiltersContentTop,
  FiltersMenuContainer,
  FilterText,
  TopContent,
} from './FiltersMenu.styles'

const FiltersMenu = ({
  filterBar,
  showFiltersBar,
  countries,
  roles,
  programmingLanguages,
  setCountries,
  setRoles,
  setProgrammingLanguages,
  handleSubmitFilter,
  countriesOptions,
  concentrationOptions,
  programmingLanguageOptions,
}) => {
  const handleSearch = () => {
    handleSubmitFilter()
    showFiltersBar()
  }

  return (
    <>
      {filterBar ? (
        <FiltersMenuContainer top="0" transition="250ms">
          <TopContent>
            <FiltersContentTop>
              <Filters />
              <FilterText>Filters</FilterText>
              <FiltersAmount>
                <h4>3</h4>
              </FiltersAmount>
            </FiltersContentTop>
            <CloseContainer onClick={showFiltersBar}>
              <Close />
            </CloseContainer>
          </TopContent>
          <Roles options={concentrationOptions} data={roles} setRoles={setRoles} />
          <Countries options={countriesOptions} data={countries} setCountries={setCountries} />
          <ProgrammingLanguages
            options={programmingLanguageOptions}
            data={programmingLanguages}
            setProgrammingLanguages={setProgrammingLanguages}
          />
          <ButtonsContainer>
            <CustomButton background="none" onClick={showFiltersBar}>
              Cancel
            </CustomButton>
            <CustomButton onClick={handleSearch}>Search</CustomButton>
          </ButtonsContainer>
        </FiltersMenuContainer>
      ) : (
        <FiltersMenuContainer></FiltersMenuContainer>
      )}
    </>
  )
}

export default FiltersMenu
