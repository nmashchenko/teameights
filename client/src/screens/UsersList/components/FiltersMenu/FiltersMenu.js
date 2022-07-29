// * Modules
import React from 'react'

// * Assets
import Filters from '../../../../assets/Filters'
import Close from '../../../../assets/Close'
import FilterField from './FilterField/FilterField'

// * Styles
import {
  FiltersMenuContainer,
  TopContent,
  FiltersContentTop,
  FilterText,
  FiltersAmount,
  CloseContainer,
  TitleText,
  FilterSection,
  ButtonsContainer,
  CustomButton,
  Line,
} from './FiltersMenu.styles'

const FiltersMenu = ({
  filterBar,
  showFiltersBar,
  countries,
  roles,
  programmingLanguages,
  handleCountries,
  handleRoles,
  handleProgrammingLanguages,
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
          <FilterSection>
            <TitleText>Roles</TitleText>
            <FilterField options={concentrationOptions} data={roles} handleChange={handleRoles} />
            <Line />
          </FilterSection>
          <FilterSection>
            <TitleText>Countries</TitleText>
            <FilterField
              options={countriesOptions}
              data={countries}
              handleChange={handleCountries}
            />
            <Line />
          </FilterSection>
          <FilterSection>
            <TitleText>Programming Languages</TitleText>
            <FilterField
              options={programmingLanguageOptions}
              data={programmingLanguages}
              handleChange={handleProgrammingLanguages}
            />
            <Line />
          </FilterSection>
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
