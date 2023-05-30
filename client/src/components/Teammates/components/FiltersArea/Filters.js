// * Modules
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import countryList from 'react-select-country-list'
import AppBar from '@mui/material/AppBar'
import { Form, Formik } from 'formik'

import Filters from '../../../../assets/Filters/Filters'
// * Assets
import PlatformLogo from '../../../../assets/Platform/TeameightsLogo'
// * Components
import NavBarContainer from '../../../../components/NavBar/NavBar'
import SearchPanel from '../../../../components/SearchPanel/SearchPanel'
import frameworkOptions from '../../../../constants/frameworks'
import CustomSelect from '../../../../shared/components/Formik/CustomSelect/CustomSelect'
import { setFilters } from '../../../../store/reducers/Shared'
import { setUsersFilter } from '../../../../store/reducers/UsersFiltersSlice'
import FiltersMenu from '../FiltersMenu/FiltersMenu'
import { PlaceholderText } from '../SelectField/SelectField.styles'

// * Options
import { concentrationOptions } from './Contentration.options'
import {
  BoxContainer,
  Button,
  FilterContainer,
  FilterText,
  LogoContainer,
  NavBar,
  SelectContainer,
} from './Filters.styles'
import { programmingLanguageOptions } from './ProgrammingLanguages.options'

const TopBar = ({ setDisplayFiltered, displayFiltered }) => {
  const [filterBar, setFilterBar] = useState(false)
  const dispatch = useDispatch()
  const countriesOptions = useMemo(() => countryList().getData(), [])

  const showFiltersBar = () => setFilterBar(!filterBar)
  const handleSubmitFilter = (values, dirty) => {
    if (dirty) {
      setDisplayFiltered(true)
      dispatch(setFilters(values))
    } else {
      setDisplayFiltered(false)
    }
  }

  return (
    <Formik initialValues={{ countries: [], roles: [], languages: [], frameworks: [] }}>
      {({ values, dirty, resetForm }) => {
        useEffect(() => {
          if (!displayFiltered) {
            resetForm()
          }
        }, [displayFiltered])

        return (
          <Form style={{ width: '100%', paddingLeft: '88px' }}>
            {/* Mobile filters menu */}
            {/* <FiltersMenu
              filterBar={filterBar}
              showFiltersBar={showFiltersBar}
              handleSubmitFilter={handleSubmitFilter}
              countriesOptions={countriesOptions}
              concentrationOptions={concentrationOptions}
              programmingLanguageOptions={programmingLanguageOptions}
            /> */}
            <NavBar>
              <LogoContainer>
                <PlatformLogo />
              </LogoContainer>
              {/* Old filters */}
              {/* <SelectContainer>
                    <CustomSelect
                      multiple={true}
                      label="Country"
                      name="countries"
                      options={countriesOptions}
                      line={false}
                      hideLabelOnSelect={true}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return (
                            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'end' }}>
                              Country
                            </PlaceholderText>
                          )
                        }

                        return selected.join(', ')
                      }}
                      styles={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '8.5rem',
                        margin: 0,
                      }}
                    />
                    <CustomSelect
                      multiple={true}
                      label="Role"
                      name="roles"
                      line={false}
                      hideLabelOnSelect={true}
                      options={concentrationOptions}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return (
                            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'end' }}>
                              Role
                            </PlaceholderText>
                          )
                        }

                        return selected.join(', ')
                      }}
                      styles={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '8.5rem',
                        margin: 0,
                      }}
                    />
                    <CustomSelect
                      multiple={true}
                      label="Language"
                      name="languages"
                      line={false}
                      options={programmingLanguageOptions}
                      hideLabelOnSelect={true}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return (
                            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'end' }}>
                              Language
                            </PlaceholderText>
                          )
                        }

                        return selected.join(', ')
                      }}
                      styles={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '8.5rem',
                        margin: 0,
                      }}
                    />
                    <CustomSelect
                      multiple={true}
                      label="Framework"
                      name="frameworks"
                      line={false}
                      options={frameworkOptions}
                      hideLabelOnSelect={true}
                      renderValue={(selected) => {
                        if (selected.length === 0) {
                          return (
                            <PlaceholderText style={{ marginRight: '1rem', textAlign: 'end' }}>
                              Frameworks
                            </PlaceholderText>
                          )
                        }

                        return selected.join(', ')
                      }}
                      styles={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '8.5rem',
                        margin: 0,
                      }}
                    />
                  </SelectContainer>
                  <Button type="button" onClick={() => handleSubmitFilter(values, dirty)}>
                    <Search sx={{ width: '32px', height: '32px', color: 'white' }} />
                  </Button> */}
              <SearchPanel sliceName={'usersFilters'} setFilterValueAction={setUsersFilter} />
              {/* Mobile filters button */}
              {/* <FilterContainer onClick={showFiltersBar}>
                    <Filters />
                    <FilterText>Filters</FilterText>
                  </FilterContainer> */}
            </NavBar>
          </Form>
        )
      }}
    </Formik>
  )
}

export default TopBar
