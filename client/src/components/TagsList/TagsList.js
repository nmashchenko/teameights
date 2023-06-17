import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ChecksTag from './ChecksTag/ChecksTag'
import RangeTag from './RangeTag/RangeTag'
import TextTag from './TextTag/TextTag'
import { StyledTagsList } from './TagsList.styles'

const TagsList = ({ sliceName, setFilterValueAction }) => {
  const dispatch = useDispatch()
  const filtersArr = useSelector((state) => state[sliceName])
  const setFilterValue = (index, value) => dispatch(setFilterValueAction({ index, value }))

  return (
    <StyledTagsList>
      {filtersArr.map((item, index) => {
        switch (item.type) {
          case 'text':
            return item.value.length ? (
              <TextTag
                key={item.name}
                value={item.value}
                filterIndex={index}
                setFilterValue={setFilterValue}
              />
            ) : null
          case 'checks':
            return item.value.length ? (
              <ChecksTag
                key={item.name}
                value={item.value}
                filterName={item.name}
                filterIndex={index}
                setFilterValue={setFilterValue}
              />
            ) : null
          case 'range':
            return item.value ? (
              <RangeTag
                key={item.name}
                value={item.value}
                filterIndex={index}
                setFilterValue={setFilterValue}
              />
            ) : null
          default:
            return
        }
      })}
    </StyledTagsList>
  )
}

export default TagsList
