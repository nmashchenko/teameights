import { useEffect, useRef, useState } from 'react'

import SearchIcon from '../../../../assets/Shared/SearchIcon'
import { useOutsideClick } from '../../../../hooks/useOutsideClick'
import { SearchBox, SearchIconWrapper, SearchInput } from '../Search.styles'

import ChecksItem from './ChecksItem'
import { CheckListText, CheckListWrapper, StyledChecksList } from './SearchByChecks.styles'

const SearchByChecks = ({ currFilter, currFilterIndex, setFilterValue, countries }) => {
  const [value, setValue] = useState('')
  const [listActive, setListActive] = useState(false)
  const listRef = useRef(null)

  const filteredCountries = value.length
    ? countries.filter(({ label }) => label.toLowerCase().includes(value.toLowerCase()))
    : countries

  useOutsideClick(listRef, () => setListActive(false))

  useEffect(() => {
    setValue('')
  }, [currFilterIndex])

  const renderList = () => {
    switch (currFilter.name) {
      case 'countries':
        return filteredCountries.length ? (
          filteredCountries.map((country) => (
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
        ) : (
          <CheckListText>Countries were not found</CheckListText>
        )
      default:
        return <CheckListText>Items were not found</CheckListText>
    }
  }

  return (
    <SearchBox hover gap="8px" padding="0 11px">
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
        <CheckListWrapper ref={listRef}>
          <StyledChecksList>{renderList()}</StyledChecksList>
        </CheckListWrapper>
      )}
    </SearchBox>
  )
}

export default SearchByChecks
