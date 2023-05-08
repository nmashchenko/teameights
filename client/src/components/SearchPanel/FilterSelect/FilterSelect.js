import { useRef, useState } from 'react'

import ArrowDown from '../../../assets/SearchPanel/ArrowDown'
import { useOutsideClick } from '../../../hooks/useOutsideClick'

import { FilterSelectBox, FilterSelectBtn, OptionItem, OptionsList } from './FilterSelect.styles'

const FilterSelect = ({ filtersArr, currFilter, setCurrFilterIndex }) => {
  const [selectActive, setSelectActive] = useState(false)
  const selectRef = useRef(null)

  useOutsideClick(selectRef, () => setSelectActive(false))

  const onChangeFilter = (index) => {
    setCurrFilterIndex(index)
    setSelectActive(false)
  }

  return (
    <FilterSelectBox ref={selectRef}>
      <FilterSelectBtn active={selectActive} onClick={() => setSelectActive((prev) => !prev)}>
        <p>{currFilter.text}</p>
        <ArrowDown />
      </FilterSelectBtn>
      {selectActive && (
        <OptionsList>
          {filtersArr.map((item, i) => {
            return (
              <OptionItem onClick={() => onChangeFilter(i)} key={item.name}>
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
