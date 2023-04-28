import { useState } from 'react'

import FilterSelect from './FilterSelect/FilterSelect'
import Search from './Search/Search'
import { SearchPanelWrapper, StyledSearchPanel } from './SearchPanel.styles'

const SearchPanel = ({ filtersArr, getItemsFunc }) => {
  const [filter, setFilter] = useState(filtersArr[0])

  return (
    <StyledSearchPanel>
      <SearchPanelWrapper>
        <FilterSelect filtersArr={filtersArr} filter={filter} setFilter={setFilter} />
        <Search filterName={filter.name} />
      </SearchPanelWrapper>
    </StyledSearchPanel>
  )
}

export default SearchPanel
