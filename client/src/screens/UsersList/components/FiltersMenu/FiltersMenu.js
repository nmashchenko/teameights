// * Modules
import React from 'react'

// * Assets
import Filters from '../../../../assets/Filters'
import Close from '../../../../assets/Close'

// * Styles
import {
  FiltersMenuContainer,
  TopContent,
  FiltersContentTop,
  FilterText,
  FiltersAmount,
  CloseContainer,
  ButtonsContainer,
  CustomButton,
} from './FiltersMenu.styles'

// * Components
import Countries from './Filters/Countries'
import Roles from './Filters/Roles'
import ProgrammingLanguages from './Filters/ProgrammingLanguages'

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
