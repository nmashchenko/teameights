import { useState } from 'react'

import FilterSelect from './FilterSelect/FilterSelect'
import Search from './Search/Search'
import { filtersList } from './filtersList.options'
import { SearchPanelWrapper, StyledSearchPanel } from './SearchPanel.styles'

const SearchPanel = () => {
  const [filter, setFilter] = useState(filtersList[0])

  return (
    <StyledSearchPanel>
      <SearchPanelWrapper>
        <FilterSelect filter={filter} setFilter={setFilter} />
        <Search filter={filter} />
      </SearchPanelWrapper>
    </StyledSearchPanel>
  )
}

export default SearchPanel
