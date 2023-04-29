import { useEffect, useState } from 'react'

import SearchIcon from '../../../../assets/SearchIcon'
import { SearchBox, SearchBtn, SearchInput } from '../Search.styles'

const SearchByText = ({ placeholder, currFilter, setCurrFilter, setFilterValue }) => {
  const [timer, setTimer] = useState(null)
  const [value, setValue] = useState(currFilter.value)

  useEffect(() => {
    clearTimeout(timer)
    setTimer(
      setTimeout(() => {
        setFilterValue(currFilter.name, value)
        setCurrFilter((prev) => ({
          ...prev,
          value,
        }))
      }, 2000),
    )

    return () => clearTimeout(timer)
  }, [value])

  useEffect(() => {
    setValue(currFilter.value)
  }, [currFilter])

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
