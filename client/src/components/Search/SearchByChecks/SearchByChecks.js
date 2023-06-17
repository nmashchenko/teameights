import { useEffect, useRef, useState } from 'react'

import SearchIcon from '../../../assets/Shared/SearchIcon'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { SearchBox, SearchIconWrapper, SearchInput } from '../Search.styles'

import ChecksItem from './ChecksItem'
import { CheckListText, CheckListWrapper, StyledChecksList } from './SearchByChecks.styles'

const SearchByChecks = ({ currFilter, currFilterIndex, setFilterValue, items }) => {
  const [value, setValue] = useState('')
  const [listActive, setListActive] = useState(false)
  const listRef = useRef(null)

  const filteredItems = value.length
    ? items.filter(({ label }) => label.toLowerCase().includes(value.toLowerCase()))
    : items

  useOutsideClick(listRef, () => setListActive(false))

  useEffect(() => {
    setValue('')
  }, [currFilterIndex])

  const renderList = () => {
    return filteredItems.length ? (
      filteredItems.map((item) => (
        <ChecksItem
          key={item.value}
          currFilter={currFilter}
          currFilterIndex={currFilterIndex}
          setFilterValue={setFilterValue}
          item={item}
          label={item.label}
          value={item.value}
        />
      ))
    ) : (
      <CheckListText>{currFilter.name} were not found</CheckListText>
    )
  }

  const calcCols = () => {
    if (filteredItems.length > 16 && filteredItems.length <= 32) {
      return '1fr 1fr'
    } else if (filteredItems.length > 32) {
      return '1fr 1fr 1fr'
    } else {
      return 'none'
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
          <StyledChecksList columns={calcCols()}>{renderList()}</StyledChecksList>
        </CheckListWrapper>
      )}
    </SearchBox>
  )
}

export default SearchByChecks
