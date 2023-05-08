import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterSelect from './FilterSelect/FilterSelect'
import Search from './Search/Search'
import { SearchPanelWrapper, StyledSearchPanel } from './SearchPanel.styles'

const SearchPanel = ({ sliceName, setFilterValueAction }) => {
  const dispatch = useDispatch()
  const setFilterValue = (index, value) => dispatch(setFilterValueAction({ index, value }))
  const filtersArr = useSelector((state) => state[sliceName])
  const [currFilterIndex, setCurrFilterIndex] = useState(0)

  const currFilter = filtersArr[currFilterIndex]

  console.log(currFilter)

  return (
    <StyledSearchPanel>
      <SearchPanelWrapper>
        <FilterSelect
          filtersArr={filtersArr}
          currFilter={currFilter}
          setCurrFilterIndex={setCurrFilterIndex}
        />
        <Search
          currFilter={currFilter}
          currFilterIndex={currFilterIndex}
          setFilterValue={setFilterValue}
        />
      </SearchPanelWrapper>
    </StyledSearchPanel>
  )
}

export default SearchPanel
