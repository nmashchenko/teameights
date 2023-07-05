
import { FC, useRef, useState } from 'react'
import { useSelector } from "react-redux"


import ArrowDown from 'shared/assets/Arrows/ArrowDown'
import { useOutsideClick } from 'shared/lib/hooks'
import { FilterSelectBox, FilterSelectBtn, OptionItem, OptionsList } from './FilterSelect.styles'

const FilterSelect: FC<$TSFIXME> = ({ sliceName, currFilterIndex, setCurrFilterIndex }) => {
  const filtersArr = useSelector((state: $TSFIXME) => state[sliceName])

  const currFilter = filtersArr[currFilterIndex]

  const [selectActive, setSelectActive] = useState(false)
  const selectRef = useRef(null)

  useOutsideClick(selectRef, () => setSelectActive(false))

  const onChangeFilter = (index: $TSFIXME) => {
    setCurrFilterIndex(index)
    setSelectActive(false)
  }

  return (
    <FilterSelectBox isActive={selectActive} ref={selectRef}>
      <FilterSelectBtn active={selectActive} onClick={() => setSelectActive((prev) => !prev)}>
        <p>{currFilter.text}</p>
        <ArrowDown />
      </FilterSelectBtn>
      {selectActive && (
        <OptionsList>
          {filtersArr.map((item: $TSFIXME, i: number) => {
            return (
              <OptionItem
                isActive={currFilter.name === item.name}
                onClick={() => onChangeFilter(i)}
                key={item.name}
              >
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
