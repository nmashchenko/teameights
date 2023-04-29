import { useState } from 'react'

import ArrowDown from '../../../assets/SearchPanel/ArrowDown'

import { FilterSelectBox, FilterSelectBtn, OptionItem, OptionsList } from './FilterSelect.styles'

const FilterSelect = ({ filtersArr, currFilter, setCurrFilter }) => {
  const [selectActive, setSelectActive] = useState(false)

  const onChangeFilter = (filter) => {
    setCurrFilter(filter)
    setSelectActive(false)
  }

  return (
    <FilterSelectBox>
      <FilterSelectBtn active={selectActive} onClick={() => setSelectActive((prev) => !prev)}>
        <p>{currFilter.text}</p>
        <ArrowDown />
      </FilterSelectBtn>
      {selectActive && (
        <OptionsList>
          {filtersArr.map((item) => {
            return (
              <OptionItem onClick={() => onChangeFilter(item)} key={item.name}>
                {item.text}
              </OptionItem>
            )
          })}
        </OptionsList>
      )}
    </FilterSelectBox>
  )
}

export default FilterSelect
