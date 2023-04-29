import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterSelect from './FilterSelect/FilterSelect'
import Search from './Search/Search'
import { SearchPanelWrapper, StyledSearchPanel } from './SearchPanel.styles'

const SearchPanel = ({ sliceName, setFilterValueAction }) => {
  const dispatch = useDispatch()
  const setFilterValue = (name, value) => dispatch(setFilterValueAction({ name, value }))
  const filtersArr = useSelector((state) => state[sliceName])
  const [currFilter, setCurrFilter] = useState(filtersArr[0])
  
  console.log(currFilter)

  return (
    <StyledSearchPanel>
      <SearchPanelWrapper>
        <FilterSelect
          filtersArr={filtersArr}
          currFilter={currFilter}
          setCurrFilter={setCurrFilter}
        />
        <Search
          currFilter={currFilter}
          setCurrFilter={setCurrFilter}
          setFilterValue={setFilterValue}
        />
      </SearchPanelWrapper>
    </StyledSearchPanel>
  )
}

export default SearchPanel
