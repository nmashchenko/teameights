import SearchIcon from '../../../../../../assets/SearchIcon'
import { SearchBox, SearchBtn, SearchInput } from '../Search.styles'

const SearchByText = ({ value, onChange, placeholder }) => {
  return (
    <SearchBox>
      <SearchInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </SearchBox>
  )
}

export default SearchByText
