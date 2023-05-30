import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import FilterSelect from './FilterSelect/FilterSelect'
import Search from './Search/Search'
import TagsList from './TagsList/TagsList'
import { SearchPanelWrapper, StyledSearchPanel } from './SearchPanel.styles'

const SearchPanel = ({ sliceName, setFilterValueAction }) => {
  const dispatch = useDispatch()
  const filtersArr = useSelector((state) => state[sliceName])
  const [currFilterIndex, setCurrFilterIndex] = useState(0)
  const setFilterValue = (index, value) => dispatch(setFilterValueAction({ index, value }))

  const currFilter = filtersArr[currFilterIndex]

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
      <TagsList
        filtersArr={filtersArr}
        currFilterIndex={currFilterIndex}
        setFilterValue={setFilterValue}
      />
    </StyledSearchPanel>
  )
}

export default SearchPanel
