import Close from '../../../shared/assets/Shared/Close'
import { CrossWrapper, TagItem, TagSubItem } from '../TagsList.styles'

const RangeTag = ({ value, filterIndex, setFilterValue }) => {
  return (
    <TagItem>
      <TagSubItem onClick={() => setFilterValue(filterIndex, null)}>
        <p>{value[0] !== value[1] ? `${value[0]}-${value[1]}` : value[0]}</p>
        <CrossWrapper>
          <Close />
        </CrossWrapper>
      </TagSubItem>
    </TagItem>
  )
}

export default RangeTag
