import { useState } from 'react'

import { SearchBox } from '../Search.styles'

import { RangeItem, RangeList, StyledRange } from './SearchByRange.styles'

const SearchByRange = ({ currFilter }) => {
  const [value, setValue] = useState([currFilter.min, currFilter.max])

  console.log(value)

  const rangeItems = []

  for (let i = 1; i <= currFilter.max; i++) {
    rangeItems.push(<RangeItem key={i}>{i}</RangeItem>)
  }

  return (
    <SearchBox gap="24px" padding="8px 30px">
      <StyledRange
        getAriaLabel={() => `${currFilter.name} range`}
        value={value}
        sx={{
          padding: 0,
          width: 'calc(100% - 46px)',
          height: '100%',
        }}
        onChange={(e, newValue) => setValue(newValue)}
        min={currFilter.min}
        max={currFilter.max}
        // getAriaValueText={valuetext}
        disableSwap
      />
      <RangeList>{rangeItems}</RangeList>
    </SearchBox>
  )
}

export default SearchByRange
