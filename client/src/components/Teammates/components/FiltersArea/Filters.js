// * Modules
import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import countryList from 'react-select-country-list'
import AppBar from '@mui/material/AppBar'
import { Form, Formik } from 'formik'

import FiltersIcon from '../../../../assets/Filters/Filters'
// * Assets
import PlatformLogo from '../../../../assets/Platform/TeameightsLogo'
// * Components
import NavBarContainer from '../../../../components/NavBar/NavBar'
import SearchPanel from '../../../../components/SearchPanel/SearchPanel'
import frameworkOptions from '../../../../constants/frameworks'
import CustomSelect from '../../../../shared/components/Formik/CustomSelect/CustomSelect'
import { setUsersFilter } from '../../../../store/reducers/UsersFiltersSlice'
import checkEntriesForValue from '../../../../utils/checkEntriesForValue'
import { normalizeFilters } from '../../../../utils/normalizeFilters'
import FiltersMenu from '../FiltersMenu/FiltersMenu'
import { PlaceholderText } from '../SelectField/SelectField.styles'

import {
  BoxContainer,
  Button,
  FilterContainer,
  FiltersWrapper,
  FilterText,
  LogoContainer,
  NavBar,
  SelectContainer,
} from './Filters.styles'

const FiltersArea = ({ setDisplayFiltered, displayFiltered }) => {
  return (
    <FiltersWrapper>
      <NavBar>
        <LogoContainer>
          <PlatformLogo />
        </LogoContainer>
        <SearchPanel sliceName={'usersFilters'} setFilterValueAction={setUsersFilter} />
      </NavBar>
    </FiltersWrapper>
  )
}

export default FiltersArea
