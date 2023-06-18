// * Modules
import React, { useEffect, useState } from 'react'
import { Form, Formik } from 'formik'

// * Assets
import PlatformLogo from '../../../../assets/Platform/TeameightsLogo'
import SearchIcon from '../../../../assets/Shared/SearchIcon'
// * Components
import { setUsersFilter } from '../../../../store/reducers/UsersFiltersSlice'
import FilterSelect from '../../../FilterSelect/FilterSelect'
import ModalSearch from '../../../ModalSearch/ModalSearch'
import Search from '../../../Search/Search'
import TagsList from '../../../TagsList/TagsList'

// * Options
import {
  LogoContainer,
  NavBar,
  SearchIconWrapper,
  SearchPanel,
  SearchPanelWrapper,
} from './Filters.styles'

const TopBar = ({ displayFiltered }) => {
  const [currFilterIndex, setCurrFilterIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

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
                <SearchIconWrapper onClick={() => setOpenModal(true)}>
                  <SearchIcon />
                </SearchIconWrapper>
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
                    currFilterIndex={currFilterIndex}
                    setFilterValueAction={setUsersFilter}
                  />
                </SearchPanelWrapper>
                <TagsList sliceName={'usersFilters'} setFilterValueAction={setUsersFilter} />
              </SearchPanel>
              {openModal ? (
                <ModalSearch
                  setOpenModal={setOpenModal}
                  sliceName={'usersFilters'}
                  currFilterIndex={currFilterIndex}
                  setCurrFilterIndex={setCurrFilterIndex}
                  setFilterValueAction={setUsersFilter}
                />
              ) : null}
            </NavBar>
          </Form>
        )
      }}
    </Formik>
  )
}

export default TopBar
