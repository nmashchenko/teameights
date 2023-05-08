import { useRef, useState } from 'react'

import SearchIcon from '../../../../assets/SearchIcon'
import { useOutsideClick } from '../../../../hooks/useOutsideClick'
import { SearchBox, SearchIconWrapper, SearchInput } from '../Search.styles'

import ChecksItem from './ChecksItem'
import { CheckListWrapper, StyledChecksList } from './SearchByChecks.styles'

const SearchByChecks = ({ currFilter, currFilterIndex, setFilterValue, countries }) => {
  const [value, setValue] = useState('')
  const [listActive, setListActive] = useState(false)
  const listRef = useRef(null)

  const filteredCountries = value.length
    ? countries.filter(({ label }) => label.toLowerCase().includes(value.toLowerCase()))
    : countries

  useOutsideClick(listRef, () => setListActive(false))

  const renderList = () => {
    switch (currFilter.name) {
      case 'countries':
        return filteredCountries.map((country) => (
          <ChecksItem
            key={country.value}
            currFilter={currFilter}
            currFilterIndex={currFilterIndex}
            setFilterValue={setFilterValue}
            item={country}
            label={country.label}
            value={country.value}
          />
        ))
      default:
        return null
    }
  }

  return (
    <SearchBox>
      <SearchInput
        onFocus={() => setListActive(true)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Search or select ${currFilter.name}`}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {listActive && (
        <CheckListWrapper>
          <StyledChecksList ref={listRef}>{renderList()}</StyledChecksList>
        </CheckListWrapper>
      )}
    </SearchBox>
  )
}

export default SearchByChecks
