import { useState } from 'react'

import SearchIcon from '../../../../assets/SearchIcon'
import { SearchBox, SearchBtn, SearchInput } from '../Search.styles'

const SearchByText = ({ filterName, placeholder }) => {
  const [value, setValue] = useState('')

  return (
    <SearchBox>
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <SearchBtn>
        <SearchIcon />
      </SearchBtn>
    </SearchBox>
  )
}

export default SearchByText
