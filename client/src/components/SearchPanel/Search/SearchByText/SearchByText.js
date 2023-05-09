import { useEffect, useState } from 'react'

import SearchIcon from '../../../../assets/SearchIcon'
import { SearchBox, SearchIconWrapper, SearchInput } from '../Search.styles'

const SearchByText = ({ placeholder, currFilter, currFilterIndex, setFilterValue }) => {
  const [timer, setTimer] = useState(null)
  const [value, setValue] = useState(currFilter.value)

  useEffect(() => {
    clearTimeout(timer)
    setValue(currFilter.value)
  }, [currFilter])

  useEffect(() => {
    clearTimeout(timer)
    setTimer(setTimeout(() => setFilterValue(currFilterIndex, value), 2000))

    return () => clearTimeout(timer)
  }, [value])

  return (
    <SearchBox hover gap="8px" padding="0 11px">
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchBox>
  )
}

export default SearchByText
