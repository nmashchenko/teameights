import { SearchBox } from '../Search.styles'

import { RangeItem } from './SearchByRange.styles'

const SearchByRange = ({ currFilter }) => {
  const rangeItems = []

  for (let i = 1; i <= currFilter.max; i++) {
    rangeItems.push(<RangeItem key={i}>{i}</RangeItem>)
  }

  return (
    <SearchBox gap="24px" padding="8px 30px">
      {rangeItems}
    </SearchBox>
  )
}

export default SearchByRange
