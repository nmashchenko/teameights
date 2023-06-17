import { SearchBox } from '../Search.styles'

import { RangeItem, RangeList, StyledRange } from './SearchByRange.styles'

const SearchByRange = ({ currFilter, currFilterIndex, setFilterValue }) => {
  const rangeItems = []

  for (let i = 1; i <= currFilter.max; i++) {
    rangeItems.push(<RangeItem key={i}>{i}</RangeItem>)
  }

  const handleChange = (value) => {
    if (!currFilter.value || currFilter.value[0] !== value[0] || currFilter.value[1] !== value[1]) {
      console.log(1)
      setFilterValue(currFilterIndex, value)
    }
  }

  return (
    <SearchBox gap="24px" padding="8px 30px">
      <StyledRange
        getAriaLabel={() => `${currFilter.name} range`}
        value={!currFilter.value ? [currFilter.min, currFilter.max] : currFilter.value}
        sx={{
          padding: 0,
          width: 'calc(100% - 46px)',
          height: '100%',
        }}
        onChange={(e, newValue) => handleChange(newValue)}
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
