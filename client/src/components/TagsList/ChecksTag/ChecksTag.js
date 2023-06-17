import { useRef, useState } from 'react'

import Close from '../../../assets/Shared/Close'
import { useOutsideClick } from '../../../hooks/useOutsideClick'
import { CrossWrapper, TagItem, TagSubItem } from '../TagsList.styles'

const ChecksTag = ({ value, filterName, filterIndex, setFilterValue }) => {
  const [listIsOpened, setListIsOpened] = useState(false)
  const itemsListRef = useRef(null)

  useOutsideClick(itemsListRef, () => setListIsOpened(false))

  const onRemoveItem = (itemValue) => {
    setFilterValue(
      filterIndex,
      value.filter((item) => item.value !== itemValue),
    )
  }

  return (
    <>
      <TagItem>
        <TagSubItem onClick={() => onRemoveItem(value[0].value)}>
          <p>{value[0].label}</p>
          <CrossWrapper>
            <Close />
          </CrossWrapper>
        </TagSubItem>
      </TagItem>
      {value.length > 1 && (
        <TagItem ref={itemsListRef} onClick={() => setListIsOpened(true)}>
          {listIsOpened ? (
            value.slice(1).map((item, index) => (
              <TagSubItem key={item.value} onClick={() => onRemoveItem(value[index + 1].value)}>
                <p>{item.label}</p>
                <CrossWrapper>
                  <Close />
                </CrossWrapper>
              </TagSubItem>
            ))
          ) : (
            <TagSubItem>
              <p>
                +{value.length - 1} {filterName}
              </p>
            </TagSubItem>
          )}
        </TagItem>
      )}
    </>
  )
}

export default ChecksTag
