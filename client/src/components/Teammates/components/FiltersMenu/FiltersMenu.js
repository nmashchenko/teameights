// * Modules
import React from 'react'
import { useFormikContext } from 'formik'

import Filters from '../../../../assets/Filters/Filters'
import Close from '../../../../assets/Shared/Close'
// * Assets
import frameworkOptions from '../../../../shared/constants/frameworks'
import SelectValue from '../../../../shared/ui/Formik/CustomSelect/components/SelectValue'
import CustomSelect from '../../../../shared/ui/Formik/CustomSelect/CustomSelect'

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
  handleSubmitFilter,
  countriesOptions,
  concentrationOptions,
  programmingLanguageOptions,
}) => {
  const { values, dirty } = useFormikContext()
  const handleSearch = () => {
    handleSubmitFilter(values, dirty)
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
                <h4>4</h4>
              </FiltersAmount>
            </FiltersContentTop>
            <CloseContainer onClick={showFiltersBar}>
              <Close />
            </CloseContainer>
          </TopContent>
          <CustomSelect
            multiple={true}
            label="Country"
            name="countries"
            options={countriesOptions}
            styles={{ width: '100%', marginTop: '2rem' }}
            renderValue={(selected) => <SelectValue selected={selected} />}
          />
          <CustomSelect
            multiple={true}
            label="Role"
            name="roles"
            options={concentrationOptions}
            styles={{ width: '100%', marginTop: '2rem' }}
            renderValue={(selected) => <SelectValue selected={selected} />}
          />
          <CustomSelect
            multiple={true}
            label="Language"
            name="languages"
            options={programmingLanguageOptions}
            styles={{ width: '100%', marginTop: '2rem' }}
            renderValue={(selected) => <SelectValue selected={selected} />}
          />
          <CustomSelect
            multiple={true}
            label="Framework"
            name="frameworks"
            options={frameworkOptions}
            styles={{ width: '100%', marginTop: '2rem' }}
            renderValue={(selected) => <SelectValue selected={selected} />}
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
