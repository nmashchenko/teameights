import { useEffect, useState } from 'react'

import SearchIcon from '../../../assets/Shared/SearchIcon'
import IconWrapper from '../../../shared/ui/IconWrapper/IconWrapper'
import { SearchBox, SearchInput } from '../Search.styles'

const SearchByText = ({ placeholder, currFilter, currFilterIndex, setFilterValue }) => {
  const [timer, setTimer] = useState(null)
  const [value, setValue] = useState(currFilter.value)

  useEffect(() => {
    clearTimeout(timer)
    setValue(currFilter.value)
  }, [currFilter])

  useEffect(() => {
    clearTimeout(timer)
    setTimer(setTimeout(() => setFilterValue(currFilterIndex, value), 1000))

    return () => clearTimeout(timer)
  }, [value])

  return (
    <SearchBox hover gap="8px" padding="0 11px">
      <SearchInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <IconWrapper width="20px" height="20px">
        <SearchIcon />
      </IconWrapper>
    </SearchBox>
  )
}

export default SearchByText
