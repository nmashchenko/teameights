// * Modules
import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

// * Assets
import PlatformLogo from '../../../../assets/Platform/TeameightsLogo'
// * Components
import { setUsersFilter } from '../../../../store/reducers/UsersFiltersSlice'
import FilterSelect from '../../../FilterSelect/FilterSelect'
import Search from '../../../Search/Search'
import TagsList from '../../../TagsList/TagsList'

// * Options
import { LogoContainer, NavBar, SearchPanel, SearchPanelWrapper } from './Filters.styles'

const TopBar = ({ displayFiltered }) => {
  const [currFilterIndex, setCurrFilterIndex] = useState(0)

  return (
    <Formik initialValues={{ countries: [], roles: [], languages: [], frameworks: [] }}>
      {({ resetForm }) => {
        useEffect(() => {
          if (!displayFiltered) {
            resetForm()
          }
        }, [displayFiltered])

        return (
          <Form style={{ width: '100%', paddingLeft: '88px' }}>
            <NavBar>
              <LogoContainer>
                <PlatformLogo />
              </LogoContainer>
              <SearchPanel>
                <SearchPanelWrapper>
                  <FilterSelect
                    sliceName={'usersFilters'}
                    currFilterIndex={currFilterIndex}
                    setCurrFilterIndex={setCurrFilterIndex}
                  />
                  <Search
                    sliceName={'usersFilters'}
                    setFilterValueAction={setUsersFilter}
                    currFilterIndex={currFilterIndex}
                  />
                </SearchPanelWrapper>
                <TagsList sliceName={'usersFilters'} setFilterValueAction={setUsersFilter} />
              </SearchPanel>
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
