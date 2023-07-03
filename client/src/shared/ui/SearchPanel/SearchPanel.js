import FilterSelect from '../../../components/FilterSelect/FilterSelect'
import Search from '../../../components/Search/Search'
import TagsList from '../../../components/TagsList/TagsList'

import { SearchPanelWrapper, StyledSearchPanel } from './SearchPanel.style'

const SearchPanel = ({ sliceName, currFilterIndex, setCurrFilterIndex, setFilterValueAction }) => {
  return (
    <StyledSearchPanel>
      <SearchPanelWrapper>
        <FilterSelect
          sliceName={sliceName}
          currFilterIndex={currFilterIndex}
          setCurrFilterIndex={setCurrFilterIndex}
        />
        <Search
          sliceName={sliceName}
          currFilterIndex={currFilterIndex}
          setFilterValueAction={setFilterValueAction}
        />
      </SearchPanelWrapper>
      <TagsList sliceName={sliceName} setFilterValueAction={setFilterValueAction} />
    </StyledSearchPanel>
  )
}

export default SearchPanel
