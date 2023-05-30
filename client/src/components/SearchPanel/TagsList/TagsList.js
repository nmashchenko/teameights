import ChecksTag from './ChecksTag/ChecksTag'
import RangeTag from './RangeTag/RangeTag'
import TextTag from './TextTag/TextTag'
import { StyledTagsList } from './TagsList.styles'

const TagsList = ({ filtersArr, setFilterValue }) => {
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
