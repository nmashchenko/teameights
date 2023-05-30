import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Formik } from 'formik'

import PlatformLogo from '../../../assets/Platform/TeameightsLogo'
import { setTeamsFilter } from '../../../store/reducers/TeamsFiltersSlice'
import SearchPanel from '../../SearchPanel/SearchPanel'
import { LogoContainer, NavBar } from '../../Teammates/components/FiltersArea/Filters.styles'

const SearchBar = () => {
  //   const [filterBar, setFilterBar] = useState(false)
  //   const dispatch = useDispatch()

  //   const showFiltersBar = () => setFilterBar(!filterBar)

  //   const handleSubmitFilter = (values, dirty) => {
  //     if (dirty) {
  //       setDisplayFiltered(true)
  //       dispatch(setFilters(values))
  //     } else {
  //       setDisplayFiltered(false)
  //     }
  //   }

  return (
    <Formik initialValues={{}}>
      {({ values, dirty, resetForm }) => {
        // useEffect(() => {
        //   if (!displayFiltered) {
        //     resetForm()
        //   }
        // }, [displayFiltered])

        return (
          <Form style={{ width: '100%', paddingLeft: '88px' }}>
            <NavBar>
              <LogoContainer>
                <PlatformLogo />
              </LogoContainer>
              <SearchPanel sliceName={'teamsFilters'} setFilterValueAction={setTeamsFilter} />
            </NavBar>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SearchBar
